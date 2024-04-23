import products from '../api/products.json';
import { fetchQuantityFromLS } from './fetchQuantityFromLS';

import { getCartProductFromLs } from './getCartProductFromLs';
import { removeFromCart } from './removeFromCart';

const localStorageData=getCartProductFromLs();
// show no. length of the data to navbar
document.querySelector(".fa-cart-shopping").innerText=" "+ localStorageData.length;

console.log("local storage : ",localStorageData);
console.log("api storage : ",products);

const fullInfofData = products.filter((ele) => (
    localStorageData.some((ls)=>ls.id===ele.id)
));
// console.log("fullInfo data : ",fullInfofData);

const cartElement=document.querySelector("#productCartContainer");
const templateContainer=document.querySelector("#productCartTemplate");



const showCartProduct=()=>{

    fullInfofData.filter((currProd)=>{
        const {category,id,image,name,stock,price}=currProd;
        let productClone=document.importNode(templateContainer.content,true);
        // change the cardId
        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

        let fetchQuantity=fetchQuantityFromLS(id);

        productClone.querySelector(".category").textContent=category;
        productClone.querySelector(".productName").textContent=name;
        productClone.querySelector(".productImage").src=image;
        
        // price and quantity fetch from LocalStorage
        productClone.querySelector(".productPrice").textContent=fetchQuantity.price;
        productClone.querySelector(".productQuantity").textContent=fetchQuantity.quantity;

        // remove from cart and also remove from LS;
        productClone.querySelector(".remove-to-cart-button").addEventListener("click",(event)=>{
            removeFromCart(event,id);
        })

        cartElement.append(productClone);
    })


}

showCartProduct();