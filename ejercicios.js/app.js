//Ejercicios de String y Números
/*
1 - Crea una variable con tu nombre, otra con tu apellido y concaténalas con el mensaje de bienvenida: 'Bienvenido al evento' usando template string.
2 - Usando métodos de String quita los espacios de adelante y de atrás del siguiente texto: '              Había una vez un pequeño programador junior       '
3 - Convierte a mayúsculas tu nombre y apellido usando las variables definidas en el punto 1
4 - Crea un programita que le pida al usuario que ingrese un texto, convierte dicho texto en mayúsculas y muestra en consola cuantos caracteres tiene el texto recibido usando propiedades de los String.
5 - Crea un programa que solicite al usuario ingresar un número con 5 decimales, almacenar dicho número en una variable asegurándose que sea de tipo number. Mostrar en consola lo siguiente:
 - El número redondeado a su mayor valor
 - El número redondeado a su menor valor
 - El número original multiplicado por 3
 - El resto del número dividido por 2
*/

//punto 1
let nombre= "Lucia"
let apellido= "Decima"
console.log (`Bienvenido al evento ${nombre} ${apellido}`)

//punto 2
let frase= '              Había una vez un pequeño programador junior       '
let fraseSinEspacio=frase.trim()

//punto 3
console.log (nombre.toUpperCase(), apellido.toUpperCase())

//punto 4
let saludo= prompt (`ingrese un texto`)
console.log (saludo.toUpperCase ())
console.log (saludo.length)

//punto 5

prompt (`ingrese un numero con 5 decimales`)
let numeroDecimal= 87.99999
console.log (Math.ceil(numeroDecimal))
console.log (Math.floor(numeroDecimal))
console.log (numeroDecimal * 3)
console.log (numeroDecimal % 2)