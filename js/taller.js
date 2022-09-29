
const ensalada = document.getElementById('ensalada');
const cantEnsalada = document.getElementById('cantEnsalada');


ensalada.addEventListener("click", () => {

    if(ensalada.checked == true){
        cantEnsalada.disabled = false;
        recargarVenta('agregar' ,'ensalada', cantEnsalada.value);
    }

    if(ensalada.checked == false){
        cantEnsalada.disabled = true;
        cantEnsalada.value = '1';
        recargarVenta('eliminar' ,'ensalada', cantEnsalada.value);
    }
});

cantEnsalada.addEventListener("keyup", () => {
    if(cantEnsalada.value.length > 0){
        recargarVenta('modificar' ,'ensalada', cantEnsalada.value);
    }
});





// para papa frita
const papaFrita = document.getElementById('papaFrita');
const cantpapaFrita = document.getElementById('cantpapaFrita');

papaFrita.addEventListener("click", () => {

    if(papaFrita.checked == true){
        cantpapaFrita.disabled = false;
        recargarVenta('agregar' ,'papaFrita', cantpapaFrita.value);
    }

    if(papaFrita.checked == false){
        cantpapaFrita.disabled = true;
        cantpapaFrita.value = '1';
        recargarVenta('eliminar' ,'papaFrita', cantpapaFrita.value);
    }
});

cantpapaFrita.addEventListener("keyup", () => {
    if(cantpapaFrita.value.length > 0){
        recargarVenta('modificar' ,'papaFrita', cantpapaFrita.value);
    }
});






// Para piezaPolloGrande
const piezaPolloGrande = document.getElementById('piezaPolloGrande');
const cantpiezaPolloGrande = document.getElementById('cantpiezaPolloGrande');


piezaPolloGrande.addEventListener("click", () => {

    if(piezaPolloGrande.checked == true){
        cantpiezaPolloGrande.disabled = false;
        recargarVenta('agregar' ,'piezaPolloGrande', cantpiezaPolloGrande.value);
    }

    if(piezaPolloGrande.checked == false){
        cantpiezaPolloGrande.disabled = true;
        cantpiezaPolloGrande.value = '1';
        recargarVenta('eliminar' ,'piezaPolloGrande', cantpiezaPolloGrande.value);
    }
});

cantpiezaPolloGrande.addEventListener("keyup", () => {
    if(cantpiezaPolloGrande.value.length > 0){
        recargarVenta('modificar' ,'piezaPolloGrande', cantpiezaPolloGrande.value);
    }
});






// Para piezaPolloMediana
const piezaPolloMediana = document.getElementById('piezaPolloMediana');
const cantpiezaPolloMediana = document.getElementById('cantpiezaPolloMediana');

piezaPolloMediana.addEventListener("click", () => {

    if(piezaPolloMediana.checked == true){
        cantpiezaPolloMediana.disabled = false;
        recargarVenta('agregar' ,'piezaPolloMediana', cantpiezaPolloMediana.value);
    }

    if(piezaPolloMediana.checked == false){
        cantpiezaPolloMediana.disabled = true;
        cantpiezaPolloMediana.value = '1';
        recargarVenta('eliminar' ,'piezaPolloMediana', cantpiezaPolloMediana.value);
    }
});

cantpiezaPolloMediana.addEventListener("keyup", () => {
    if(cantpiezaPolloMediana.value.length > 0){
        recargarVenta('modificar' ,'piezaPolloMediana', cantpiezaPolloMediana.value);
    }
});





//para  piezaPolloPequeña
const piezaPolloPeque = document.getElementById('piezaPolloPeque');
const cantpiezaPolloPeque = document.getElementById('cantpiezaPolloPeque');

piezaPolloPeque.addEventListener("click", () => {

    if(piezaPolloPeque.checked == true){
        cantpiezaPolloPeque.disabled = false;
        recargarVenta('agregar' ,'piezaPolloPeque', cantpiezaPolloPeque.value);
    }

    if(piezaPolloPeque.checked == false){
        cantpiezaPolloPeque.disabled = true;
        cantpiezaPolloPeque.value = '1';
        recargarVenta('eliminar' ,'piezaPolloPeque', cantpiezaPolloPeque.value);
    }
});

cantpiezaPolloPeque.addEventListener("keyup", () => {
    if(cantpiezaPolloPeque.value.length > 0){
        recargarVenta('modificar' ,'piezaPolloPeque', cantpiezaPolloPeque.value);
    }
});



//para  bebidaGrande
const bebidaGrande = document.getElementById('bebidaGrande');
const cantbebidaGrande = document.getElementById('cantbebidaGrande');

bebidaGrande.addEventListener("click", () => {

    if(bebidaGrande.checked == true){
        cantbebidaGrande.disabled = false;
        recargarVenta('agregar' ,'bebidaGrande', cantbebidaGrande.value);
    }

    if(bebidaGrande.checked == false){
        cantbebidaGrande.disabled = true;
        cantbebidaGrande.value = '1';
        recargarVenta('eliminar' ,'bebidaGrande', cantbebidaGrande.value);
    }
});

cantbebidaGrande.addEventListener("keyup", () => {
    if(cantbebidaGrande.value.length > 0){
        recargarVenta('modificar' ,'bebidaGrande', cantbebidaGrande.value);
    }
});



//para  bebidaMediana
const bebidaMediana = document.getElementById('bebidaMediana');
const cantbebidaMediana = document.getElementById('cantbebidaMediana');


bebidaMediana.addEventListener("click", () => {

    if(bebidaMediana.checked == true){
        cantbebidaMediana.disabled = false;
        recargarVenta('agregar' ,'bebidaGrande', cantbebidaMediana.value);
    }

    if(bebidaGrande.checked == false){
        cantbebidaMediana.disabled = true;
        cantbebidaMediana.value = '1';
        recargarVenta('eliminar' ,'bebidaGrande', cantbebidaMediana.value);
    }
});

cantbebidaMediana.addEventListener("keyup", () => {
    if(cantbebidaMediana.value.length > 0){
        recargarVenta('modificar' ,'bebidaGrande', cantbebidaMediana.value);
    }
});


//para  bebidaPequeño
const bebidaPeque = document.getElementById('bebidaPeque');
const cantbebidaPequeña = document.getElementById('cantbebidaPequeña');

bebidaPeque.addEventListener("click", () => {

    if(bebidaPeque.checked == true){
        cantbebidaPequeña.disabled = false;
        recargarVenta('agregar' ,'bebidaPeque', cantbebidaPequeña.value);
    }

    if(bebidaPeque.checked == false){
        cantbebidaPequeña.disabled = true;
        cantbebidaPequeña.value = '1';
        recargarVenta('eliminar' ,'bebidaPeque', cantbebidaPequeña.value);
    }
});

cantbebidaPequeña.addEventListener("keyup", () => {
    if(cantbebidaPequeña.value.length > 0){
        recargarVenta('modificar' ,'bebidaPeque', cantbebidaPequeña.value);
    }
});


//para  cafecito
const cafe = document.getElementById('cafe');
const cantcafe = document.getElementById('cantcafe');

cafe.addEventListener("click", () => {

    if(cafe.checked == true){
        cantcafe.disabled = false;
        recargarVenta('agregar' ,'cafe', cantcafe.value);
    }

    if(cafe.checked == false){
        cantcafe.disabled = true;
        cantcafe.value = '1';
        recargarVenta('eliminar' ,'cafe', cantcafe.value);
    }
});

cantcafe.addEventListener("keyup", () => {
    if(cantcafe.value.length > 0){
        recargarVenta('modificar' ,'cafe', cantcafe.value);
    }
});


//para  postrecito
const postre = document.getElementById('postre');
const cantpostre = document.getElementById('cantpostre');

postre.addEventListener("click", () => {

    if(postre.checked == true){
        cantpostre.disabled = false;
        recargarVenta('agregar' ,'postre', cantpostre.value);
    }

    if(postre.checked == false){
        cantpostre.disabled = true;
        cantpostre.value = '1';
        recargarVenta('eliminar' ,'postre', cantpostre.value);
    }
});

cantpostre.addEventListener("keyup", () => {
    if(cantpostre.value.length > 0){
        recargarVenta('modificar' ,'postre', cantpostre.value);
    }
});






var ventas = [];


var precios = {
    'ensalada' : 1.50,
    'papaFrita': 1.25,
    'piezaPolloGrande': 1.75,
    'piezaPolloMediana': 1.50,
    'piezaPolloPequeña': 1.25,
    'bebidaGrande': 1.50,
    'bebidaMediana': 1.25,
    'bebidaPeque': 1.00,
    'cafe': 0.50,
    'postre': 1.25
}


function recargarVenta(accion , nombre, cantidad){

    if(accion == 'agregar'){

        ventas.push({
            'producto': nombre,
            'cantidad': parseInt( cantidad ),
            'precio': precios[nombre],
            'subtotal': cantidad * precios[nombre]
        });
    }

    if(accion == 'eliminar'){

        ventas = ventas.filter((venta) => venta.producto !== nombre );
    }

    if(accion == 'modificar'){
        ventas.forEach((venta) => {
            if(venta.producto == nombre){ //encuentra el producto
                venta.cantidad = cantidad;
                venta.subtotal = venta.precio * cantidad;
            }
        } )
    }

    console.log('ventas', ventas);


}





var comentarioTxt = '';

//activarComentario
const activarComentario = document.getElementById('activarComentario');
const comentario  = document.getElementById('comentario');
const guardarComentario = document.getElementById('guardarComentario');
const commentTxt  = document.getElementById('commentTxt');


activarComentario.addEventListener("click", () => {
    comentario.disabled = false;
    activarComentario.hidden = true;
    guardarComentario.hidden = false;

});

guardarComentario.addEventListener("click", () => {
    comentarioTxt = comentario.value;
    comentario.disabled = true;
    guardarComentario.hidden = true;
});


const generarFactura  = document.getElementById('generarFactura');

generarFactura.addEventListener("click", () => {

    var tabla = document.getElementById('tabla');

    tabla.innerHTML = "";

    var totalFinal = 0;

    var tblTienda = "";

    if(this.ventas.length > 0){

        console.log('this.ventas', this.ventas);

        this.ventas.forEach((elemento) => {

            tblTienda += "\t<tr>\n";

            tblTienda += "\t\t<td>" + elemento.producto + "</td>\n";
            tblTienda += "\t\t<td>" + elemento.cantidad + "</td>\n";
            tblTienda += "\t\t<td>$ " + elemento.precio + "</td>\n";
            tblTienda += "\t\t<td>$ " + elemento.subtotal + "</td>\n";

            tblTienda += "\t\t</tr>\n";

        });
    }
    
    commentTxt.innerText = comentarioTxt;
    tabla.innerHTML = tblTienda;


});

