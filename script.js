let selectedProduct = "";

function openForm(product) {
  selectedProduct = product;
  document.getElementById("paymentBox").classList.remove("hidden");
  document.getElementById("productName").innerText = product;
}

function closeForm() {
  document.getElementById("paymentBox").classList.add("hidden");
}

function confirmOrder() {
  let uid = document.getElementById("uid").value;
  let ref = document.getElementById("ref").value;

  if (uid === "" || ref === "") {
    alert("Fenoy tsara ny UID sy référence!");
    return;
  }

  let message =
    "UP STORE COMMANDE\n\n" +
    "Produit: " + selectedProduct + "\n" +
    "UID: " + uid + "\n" +
    "Référence: " + ref;

  // WhatsApp
  let phone = "261373179561";
  let wa = "https://api.whatsapp.com/send?phone=" + phone + "&text=" + encodeURIComponent(message);

  // Email
  let email = "mailto:Elsrandriams@gmail.com?subject=Commande UP Store&body=" + encodeURIComponent(message);

  window.open(wa, "_blank");
  window.location.href = email;
}
