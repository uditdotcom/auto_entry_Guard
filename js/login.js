document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin123") {
        alert("Login Successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Credentials!");
    }
});
