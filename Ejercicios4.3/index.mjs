import { chromium } from "playwright";

const browser= await chromium.launch(
    {headless:true}
)

const page =await browser.newPage()

await page.goto(
'https://www.amazon.es/Apple-iPhone-Pro-MAX-512/dp/B0DGJ5JY8R/ref=sr_1_1_sspa?crid=2XENIIKSBE747&dib=eyJ2IjoiMSJ9.EiM1JoPW8w0NnBfD8LfvH4Vv5lmfwsk8O3XM3Fv34I7dnP6BQEDQ_4xocZUVfcC9nA3BW0_hY3kmTKNZsbBnR2NtHLfRUJv_AYQDlUM5dPB4BA6a1f-XmdA1DZ7nryH5mC0c-JVMNRQyC6oG34zCuTvcqTm8B03y0JBDV55XpnHdCIzUgSfXYnHCzHYfjTtp1sP7DW57sYiKkuTLsgBWC7_pzrQ0Jy5RQ_L-eQeH4jfTAC_Stu_YEaHPYYr4QKRIDhZbgtAXspwAyZNAcCnjP6uivRwbvGNIzGb5KMeSbl0.etsuI7IHSqf4Hp_0p5rtFDPQZRAp2sibRz9U41n_wcs&dib_tag=se&keywords=iphone%2B16%2Bpro%2Bmax&qid=1737619460&sprefix=iphonw%2Caps%2C102&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1'
)
const products= await page.$$eval(
    '.a-container',
    (results)=>(
        results.map((el)=>{
            const title= el
                .querySelector('h1 .a-size-large')
                ?.innerText
/*             if(!title) return null
 */
            const image= el.querySelector('#landingImage').getAttribute('src')

            const price= el.querySelector('.a-offscreen ')?.innerText;

            const descripcion= el.querySelector('#feature-bullets ')?.innerText;

            const stock= el.querySelector('#availability ')?.innerText;



            return{title,image,price,descripcion,stock}
        })
    )
)
console.log(products);

await browser.close();