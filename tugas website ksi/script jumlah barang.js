let harga = 6877;
let qty = 1;

function updateTotal() {
  document.getElementById("qty").value = qty;
  document.getElementById("total").innerText = harga * qty;
}

function tambah() {
  qty++;
  updateTotal();
}

function kurangi() {
  if (qty > 1) {
    qty--;
    updateTotal();
  }
}
