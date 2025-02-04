import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import { chromium } from 'playwright'; // Importar desde Playwright


const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

// usa ejs layouts
app.use(expressLayouts);


// dice donde esta la carpeta de los layouts
app.set('layout', 'layouts/layout'); 

app.use(express.urlencoded({ extended: true }));

// ruta formulario
app.get("/", (req, res) => {
    res.render("form");
});

// ruta scraping
app.post("/scrape", async (req, res) => {
    const { url } = req.body;
    if (!url) {
        return res.send("Por favor, ingresa una URL válida.");
    }

    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(url);

    let product = {};

    if (url.includes('amazon')) {
        product = await scrapeAmazon(page);
    } else if (url.includes('aliexpress')) {
        product = await scrapeAliExpress(page);
    } else {
        return res.send("Sitio no soportado. Solo Amazon, AliExpress");
    }

    await browser.close();
    res.render("index", { product });
});

// ruta historial
app.get("/historial", (req, res) => {
    res.render("historial");
});

// scrape amazon 
async function scrapeAmazon(page) {
    const product = await page.evaluate(() => {
        const title = document.querySelector("h1 .a-size-large")?.innerText;
        const image = document.querySelector("#landingImage")?.getAttribute("src");
        const price = document.querySelector(".a-offscreen")?.innerText;
        const descripcion = document.querySelector("#feature-bullets")?.innerText;
        const stock = document.querySelector("#availability")?.innerText;
        return { title, image, price, descripcion, stock };

    });
    return product;
}
//scrape aliexpress
async function scrapeAliExpress(page) {
    const product = await page.evaluate(() => {
        const title = document.querySelector("div .title--wrap--UUHae_g")?.innerText;
        const image = document.querySelector("img.product-img")?.getAttribute("src");
        const price = document.querySelector("span.product-price-value")?.innerText;
        const descripcion = document.querySelector("div .specification--wrap--lxVQ2tj")?.innerText;
        const stock = document.querySelector('div.quantity--info--jnoo_pD')?.innerText;

        return { title, image, price, descripcion, stock };
    });
    return product;
}

//comparador aliexpress, no veas lo que ha costado 
app.get("/buscar-aliexpress", async (req, res) => {
    const { titulo } = req.query; 

    if (!titulo) {
        return res.status(400).json({ error: "Falta el título del producto" });
    }

    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

  
    const searchURL = `https://es.aliexpress.com/w/wholesale-${(titulo)}-.html`;
    console.log(searchURL)
    await page.goto(searchURL, { waitUntil: "domcontentloaded" });//espera a que cargue la pagina 

    const products = await page.evaluate(() => {
        let items = [];
        document.querySelectorAll("div .list--galleryWrapper--29HRJT4") 
            .forEach((el, index) => {
                if (index < 1) { 
                    let title = el.querySelector("div .multi--titleText--nXeOvyr")?.innerText || "Sin título";
                    let image = el.querySelector("img ")?.getAttribute("src") || "";
                    let price = el.querySelector("div .multi--price-sale--U-S0jtj")?.innerText || "No disponible";
                    items.push({ title, image, price });
                }
            });
        return items;
        
    });

    await browser.close();
    res.json(products); 
});

    

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});



