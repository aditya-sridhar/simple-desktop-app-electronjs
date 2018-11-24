function celciusToFahrenheit(){
    let celcius = document.getElementById('celcius').value;
    let fahrenheit = (celcius* 9/5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit;

}

function fahrenheitToCelcius(){
    let fahrenheit = document.getElementById('fahrenheit').value;
    let celcius = (fahrenheit - 32) * 5/9
    document.getElementById('celcius').value = celcius;
}