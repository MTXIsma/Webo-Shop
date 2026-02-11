let cart = JSON.parse(localStorage.getItem("cart")) || [];

export function addToCart(productId){
  const existing = cart.find(p=>p.id===productId);
  if(existing){ existing.qty++; }
  else{ cart.push({id:productId, qty:1}); }
  localStorage.setItem("cart",JSON.stringify(cart));
  alert("Produit ajouté au panier !");
}

export function getCart(){ return cart; }

export function clearCart(){
  cart = [];
  localStorage.setItem("cart",JSON.stringify(cart));
}
