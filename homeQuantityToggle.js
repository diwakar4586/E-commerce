export const homeQuantityToggle=(event,id,stock)=>{
    const currentCardElement = document.querySelector(`#card${id}`);
    // console.log(currentCardElement);

    const productQuantity=currentCardElement.querySelector(".productQuantity");

    // let quantity=parseInt(productQuantity.getAttribute('data-quantity')) || 1;
    let quantity=parseInt(productQuantity.innerText);

    if(event.target.className==="cartIncrement"){
        if(quantity<stock){
            quantity+=1;
        }else if(quantity===stock){
            quantity=stock;
        }
    }else{
        if(quantity>1){
            quantity-=1; 
        }
    }
    
    console.log("quantity : ",quantity);
    productQuantity.innerText=quantity;
    // productQuantity.setAttribute("data-quantity",quantity);
    return quantity;
}