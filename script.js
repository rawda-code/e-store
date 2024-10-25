let myDiv = document.querySelector('.product-container');
let r = new XMLHttpRequest();
let allProducts = [];

r.onload = () => {
    if (r.readyState === 4 && r.status === 200) {
        allProducts = JSON.parse(r.responseText);
        displayProducts(allProducts);
    }
};

r.open('GET', 'https://fakestoreapi.com/products', true);
r.send();

function displayProducts(products) {
    myDiv.innerHTML = '';
    products.forEach((p) => {
        let productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        productDiv.innerHTML = `
            <h3 class="product-title">${p.title}</h3>
            <img src="${p.image}" alt="${p.title}">
            <span class="price">$${p.price}</span>
        `;
        myDiv.appendChild(productDiv);
    });
}

document.querySelectorAll('.dropdown-item').forEach((item) => {
    item.addEventListener('click', (e) => {
        let category = e.target.textContent;
        let filteredProducts = allProducts.filter(p => p.category === category.toLowerCase());
        displayProducts(filteredProducts);
    });
});

const bodyEl= document.querySelector('body');

bodyEl.addEventListener('mousemove', (event)=>{
const xPos = event.offsetX;
const yPos = event.offsetY;
const spanEl = document.createElement('span');
spanEl.classList.add('heart')
spanEl.style.left= xPos +'px';
spanEl.style.top= yPos +'px';
const size= Math.random()*50;
spanEl.style.width = size+'px';
spanEl.style.height = size+'px';
bodyEl.appendChild(spanEl);
setTimeout(()=>{
    spanEl.remove();
}, 3000)
})