function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const result = document.getElementById("result");

    if (username === "ajat@gmail.com" && password === "12345") {
        result.style.color = "green";
        result.innerHTML = "✅ SUCCESS LOGIN";
    } else {
        result.style.color = "red";
        result.innerHTML = "❌ LOGIN GAGAL";
    }
}
