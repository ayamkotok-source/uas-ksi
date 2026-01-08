let ukuran = "";

function pilihUkuran(u) {
  ukuran = u;
  document.getElementById("ukuranTerpilih").innerText =
    "Ukuran: " + ukuran;
}

function beli() {
  if (ukuran === "") {
    alert("Pilih ukuran dulu!");
  } else {
    alert("Transaksi berhasil!\nProduk: Kunci Ring Pas\nUkuran: " + ukuran);
  }
}
