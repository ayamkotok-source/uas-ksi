let keranjang = [];
let total = 0;

function tambahKeranjang(nama, harga) {
  keranjang.push({ nama, harga });
  total += harga;
  tampilKeranjang();
}

function tampilKeranjang() {
  let list = document.getElementById("keranjang");
  list.innerHTML = "";

  keranjang.forEach((item, index) => {
    list.innerHTML += `
      <li>
        ${item.nama} - Rp ${item.harga}
        <button onclick="hapus(${index})">❌</button>
      </li>
    `;
  });

  document.getElementById("total").innerText = total;
}

function hapus(index) {
  total -= keranjang[index].harga;
  keranjang.splice(index, 1);
  tampilKeranjang();
}

function checkout() {
  if (keranjang.length === 0) {
    alert("Keranjang kosong!");
  } else {
    alert("Checkout berhasil!\nTotal: Rp " + total);
  }
}
