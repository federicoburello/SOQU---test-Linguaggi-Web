async function exampleFetch() {
    const response = await fetch('https://raw.githubusercontent.com/dariusk/corpora/master/data/technology/programming_languages_popular.json');
    const json = await response.json();
    console.log(json);

    const items = document.getElementsByClassName('item_text');

    for (let i = 0; i < items.length && i < json.programming_languages_popular.length; i++) {
        items[i].textContent = json.programming_languages_popular[i];
    }

    let W3logo = document.getElementsByClassName("eltdf-normal-logo")[0];
    W3logo.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/768px-W3Schools_logo.svg.png';   
    let urlWiki = "https://it.wikipedia.org/wiki/";

    for (let i = 0; i < items.length && i < json.programming_languages_popular.length; i++) {
        let link = document.createElement("a");
        link.textContent = json.programming_languages_popular[i];
        link.href = urlWiki + encodeURIComponent(json.programming_languages_popular[i]);
        link.target = "_blank";
        items[i].innerHTML = '';
        items[i].appendChild(link);
        }
}
exampleFetch();