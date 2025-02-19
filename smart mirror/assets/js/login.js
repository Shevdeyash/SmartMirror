document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    const users = {
        "admin": "admin123",
        "display": "display123"
    };

    if (users[username] && users[username] === password) {
        if (username === "admin") {
            window.location.href = "admin_panel.html"; // Admin
        } else {
            window.location.href = "display_mode.html"; // Display
        }
    } else {
        errorMessage.textContent = "Invalid Username or Password!";
    }
});
