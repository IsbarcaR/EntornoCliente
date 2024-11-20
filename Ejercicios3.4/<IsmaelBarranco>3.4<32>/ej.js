const visitedPages = new WeakSet();

function visitPage(page) {
  if (visitedPages.has(page)) {
    console.log(`Página ya visitada: ${page.url}`);
  } else {
    visitedPages.add(page);
    console.log(`Visitando nueva página: ${page.url}`);
  }
}

let page1 = { url: "https://google.com" };
let page2 = { url: "https://instagram.com" };

visitPage(page1);
visitPage(page2);
visitPage(page1);
page1 = null;
