// Today's forecast in Kelvin:
const kelvin = 293;

// Converted in to celsius:
const celsius = kelvin - 273;

// And celcius conv'ed into fahrenheit 
let fahrenheit = celsius * (9 / 5) + 32;

// Rounded down.
fahrenheit = Math.floor(fahrenheit);


console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);


// Newton:

let newton = celsius * (33 / 100);

newton = Math.floor(newton);

console.log(`And the temperature in Newton is ${newton} degrees.`);




