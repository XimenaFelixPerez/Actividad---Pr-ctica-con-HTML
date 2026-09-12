document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.querySelector("form");
    if (formulario) {
        formulario.setAttribute("onsubmit", "return false;");
    }

    document.querySelectorAll('input[name="tipo"]').forEach(radio => {
        radio.addEventListener("change", (e) => {
            e.preventDefault();
            document.getElementById("contenidoOculto").style.display = "block";
        });
    });


    const chk1 = document.getElementById("chk1");
    const chk2 = document.getElementById("chk2");
    const btnConfirmar = document.getElementById("btnConfirmar");

    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
    });

    function verificarChecks() {
        btnConfirmar.disabled = !(chk1.checked && chk2.checked);
    }
    chk1.addEventListener("change", verificarChecks);
    chk2.addEventListener("change", verificarChecks);

    const paisSelect = document.getElementById("paisSelect");
    const regionSelect = document.getElementById("regionSelect");

let listaPaises = [];

if (paisSelect && regionSelect) {
    fetch("./country-region-data.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            listaPaises = data;
            data.forEach(function (pais) {
                const option = document.createElement("option");
                option.value = pais.countryShortCode;
                option.textContent = pais.countryName;
                paisSelect.appendChild(option);
            });
        });

    paisSelect.addEventListener("change", function () {
        const codigoPais = this.value;
        regionSelect.innerHTML = '<option value="">-- Selecciona una región --</option>';

        if (!codigoPais) {
            regionSelect.disabled = true;
            return;
        }

        const paisEncontrado = listaPaises.find(function (p) {
            return p.countryShortCode === codigoPais;
        });

        if (paisEncontrado) {
            paisEncontrado.regions.forEach(function (region) {
                const option = document.createElement("option");
                option.value = region.shortCode;
                option.textContent = region.name;
                regionSelect.appendChild(option);
            });
            regionSelect.disabled = false;
        }
    });
}
});