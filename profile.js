const API = "http://localhost:3000";

async function cargarPerfil() {
    const guardado = JSON.parse(localStorage.getItem("usuario"));

    if (!guardado) {
        window.location.href = "index.html";
        return;
    }

    try {
        const res = await fetch(`${API}/users/${guardado.Id}`);
        const datos = await res.json();

        document.getElementById("perfilNombre").textContent = "Nombre: " + datos.Nombre;
        document.getElementById("perfilCorreo").textContent = "Correo: " + datos.Correo;
    } catch (error) {
        alert("No se pudo cargar el perfil");
    }
}

cargarPerfil();