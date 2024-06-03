const products = [
    { id: 0, image: 'image1.webp', title: 'Floral Print Gorgette', price: 120 },
    { id: 1, image: 'image2.webp', title: 'Seelves MIDI Dress', price: 300 },
    { id: 2, image: 'image3.webp', title: 'Gorgeous Red Floral', price: 250 },
    { id: 3, image: 'image4.webp', title: 'White Floral Dress', price: 500 },
];

const categories = [...new Set(products.map((item) => item))];
let i = 0;

document.getElementById('root').innerHTML = categories.map((item) => {
    const { image, title, price } = item;
    return `
        <div class='box'>
            <div class='img-box'>
                <img class='images' src="${image}" alt="${title}">
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>$${price}.00</h2>
                <button onclick='addtocart(${i++})'>Add to cart</button>
            </div>
        </div>`;
}).join('');

let cart = [];

function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let total = 0;
    document.getElementById("count").innerHTML = cart.length;

    if (cart.length === 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$0.00";
    } else {
        document.getElementById('cartItem').innerHTML = cart.map((item, index) => {
            const { image, title, price } = item;
            total += price;
            return `
                <div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src="${image}" alt="${title}">
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size:15px;'>$${price}.00</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
                </div>`;
        }).join('');
        document.getElementById("total").innerHTML = `$${total}.00`;
    }
}
