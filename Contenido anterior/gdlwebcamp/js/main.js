(function() {
    'use strict';

    var regalo = document.getElementById("regalo");

    document.addEventListener("DOMContentLoaded", () => {

        // Mapa

        var map = L.map('mapa').setView([3.479635, -76.499594], 16);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([3.479635, -76.499594]).addTo(map)
            .bindPopup('GDLWebCamp 2020 <br> Boletos ya disponibles')
            .openPopup();
            // .bindTooltip("Un Tooltip")
            // .openTooltip();


        // Campos datos usuario
        var nombre = document.getElementById("nombre");
        var apellido = document.getElementById("apellido");
        var email = document.getElementById("email");

        // Campos pases
        var pase_dia = document.getElementById("pase_dia");
        var pase_completo = document.getElementById("pase_completo");
        var pase_dosdias = document.getElementById("pase_dosdias");

        // Botones y divs
        var calcular = document.getElementById("calcular");
        var errorDiv = document.getElementById("error");
        var botonRegistro = document.getElementById("btnRegistro");
        var lista_productos = document.getElementById("lista-productos");
        var suma = document.getElementById("suma-total");

        // Extras
        var camisas = document.getElementById("camisa_evento");
        var etiquetas = document.getElementById("etiquetas");

        calcular.addEventListener("click", calcularMontos);

        pase_dia.addEventListener("blur", mostrarDias);
        pase_dosdias.addEventListener("blur", mostrarDias);
        pase_completo.addEventListener("blur", mostrarDias);

        nombre.addEventListener("blur", validarCampos);
        apellido.addEventListener("blur", validarCampos);
        email.addEventListener("blur", validarCampos);
        email.addEventListener("blur", validarMail);
        
        function validarCampos() {
            if(this.value == "") {
                errorDiv.style.display = "block";
                errorDiv.innerHTML = "Este campo es obligatorio";
                this.style.border = "1px solid red";
                errorDiv.style.border = "1px solid red";
            }
            else {
                errorDiv.style.display = "none";
                this.style.border = "1px solid #CCCCCC";
            }
        }

        function validarMail() {
            if(this.value.indexOf("@") > -1) {
                errorDiv.style.display = "none";
                this.style.border = "1px solid #CCCCCC";
            }
            else {
                errorDiv.style.display = "block";
                errorDiv.innerHTML = "Email no válido";
                this.style.border = "1px solid red";
                errorDiv.style.border = "1px solid red";
            }
        }

        function calcularMontos(event) {
            event.preventDefault();

            if(regalo.value === "") {
                alert("Debes elegir un regalo");
                regalo.focus();
            }
            else {
                var boletosDia = parseInt(pase_dia.value, 10) || 0,
                    boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
                    boletoCompleto = parseInt(pase_completo.value, 10) || 0,
                    cantCamisas = parseInt(camisas.value, 10) || 0,
                    cantEtiquetas = parseInt(etiquetas.value, 10) || 0;

                var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletoCompleto * 50) + ((cantCamisas * 10) * 0.93) + (cantEtiquetas * 2);

                var listadoProductos = [];

                if(boletosDia >= 1) {
                    listadoProductos.push(`${ boletosDia } pases por día`);
                }

                if(boletos2Dias >= 1) {
                    listadoProductos.push(`${ boletos2Dias } pases por dos días`);
                }

                if(boletoCompleto >= 1) {
                    listadoProductos.push(`${ boletoCompleto } pases completos`);
                }

                if(cantCamisas >= 1) {
                    listadoProductos.push(`${ cantCamisas } camisas`);
                }

                if(cantEtiquetas >= 1) {
                    listadoProductos.push(`${ cantEtiquetas } etiquetas`);
                }

                lista_productos.style.display = "block";
                lista_productos.innerHTML = "";

                for(var i = 0; i < listadoProductos.length; i++) {
                    lista_productos.innerHTML += listadoProductos[i] + "<br>"
                }

                suma.innerHTML = `$ ${ totalPagar.toFixed(2) }`;
            }
        }

        function mostrarDias() {
            var boletosDia = parseInt(pase_dia.value, 10) || 0,
                boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
                boletoCompleto = parseInt(pase_completo.value, 10) || 0;
            
            var diasElegidos = [];

            if(boletosDia > 0) {
                diasElegidos.push("viernes");
            }

            if(boletos2Dias > 0) {
                diasElegidos.push("viernes", "sabado");
            }

            if(boletoCompleto > 0) {
                diasElegidos.push("viernes", "sabado", "domingo");
            }

            for(var i = 0; i < diasElegidos.length; i++) {
                document.getElementById(diasElegidos[i]).style.display = "block";
            }
        }
    });
})();