import { getCartProductFromLs } from "./getCartProductFromLs"

export const fetchQuantityFromLS=(id)=>{
    let productFromLS=getCartProductFromLs();

    let existingProduct=productFromLS.find((currProd)=>currProd.id===id);
    let quantity=1;
    let price=1;

    if(existingProduct){
        quantity=existingProduct.quantity;
        price=existingProduct.price;
    }   
    price=price.toFixed(2);
    return {quantity,price};
}