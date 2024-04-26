const productContainer = document.querySelector('#productContainer')
const productTemplate = document.querySelector('#productTemplate');
const NavBarValue = document.querySelector('.fa-cart-plus');


import { addToCart } from './addToCart.js';
import { getCartProductFromLs } from './getCartProductFromLs.js';
import { homeQuantityToggle } from './homeQuantityToggle.js'
import { updateCartValue } from './updateCartValue.js';


export const showProductContainer = (products) => {
    if (!products) {
        return false;
    }

    products.forEach((ele) => {
        const { brand, category, description, id, image, name, price, stock } = ele;

        
        const productClone = document.importNode(productTemplate.content, true);
        
        
        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
        
        
        productClone.querySelector('.productName').textContent = name;
        productClone.querySelector('.productImage').src = image;
        productClone.querySelector('.productImage').alt = name;
        productClone.querySelector('.productPrice').textContent = `₹${price}`;
        productClone.querySelector('.productActualPrice').textContent = `₹${(price * 1.5).toFixed(2)}`;
        productClone.querySelector('.productDescription').textContent = description;
        productClone.querySelector('.productStock').textContent = stock;
        productClone.querySelector('.category').textContent = category;
 
        productClone
        .querySelector(".stockElement")
        .addEventListener("click", (event) => {
            homeQuantityToggle(event, id, stock);
        });

        productClone.querySelector('.add-to-cart-button').addEventListener("click",(event)=>{
            addToCart(event,id,stock);
        })
        let AddToCartLength=getCartProductFromLs();
        document.querySelector(".fa-cart-plus").textContent=AddToCartLength.length;
        console.log("size of an arr: ",AddToCartLength.length);
        productContainer.append(productClone);
        
    });
}