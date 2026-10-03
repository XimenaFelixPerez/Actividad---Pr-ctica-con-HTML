const API = "http://localhost:3000";

document.getElementById("btnLogin").addEventListener("click", login);
document.getElementById("btnRegistro").addEventListener("click", registrar);

async function registrar() {
    const campos = document.getElementById("camposRegistro");

    if (campos.style.display === "none") {
        campos.style.display = "block";
        return;
    }

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("contrasena").value;

    if (!nombre || !apellido || !email || !password) {
        alert("Por favor, complete todos los campos");
        return;
    }

    try {
        const response = await fetch(`${API}/users`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nombre, apellido, email, password })
        });
        if (response.ok) {
            alert("Usuario registrado, ahora inicia sesión");
            campos.style.display = "none";
        } else {
            alert("No se pudo registrar el usuario");
        }
    } catch (error) {
        alert("Error al registrar el usuario");
    }
}

async function login() {
    const Email = document.getElementById("email").value;
    const Password = document.getElementById("contrasena").value;

    try {
        const response = await fetch(`${API}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ Email, Password })
        });
        const data = await response.json();
        if (response.ok) {
            localStorage.setItem("usuario", JSON.stringify(data.user));
            window.location.href = "profile.html";
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    } catch (error) {
        alert("Error al iniciar sesión");
    }
}