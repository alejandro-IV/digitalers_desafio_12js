/*let edad = parseInt(prompt("Ingrese su edad: ")); // Se pide su edad

if (edad > 18){ // Si es mayor se loguea
  document.write( "Bienvenido/a. Gracias por loguearte en este sitio." );
} else { // sino error
    document.write ( "Error. Usted debe ser mayor de 18 años para loguearse." );
  }
*/

let usuario = prompt( "Ingrese su nombre de usuario: " ); // Se pide nombre usuario
let clave = prompt( "Ingrese su clave: " ); // Se pide clave

if (usuario == "admin" & clave == "1234") { // si el usuario y contraseña coinciden, ingresa.
    console.log ( "Usted se ha logueado con éxito." );
} else { //sino error
    document.write ( "Error" );
}

