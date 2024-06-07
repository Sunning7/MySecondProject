let productCount = 0;


const button = document.getElementById('addButton');
const counter = document.getElementById('productCount');


button.addEventListener('click', () => {

    productCount++;

    counter.textContent = `Кількість продуктів: ${productCount}`;
});