document.getElementById("btnLogin").addEventListener("click", login);
document.getElementById("btnRegistro").addEventListener("click", registrar);

function registrar() {
    alert("Función de registro pendiente");
}

function login() {
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;

    if (usuario === "ximena" && contrasena === "12345") {
        window.location.href = "index.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}