const VENTAS_BASE = 5;

function calcuarComision(numeroVenta,precioProducto) {
    let comision = 0;

    if (numeroVenta > VENTAS_BASE) {
        let ventasExtra = numeroVenta - VENTAS_BASE;
        comision = ventasExtra * (precioProducto * 0.10);
    }

    return comision;
}

function calcular(){

    //recuperamos propiedades de las cajas de texto
    let componenteSueldoBase = document.getElementById("txtSueldoBase");
    let componenteVentas = document.getElementById("txtVentas");
    let componentePrecios = document.getElementById("txtPrecio");

    //recuperamos el valor de las cajas de texto
    let SueldoBaseStr = componenteSueldoBase.value;
    let numeroVentaStr = componenteVentas.value;
    let precioProductoStr = componentePrecios.value;

    //convertimos el texto a numeros
    let sueldoBase = parseFloat(SueldoBaseStr);
    let numeroVenta = parseFloat(numeroVentaStr);
    let precioProducto = parseFloat(precioProductoStr);

    let comision = calcuarComision(numeroVenta, precioProducto);

    let total = sueldoBase + comision;

    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    spSueldoBase.textContent = sueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;
}