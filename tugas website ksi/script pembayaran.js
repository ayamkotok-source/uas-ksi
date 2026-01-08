let harga = 250000;
let ongkir = 7500;
let total = harga + ongkir;

document.getElementById("total").innerText = total;

function bayar() {
  let metode = document.getElementById("metode").value;

  if (metode === "") {
    alert("Pilih metode pembayaran!");
  } else {
    document.getElementById("status").innerHTML =
      "✅ Pembayaran <b>" + metode + "</b> berhasil.<br>Pesanan sedang diproses.";
  }
}
