import { getCartProductFromLs } from "./getCartProductFromLs";

export const removeFromCart=(event,id)=>{
    console.log("id: ",id);
    let arrLocalStorageProduct=getCartProductFromLs();
    let removeCart=arrLocalStorageProduct.filter((currProd)=> currProd.id!==id);
    console.log("remove cart : ",removeCart);
    localStorage.setItem("cartProductLS",JSON.stringify(removeCart));

    // update the cart
    document.querySelector(".fa-cart-shopping").innerText=" "+ removeCart.length;

    // remove the div
    let removeDiv=document.getElementById(`card${id}`);
    console.log("remove ",removeDiv);
    if(removeDiv){
        removeDiv.remove();
    }
    return;
}