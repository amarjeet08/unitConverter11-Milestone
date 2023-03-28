function celsiusToFahrenheit(celsius){
  const fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}
// calling the function
const celsius = 25;
const fahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius} degrees Celcius is equal to ${fahrenheit} degrees Fahrenheit. `)