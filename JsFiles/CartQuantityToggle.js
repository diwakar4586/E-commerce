import { getBillFromLocalStorage } from "./getBillFromLocalStorage";
import { getCartProductFromLs } from "./getCartProductFromLs";

export const CartQuantityToggle = (event, id, stock, price) => {
    const currentCardElement = document.querySelector(`#card${id}`);
    // console.log(currentCardElement);

    let productQuantity = currentCardElement.querySelector(".productQuantity");
    let productPrice = currentCardElement.querySelector(".productPrice");

    // let quantity=parseInt(productQuantity.getAttribute('data-quantity')) || 1;
    let quantity = 1;
    let LocalStorageprice = 0;



    let fetchFromLs = getCartProductFromLs();
    let existingProd=fetchFromLs.find((currProd)=>currProd.id===id);

    if (existingProd) {
        quantity = existingProd.quantity;
        LocalStorageprice = existingProd.price;
    } else {
        LocalStorageprice = price;
        price = price;
    }

    if (event.target.className === "cartIncrement") {
        if (quantity < stock) {
            quantity += 1;
        } else if (quantity === stock) {
            quantity = stock;
        }
    } else {
        if (quantity > 1) {
            quantity -= 1;
        }
    }

    LocalStorageprice = price * quantity;
    // set the price
    existingProd.price = LocalStorageprice
    existingProd.quantity = quantity

    // update the ui directly
    productQuantity.innerText=existingProd.quantity;
    productPrice.innerText=Number((existingProd.price).toFixed(2));

    // update the localStorage
    let Idx = fetchFromLs.indexOf(existingProd);
    fetchFromLs.splice(Idx, 1, existingProd);
    localStorage.setItem("cartProductLS", JSON.stringify(fetchFromLs));

    // update the bill
    getBillFromLocalStorage();

    

    return quantity;
}