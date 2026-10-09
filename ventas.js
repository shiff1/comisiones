const VENTAS_BASE = 5;

function calcuarComision(numeroVenta,precioProducto) {
    let comision = 0;

    if (numeroVenta > VENTAS_BASE) {
        let ventasExtra = numeroVenta - VENTAS_BASE;
        comision = ventasExtra * (precioProducto * 0.10);
    }

    return comision;
}

function validarVenta() {
    let numeroVentaStr = document.getElementById("txtVentas").value;

    if (numeroVentaStr.length > 5) {
        alert("Maximo 5 caracteres");
        return false;
    } else {
        return true;
    }
}

function calcular(){

     if (!validarVenta()) {
        return;
    }

    //recuperamos propiedades de las cajas de texto
    //let componenteSueldoBase = document.getElementById("txtSueldoBase");
    //let componenteVentas = document.getElementById("txtVentas");
    //let componentePrecios = document.getElementById("txtPrecio");

    //recuperamos el valor de las cajas de texto
    //let SueldoBaseStr = componenteSueldoBase.value;

    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVenta = recuperarFloat("txtVentas");
    let precioProducto = recuperarFloat("txtPrecio");

    //let numeroVentaStr = componenteVentas.value;
    //let precioProductoStr = componentePrecios.value;
    
    //convertimos el texto a numeros

   // let sueldoBase = parseFloat(SueldoBaseStr);
    //let numeroVenta = parseFloat(numeroVentaStr);
    //let precioProducto = parseFloat(precioProductoStr);

    let comision = calcuarComision(numeroVenta, precioProducto);

    let total = sueldoBase + comision;

    //let spSueldoBase = document.getElementById("spSueldoBase");
    //let spComision = document.getElementById("spComision");
    //let spTotal = document.getElementById("spTotal");

    //spSueldoBase.textContent = sueldoBase;
    //spComision.textContent = comision;
    //spTotal.textContent = total;

    mostrarEnSpan("spSueldoBase", sueldoBase);
    mostrarEnSpan("spComision", comision);
    mostrarEnSpan("spTotal", total);

}


function validarInput(idInput, idError) {
    const input = document.getElementById(idInput);
    const error = document.getElementById(idError);
    const valor = input.value.trim();

    error.textContent = "";

    if (valor === "") {
        error.textContent = "Este campo no puede estar vacío.";
        return false;
    }

    if (!/^\d+$/.test(valor)) {
        error.textContent = "Solo se permiten números enteros.";
        return false;
    }

    if (valor.length > 5) {
        error.textContent = "Máximo permitido: 5 dígitos.";
        return false;
    }

    return true;
}