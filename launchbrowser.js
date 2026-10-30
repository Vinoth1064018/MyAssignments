function launchBrowser(browserName) {
  if (browserName === "chrome") {
    console.log(browserName);
  } else {
    console.log(browserName);
  }
}

function runTests(testType) {
  switch (testType) {
    case "smoke":
      console.log("smoke");
      break;
    case "sanity":
      console.log("sanity");
      break;
    case "regression":
      console.log("regression");
      break;
    default:
      console.log("smoke");
      break;
  }
}

launchBrowser("chrome");
runTests("smoke");