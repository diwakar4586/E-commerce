import { getCartProductFromLs } from "./getCartProductFromLs";

export const addToCart=(event,id,stock)=>{
    
    let arrLocalStorageProduct=getCartProductFromLs();
    
    
    const currentAddToCart=document.querySelector(`#card${id}`);
    
    let quantity=currentAddToCart.querySelector(".productQuantity").innerText;
    let price=currentAddToCart.querySelector(".productPrice").innerText;

    price=price.substring(1,price.length);
    price=Number(price*quantity);
    quantity=Number(quantity);

    let existProd=arrLocalStorageProduct.find((curr)=> curr.id===id);

    if(existProd){
        

        let Idx=arrLocalStorageProduct.indexOf(existProd);
        // if(quantity>1) {
            existProd.quantity+=quantity;
            console.log("exist  : ",existProd.quantity);
            existProd.price+=Number(price);
        // }

        arrLocalStorageProduct.splice(Idx,1,existProd);
        localStorage.setItem("cartProductLS",JSON.stringify(arrLocalStorageProduct));
        // alert("already exist");
        return false;
    }

    arrLocalStorageProduct.push({id,quantity,price});
    localStorage.setItem("cartProductLS",JSON.stringify(arrLocalStorageProduct));
    
    // console.log("size of an arr : ",arrLocalStorageProduct.length);
    document.querySelector(".fa-cart-plus").innerText=arrLocalStorageProduct.length;
    // console.log("size of navCart : ",navcart);
    console.log(quantity,price);
}