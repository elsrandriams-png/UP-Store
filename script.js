let selectedProduct = "";

function openForm(product){
  selectedProduct = product;
  document.getElementById("paymentBox").style.display = "block";
  document.getElementById("productName").innerText = product;
}

function closeForm(){
  document.getElementById("paymentBox").style.display = "none";
}

function confirmOrder(){
  let uid = document.getElementById("uid").value;
  let ref = document.getElementById("ref").value;

  if(uid=="" || ref==""){
    alert("Fenoy tsara ny UID sy référence!");
    return;
  }

  let message =
  "UP STORE COMMANDE\n\n"+
  "Produit: "+selectedProduct+"\n"+
  "UID: "+uid+"\n"+
  "Référence: "+ref;

  let wa = "https://api.whatsapp.com/send?phone=261373179561&text="+encodeURIComponent(message);
  let email = "mailto:Elsrandriams@gmail.com?subject=Commande UP Store&body="+encodeURIComponent(message);

  window.open(wa,"_blank");
  window.location.href = email;
}
