import products from './api/products.json';
import { CartQuantityToggle } from './CartQuantityToggle';
import { fetchQuantityFromLS } from './fetchQuantityFromLS';
import { getBillFromLocalStorage } from './getBillFromLocalStorage';

import { getCartProductFromLs } from './getCartProductFromLs';
import { homeQuantityToggle } from './homeQuantityToggle';
import { removeFromCart } from './removeFromCart';
import { updateCartValue } from './updateCartValue';


// update the billing part;
getBillFromLocalStorage();

// fetch data from localStorage
const localStorageData = getCartProductFromLs();
// show no. length of the data to navbar
document.querySelector(".fa-cart-shopping").innerText = localStorageData.length;


// console.log("local storage : ",localStorageData);
// console.log("api storage : ",products);

const fullInfofData = products.filter((ele) => (
    localStorageData.some((ls) => ls.id === ele.id)
));
// console.log("fullInfo data : ",fullInfofData);

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");
const TotalBill = document.querySelector(".productCartTotalElem");



const showCartProduct = () => {

    fullInfofData.filter((currProd) => {
        const { category, id, image, name, stock, price } = currProd;
        let productClone = document.importNode(templateContainer.content, true);
        // change the cardId
        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

        // select the fetch Id
        let BillProd = TotalBill.querySelector(".productSubTotal");

        let fetchQuantity = fetchQuantityFromLS(id);

        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;

        // price and quantity fetch from LocalStorage
        productClone.querySelector(".productPrice").textContent = fetchQuantity.price;
        productClone.querySelector(".productQuantity").textContent = fetchQuantity.quantity;

        // remove from cart and also remove from LS;
        productClone.querySelector(".remove-to-cart-button").addEventListener("click", (event) => {
            removeFromCart(event, id);
        })

        // increment and decrement in cart section quantity
        productClone
            .querySelector(".stockElement")
            .addEventListener("click", (event) => {
                CartQuantityToggle(event, id, stock, price);
            });

        // let tBill=getBillFromLocalStorage();
        // BillProd.innerText=Number(tBill.toFixed(2));

        cartElement.append(productClone);



    })


}

showCartProduct();