/*Crea un programa que utilice console.log para mostrar un 
mensaje de bienvenida.*/
console.log("Bienvenido");

/*Crea una variable llamada "nombre" y asígnale tu nombre. 
Luego, utiliza console.log para mostrar el mensaje "¡Hola, 
[tu nombre]!" en la consola del navegador.*/
let nombre = "Juan";
console.log(`¡Hola,${nombre}¡`);

/*Crea una variable llamada "nombre" y asígnale tu nombre. Luego, 
utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".*/
let nombree = "Juan";
alert(`¡Hola, ${nombree} !`);

/*Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje 
de programación que más te gusta?. Luego, almacena la respuesta en
una variable y muestra la respuesta en la consola del navegador.*/
let lenguaje = prompt ("¿Cuál es el lenguaje de programación que más te gusta?");

console.log(lenguaje);

/*Crea una variable llamada "valor1" y otra llamada "valor2", 
asignándoles valores numéricos de tu elección. Luego, realiza la 
suma de estos dos valores y almacena el resultado en una tercera 
variable llamada "resultado". Utiliza console.log para mostrar el 
mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." 
en la consola.*/
let valor1 = 10;
let valor2 = 3;
let resultado = valor1 + valor2 ;

console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado} `)

/*Crea una variable llamada "valor1" y otra llamada "valor2",
 asignándoles valores numéricos de tu elección. Luego, realiza la
resta de estos dos valores y almacena el resultado en una tercera
variable llamada "resultado". Utiliza console.log para mostrar el
mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.*/
let valor11 = 10;
let valor22 = 3;
let resultadoo = valor11 - valor22 ;

console.log(`La diferencia entre ${valor11} y ${valor22} es igual a ${resultadoo} `);

/*Pide al usuario que ingrese su edad con prompt. Con base en la edad 
ingresada, utiliza un if para verificar si la persona es mayor o menor 
de edad y muestra un mensaje apropiado en la consola.*/
let edad = parseInt(prompt ("Ingresa tu edad:"));

if(edad > 18){
    console.log ("Es mayor");
 }
else {
console.log("Es menor");
 }

/*Crea una variable "numero" y solicita un valor con prompt. Luego, 
verifica si es positivo, negativo o cero utilizando un if-else y 
muestra el mensaje correspondiente.*/
let numero = parseInt(prompt("Ingresa el número que quieras:"));

if(numero == 0){
    alert("Tu número es 0");
}
else if(numero > 0){
    alert("Tu número es positivo");
}
else alert("Tu número es negativo");

/*Utiliza un bucle while para mostrar los números del 1 al 10 en la 
consola.*/
let numeros = 1 ;

while (numeros <= 10) {
    console.log(numeros)
numeros++
}

/*Crea una variable "nota" y asígnale un valor numérico. Utiliza un 
if-else para determinar si la nota es mayor o igual a 7 y muestra 
"Aprobado" o "Reprobado" en la consola.*/
let nota = 3 ;

if(nota >= 7){
    console.log("Aprovado");
}
else console.log("Reprobado");

/*Utiliza Math.random para generar cualquier número aleatorio y muestra
 ese número en la consola.*/
let alea = Math.random();
console.log(alea);

/*Utiliza Math.random para generar un número entero entre 1 y 10 y 
muestra ese número en la consola.*/
let escala = Math.floor(Math.random()*10)+1;
console.log(escala)

/*Utiliza Math.random para generar un número entero entre 1 y 1000 y 
muestra ese número en la consola.*/
let mil = Math.floor(Math.random()*1000)+1;
console.log(mil);
