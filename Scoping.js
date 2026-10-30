var weather = "sunny";

function showWeather() {
  var message = "Today";
  var temperature = 25;

  if (weather === "sunny") {
    let message = "Warm and sunny";
    console.log(message); 
  }

  console.log(temperature); 
  console.log(message);     
}
showWeather();

//Scoping