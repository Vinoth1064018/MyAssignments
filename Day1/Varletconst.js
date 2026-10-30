const appName = "WeatherApp";

console.log("Global app name is " + appName);

function showAppName() {
  if (appName === "WeatherApp") {
    let appName = "CalendarApp";
    console.log("Inside if block: " + appName);
  }

  console.log("After if block: " + appName);
}

showAppName();