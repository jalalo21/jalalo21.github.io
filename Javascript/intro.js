//alert("hola");
//var nombre = "jalalo"
//alert(nombre);
//var nombre;
//nombre = prompt("ingresa tu nombre");
//edad = prompt ("ingresa tu edad");

//document.write(nombre + " " + edad);
//var amigos = ["carlos", "cesar", "alex"];
//document.write("tienes " + amigos.legth + "amigos");
// > menor que
// < mayor que 
// >= mayor o igual
// <= menor o igual
// == igual que

var nombre = "jero",
    edad = 15;

    if (edad === 18){
        document.write("Bienvenido sos mayor de edad");
    
    } 

    else if (nombre =="jero") {
        document.write("bienvenido " + nombre);

    } 

    else {
        document.write("lo siento, no sos mayor");
    }

    
    for(i=1; i<=30; i++) {     

    document.write( i + "<br>");     
}
 
 for(i=1; i<=30; i++) {     

    document.write( "hola mundo" + "<br>");     
}
function saludo(nombre){
    document.write("hola " + nombre);
}
saludo("jalalo");