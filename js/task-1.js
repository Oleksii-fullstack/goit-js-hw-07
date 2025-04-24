
const listElem = document.getElementById('categories');
const listElementCounter = listElem.querySelectorAll('.item').length;
console.log(`Number of categories: ${listElementCounter}`);


const listElementArray = listElem.querySelectorAll('.item');
for (const item of listElementArray) {
    const category = item.querySelector('h2').textContent;
    const elements = item.querySelectorAll('ul > li').length;
    console.log(`Category: ${category}` + `\n` + `Elements: ${elements}`);
}