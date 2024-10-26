let challenge = '30 Days of JavaScript'

//Impirmir cadena en la consola 
console.log(challenge);

//imprimir longitud 
console.log(challenge.length)

//imprimir con mayuscula 
console.log(challenge.toUpperCase())

//imprimrir en minuscula 
console.log(challenge.toLowerCase())

//cortar la primera palabra de la cadena 
console.log(challenge.substring(0,2))

//Cortar la frase 'Days Of JavaScript' de '30 Days Of JavaScript'
console.log(challenge.substring(3))

//comprobar si la cadena contiene la palabra string 
console.log(challenge.includes('Script'))

//dividir la cadena en matriz 
console.log(challenge.split())

//dividir la cadena en palabras separadas
console.log(challenge.split(" "))

//facebook, google, etc divide la cadena por la coma y cambia a una matriz 
let copanies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(copanies.split(', '))

//cambiar 30 dias de javascript a 30 dias de node 
console.log(challenge.replace('JavaScript', 'Node'))

console.log('2')
let cadena = '30 días de JavaScript'
//caracter  en el indice 15 de la cadena 30 Days....
console.log(cadena.charAt(15))

//codido de caracter de J en 30 Days.....
console.log(cadena.charCodeAt(cadena.indexOf('J')))

//utilice indexOf
console.log(cadena.indexOf('a'))

//utilice lastIndexOf para la posicion de la ultima aparicion de a en la cadena 
console.log(cadena.lastIndexOf('a'))

//utilizar indexOf para encontrar....
let frase = 'No puedes terminar una oración con porque porque porque es una conjunción';
console.log(frase.indexOf('porque'));

//utilizar lastIndexOf para encontrar la ultima aparicion de porque 
console.log(frase.lastIndexOf('porque'))

//utilizar la busqueda para encontrar la posicion de la primera aparicion de la  palabra porque 
console.log(frase.search('porque'))


console.log('3')
let cadena1 = ' 30 días de JavaScript '
//utilizar trim para eliminar cualquier espacio en blanco al principio y al final 
console.log(cadena1.trim())

//utilizar el startWith con la cadena y que haga que este sea verdadero
console.log(challenge.startsWith('30'))

//utilizar el metodo terminacon con la cadena y que haga que el resultado dea verdadero
console.log(challenge.endsWith('JavaScript'))

//utilizar el metodo match para encontrar todas las a en la cadena 
console.log(cadena.match(/a/g))

//utilizar concat y combinar 30 dias de con JavaScript en una sola cadena 
let parte1 = '30 días de'
let parte2 = 'JavaScript'
console.log(parte1.concat(' ', parte2))

//utilizar el metodo repetir para imprimir 2 veces la cadena 
console.log(cadena.repeat(2))