const cartValue = document.querySelector("#cartValue");

export const updateCartValue = (cartProducts) => {
  return (cartValue.innerHTML = ` <i class="fa-solid fa-cart-shopping"> ${cartProducts.length/2} </i>`);
//   <i class="fa-solid fa-cart-shopping"></i> 0</a>
};