/*----------------// Ejercicio 2
// Declaro variables
let a = 5;
let b = 10;
let c = a + b;

// Muestro por consola
console.log("El valor de a es:", a);
console.log("El valor de b es:", b);
console.log("La suma de a y b es:", c);

//Ejercicio 3
// Pedir el nombre del usuario y mostrar
let nombre = prompt("Por favor, ingresa tu nombre:");
console.log("¡Hola, " + nombre + "! Bienvenido.");


//Seccion 2 : "Operadores logicos y condicionales"
//Ejercicio 1
let num1 = 10;
let num2 = 20;
if(num1>num2){
  c=num1;
  console.log("El mayor de los dos números es: ",c);
}else{
  c=num2
  console.log("El mayor de los dos números es: ",c);
}
//Ejercicio 2
let numero = prompt("Ingrese un numero");
numero = parseInt(numero);

if(numero %2 === 0) {
    console.log("El número ",numero, " es par.");
  }else {
    console.log("El número ",numero, " es impar."); }

//Seccion 3  Operadores de asignación y bucles
//Ejercicio 1 
let numero3 = 10;

while (numero > 0) {
    console.log("Valor actual:", numero3); // Imprimir el valor actual
    numero--; // Restar 1 a la variable
}

console.log("Valor actual:", numero3); 
//Ejercicio 2
let numero; // Declarar la variable

do {
    // Pedir al usuario que ingrese un número
    numero = prompt("Ingrese un número mayor a 100:");
    
    // Convertir el número ingresado a un entero
    numero = parseInt(numero);
    
    // Verificar si el número es menor o igual a 100
    if (numero <= 100) {
        console.log("El número ingresado es:", numero, "y debe ser mayor a 100. Intenta nuevamente.");
    }
} while (numero <= 100); // Repetir mientras el número sea menor o igual a 100

// Mostrar el número ingresado una vez que sea mayor a 100
console.log("¡Gracias! El número ingresado es:", numero);
//Seccion 4 Funciones de Java Script
//Ejercicio 1

function esPar(numero) {
  return numero % 2 === 0; /
}
console.log(esPar(4));   
console.log(esPar(7));  
console.log(esPar(10));  
console.log(esPar(15));  
console.log(esPar(0));  
console.log(esPar(-2));  
console.log(esPar(-3));  

//Ejercicio 2

function convertirCelsiusAFahrenheit(celsius) {
 
  let fahrenheit = celsius * 1.8 + 32;
 
  console.log(`${celsius} grados Celsius son ${fahrenheit} grados Fahrenheit.`);
}

convertirCelsiusAFahrenheit(0);    // 0 grados Celsius
convertirCelsiusAFahrenheit(25);   // 25 grados Celsius
convertirCelsiusAFahrenheit(100);  // 100 grados Celsius
convertirCelsiusAFahrenheit(-40);  // -40 grados Celsius
*/
/*----------------
//Seccion 5 Objetos en Js
// Definición del objeto persona
let persona = {
  nombre: 'Julieta',
  edad: 22,
  ciudad: 'Maipú',

  // Método para cambiar la ciudad
  cambiarCiudad: function(nuevaCiudad) {
      this.ciudad = nuevaCiudad; 
  }
};

console.log("Antes de cambiar la ciudad:");
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);
console.log("Ciudad:", persona.ciudad);


persona.cambiarCiudad("Godoy Cruz");


console.log("Después de cambiar la ciudad:");
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);
console.log("Ciudad:", persona.ciudad);
//Ejercicio 2

// Definición del objeto libro
let libro = {
  titulo: 'Un cuento perfecto',
  autor: 'Elisabet Benavent',
  año: 2020,
  
  // Método para determinar si el libro es antiguo o reciente
  esAntiguo: function() {
      let añoActual = new Date().getFullYear(); // Obtiene el año actual
      let edadLibro = añoActual - this.año; // Calcula la edad del libro

      // Verifica si el libro tiene más de 10 años
      if (edadLibro > 10) {
          console.log(`${this.titulo} es un libro antiguo.`);
      } else {
          console.log(`${this.titulo} es un libro reciente.`);
      }
  }
};

// Llamar al método para verificar si el libro es antiguo o reciente
libro.esAntiguo();
//Seccion 6 Array
//Ejercicio 1

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//almacena
let resultados = [];

//bucle
for (let i = 0; i < numeros.length; i++) {
    resultados[i] = numeros[i] * 2; 
}

console.log("Array original:", numeros);
console.log("Array de resultados:", resultados);

//Ejercicio 2
let pares = [];

// Bucle for que itera hasta 20
for (let i = 0; i <= 20; i++) {
    
    if (i % 2 === 0) {
        pares.push(i); 
    }
    
    
    if (pares.length === 10) {
        break; 
    }
}

console.log("Los primeros 10 números pares son:", pares);
*/
//Seccion 7 Introduccion al DOM clase 09/10/2024

const buttonCambiarColor = document.getElementById("buttonCambiarCol"); // Cambié "buttom" por "buttonCambiarCol"
const parrafos = document.querySelectorAll(".parrafo"); // Selecciona todos los párrafos

const cambiarColor = () => {
  parrafos.forEach(parrafo => {
    parrafo.style.color = parrafo.style.color === 'blue' ? 'black' : 'blue'; // Cambia entre azul y negro
  });
};

button.addEventListener("click", () => {
  cambiarColor();
});

//Ejercicio 2

const button2=document.getElementById("buttonRecibe");
const obtenerInfo = ()=>{
  const texto=document.getElementById("textoIngresado").value;
  alert("El texto ingresado fue: "+texto);
}
button2.addEventListener("click", ()=>{
  obtenerInfo();
})

//SECCION 8-EVENTOS EN DOM
//Ejercicio 1
const elem1 = document.getElementById("el1");
elem1.addEventListener("click",()=>{
  console.log(document.getElementById("el1").textContent);
})

const elem2 = document.getElementById("el2");
elem2.addEventListener("click",()=>{
  console.log(document.getElementById("el2").textContent);
})

const elem3 = document.getElementById("el3");
elem3.addEventListener("click",()=>{
  console.log(document.getElementById("el3").textContent);
})

const elem4 = document.getElementById("el4");
elem4.addEventListener("click",()=>{
  console.log(document.getElementById("el4").textContent);
})

//Ejercicio 2

const desButton = document.getElementById("desButton");
const habButton = document.getElementById("habButton");
const input = document.getElementById("input");

const inhabButton = ()=>{
  document.getElementById("input").disabled=true;
}

const habilitButton = () =>{
  document.getElementById("input").disabled=false;
}

desButton.addEventListener("click", ()=>{
  inhabButton();
})

habButton.addEventListener("click",()=>{
  habilitButton();
})

