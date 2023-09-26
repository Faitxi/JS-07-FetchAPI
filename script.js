/* 
Retomando las APIs...

    - APIs internas (API DOM, localStorage, Drag and Drop): Son todas aquellas APIs que vienen por default en el navegador.

    - APIs externas (Google Maps, FakeStore API, API PayPal, etc.): Son todas aquellas que tenemos que utilizar de proveedores externos.

    Ejemplo de la licuadora, donde la licuadora es el cliente, el enchufe es la API y el recurso que se solicita es la electricidad.

    Ventajas de utilizar APIs:
    - Nos permiten reestructurar y organizar los sistemas de forma que sean mas sencillos de usar. 
    - Permiten que los sistemas sean más robustos. 
    - Reducen los costos de mantenimiento.
    - Permiten que nuestros sistemas sean escalables.

*/

/* 
Sincronía:

Por defecto, JS se comprota de una forma sincrona(se arriba hacia abajo, de izquiera a derecha), es decir, utilizamos JS de una forma autobloqueante (si hay un error, lo que está después de ese error no se ejecuta).

*/

/*Ejemplo de una operacion sincronica
console.log("Inicia mi operacion sincrónica");

function dosSincronica(){  //No se ejecuta porque no se ha invocado
    console.log("Dos");
}

function unoSincronico(){
    console.log("Uno");
    dosSincronica();  //se invoca en esta parte 
    console.log("Tres");
}
unoSincronico();
console.log("Finaliza mi operacion sincrónica");

//Los casos donde me conviene tener operaciones sincronas, son (lectura de arrays, uso de algunos metodos de arrays, condicionales, ciclos, ejecucion de funciones "normales").




/* 
Asinconía

Es la capacidad que tiene JS para poder ejecutar funciones que no dependan de otras. Esto nos ayuda a ejecutar ciertos bloques de codigo sin tener que esperar a que termine su ejecucion, para ejecutar otras lineas de codigo. (dejar la carne en el asador mientras preparo otras cosas en el ejemplo de la carne asada).
*/


/*Ejemplo de Js asíncrona

console.log("Inicia mi operacion asincrónica"); //Se ejecuta en primer lugar
function dosAsync(){
    console.log("Uno"); //Se ejecuta en segundo lugar
    setTimeout(function(){ //setTime para ejecutar esta funcion despues de 3 segundos
        console.log("Dos"); //Se ejecuta al final por el setTimeout que hace que se tarde 3 segundos para ejecutarse
    }, 3000);  //1000 = 1 segundo
}

function unoAsync(){
    dosAsync();
    console.log("Tres"); //Se ejecuta en tercer lugar
}

unoAsync();
console.log("Finaliza mi operacion asíncrona") //Se ejecuta en cuarto lugar



/* 
Mecanimos para controlar la asincronía

Para controlar la asincronía en JS, podemos usar algunos de estos:

    - callback: la forma más clasica de manejar la asincronía. se le conoce como (llamada de vuelta), basicamente es pasar una funcion como parametro de otra funcion, y se ejecutan una vez que se cumpla la condicion esperada

    //Metodo .map de los arrays


    - promesas: SON OBJETOS que representan un valor al momento de conectar con el servidor. Como su nombre lo indica, una promera es algo que no sabemos si se va a cumplir o no, pero al menos necesitamos saber que hacemos si se cumple o si no se cumple.
    La ventaja que tiene la promesa, es que no se anidan, en una sola funcion podemos manejar ambas situaciones.

    las promesas tienen 3 estados posibles:
        - pending: estado inicial, cuando se crea la promesa. Aqui aún no hay resultados.

        - fullfiled: cuando la operacion asincrona se resuelve con exito (resolve)

        - rejected: cuando la operacion asincrona falla (reject)


    Las promesas al ser objetos tienen metodos



    - async / await

*/


//Funcion especial para consumir APIs y manejar promesas

/*Instruccion de la conexion a mi servidor
fetch("https://fakestoreapi.com/products/1")

// Una vez que se conecte podemos tener dos escenarios (obtengo respuesta o no obtengo respuesta).

//Si se encuentra el objeto, se mete en la caja
.then(datos => { //cuando la promesa se resuelve, ejecuto esta funcion
    console.log(datos);
    return datos.json(); //convertir la respuesta
    
}) //Aqui termina la funcion fetch
    
//Si no se encuentra el objeto, mandar un mesaje de error para que nuestra caja no llegue vacía.
.catch(error => { //cuando la promesa no se resuelve, se ejecuta esta funcion para mostrar un mensaje de error.
    console.log("Error, no encontramos el producto");
    console.log(error.message);
})
*/


/* 
Sintaxis del fetch (con promesas)

fetch (url a consumir)
    .then (response => response.text()) //Aqui se maneja la respuesta
    .then (datos => console.log(Datos)) //Aqui se maneja el dato

    .catch (error => console.log(error));


*/

/*Asigno el fetch a una variable
const conexion = fetch("https://fakestoreapi.com/products/1");

//Imprimo la variable (para ver el objeto completo)
console.log("Este es mi objeto promesa: ", conexion);

//referencia a mi fetch para poder usar sus metodos
//Se pone sola la variable del fetch y la estás llamando con su .then y su .catch
conexion

//Usar el metodo then para manejar la respuesta (lo relleno con la respuesta)
//El .then es un metodo del objeto promesa

//Con le primer then se valida la conexion y se valida que se tenga el producto solicitado
.then(function(resultado){
    console.log("Dentro de esta funcion que maneja la respuesta, encontrarás: ", resultado);
    return resultado.json();
})

//Uso el metodo then para manejar el producto (lo relleno con la informacion del producto)
//Con el segundo then, se entrega el producto solicitado
.then(function(producto){
    console.log("Informacion del producto: ", producto);
})

//Uso el metodo catch para manejar el error (lo relleno con un error para que la caja no regrese vacia)
.catch(function(error){
    console.log("Error", error);
})







//producto como respuesta de un servidor en formato plano (texto)
let producto = {"id":17,"title":"Rain Jacket Women Windbreaker Striped Climbing Raincoats","price":39.99,"description":"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.","category":"women's clothing","image":"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg","rating":{"rate":3.8,"count":679}}

//producto como objeto JSON
let productoJSON = {
     id:17,
     title:"Rain Jacket Women Windbreaker Striped Climbing Raincoats",
     price:39.99,
     description:"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
     category:"women's clothing",
     image:"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
     rating:{
     rate:3.8,
     count:679
     }}
    
    //Revisar informacion de un objeto con texto plano
    console.log(productoServidor.price);
    
    //Revisar informacion de un objeto tipo JSON
    console.log(productoJSON.price);
    
    



    //Objeto JSON que voy a mandar a un servidor
    let paciente = {
        nombre: "Fatima",
        edad: 26,
        estatus: "Registrada"
    }

    console.log(paciente);

    //Necesito convertirlo a una cadena de texto para que el servidor lo lea
    let pacienteStringifeado = JSON.stringify(paciente);
    console.log(pacienteStringifeado);


    let pacienteServidor = '{"Nombre":"Fatima","edad":26,"estatus":"Registrada"}'

    let pacienteJSON = JSON.parse(pacienteServidor);
    console.log(pacienteJSON);

    //Si mando un JSON al servidor, lo stringifeo.
    //Si recibo un string del servidor, lo parseo.

    function generarTarjetaProducto(producto){

        //crear elemento
        createElement(img);
        img.src = producto.image;
    } */
   


    //Metodo POST para enviar un nuevo producto a nuestra BD de la FakestoreAPI


    fetch('https://fakestoreapi.com/products',{  //checar siempre el endpoint
            method:"POST", //especificar em tipo de metodo
            body:JSON.stringify( //dar la instruccion para serializar el cuerpo de mi solicitud (para la interpretacion del servidor )
                {
                    title: 'Sopa Maruchan Habanero',
                    price: 15.5,
                    description: 'Deliciosa sopa Maruchan de habanero',
                    image: 'https://media.justo.mx/products/041789001956.jpg',
                    category: 'Sopas Instantaneas'
                }
            )
        })
            .then(res=>res.json()) //metodo para la respuesta (saber si mi producto llego con bien al servidor)
            .then(json=>console.log(json)) //impresion en consola para revisar la info


        
            fetch('https://fakestoreapi.com/products',{  
            method:"PUT", 
            body:JSON.stringify( 
                {
                    id: 1,
                    title: inputTitulo.value,
                    price: inputPrecio.value
                    description: inputDescripcion.value,
                    image: inputImagen.value,
                    category: inputCategoria.value
                }
            )
        })
            .then(res=>res.json()) 
            .then(json=>console.log(json)) 


        




