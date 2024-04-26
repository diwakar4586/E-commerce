import { getCartProductFromLs } from "./getCartProductFromLs"

export const getBillFromLocalStorage=()=>{
    let fetchFromLs=getCartProductFromLs();
    const TotalBill=document.querySelector(".productCartTotalElem");
    let BillProd=TotalBill.querySelector(".productSubTotal");
    let finalBillProd=TotalBill.querySelector(".productFinalTotal");
    let sum=0;
    
    fetchFromLs=getCartProductFromLs();
    fetchFromLs.forEach((ele)=>sum+=ele.price);
    BillProd.innerText=Number(sum);
    finalBillProd.textContent=Number((sum+sum*(0.18)).toFixed(2));
    return;
}