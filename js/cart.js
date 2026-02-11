<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Panier - WeBo Shop</title>
<link rel="stylesheet" href="css/style.css">
</head>
<body>
<h1>Votre Panier</h1>
<a href="index.html">Retour aux produits</a>
<div id="cartList"></div>
<h2>Total: <span id="totalPrice">0</span>€</h2>

<!-- Boutons de paiement -->
<a id="paypalBtn" href="https://paypal.me/Isma016" target="_blank">
  <button>Payer via PayPal</button>
</a>
<button id="cryptoBtn">Payer via Crypto / LTC</button>

<script type="module">
import { getCart, clearCart } from './js/cart.js';
import { products } from './js/products.js';

const cart = getCart();
const container = document.getElementById("cartList");
let total = 0;

cart.forEach(item=>{
  const p = products.find(prod=>prod.id===item.id);
  container.innerHTML += `<p>${p.name} x${item.qty} - ${(p.price*item.qty).toFixed(2)}€</p>`;
  total += p.price*item.qty;
});

document.getElementById("totalPrice").innerText = total.toFixed(2);

// Crypto simulé
document.getElementById("cryptoBtn").onclick = ()=>{
  if(total===0){alert("Votre panier est vide !"); return;}
  alert(`Redirection vers Crypto / LTC pour payer ${total.toFixed(2)}€ (Simulé)`);
  clearCart();
  window.location.reload();
};
</script>
</body>
</html>
