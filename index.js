let screen = document.getElementById("screen");
buttons = document.querySelectorAll(".btn");
let screenvalue = "";
for (item of buttons) {
  item.addEventListener("click", function myfnction(event) {
    buttonText = event.target.innerText;
    console.log("button text is", buttonText);
    if (buttonText == "c") {
      screenvalue = " ";
      screen.value = screenvalue;
    } else if (buttonText == "=") {
      screen.value = eval(screenvalue);
    } else if (buttonText == "AC") {
      screenvalue = " ";
      screen.value = screenvalue;
    } else if (buttonText == "Del") {
      screenvalue = screen.value;
      screenvalue = screenvalue.substring(0, screenvalue.length - 1);
      screen.value = screenvalue;
    } else if (buttonText == "ese") {
      screenvalue = " ";
      screen.value = screenvalue;
    } else {
      screenvalue += buttonText;
      screen.value = screenvalue;
    }
  });
}
