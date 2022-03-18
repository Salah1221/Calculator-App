let numberBtns = document.querySelectorAll(
  "button:not(.small-font):not(.operator)"
);
let resultScreen = document.querySelector(".result");
let resetBtn = document.querySelector(".reset");
let deleteBtn = document.querySelector(".delete");
let operatorBtns = document.querySelectorAll(".operator");
let operands = [0, 0],
  operatorPressed = false,
  result = 0,
  operator = "❌",
  flag = false,
  temp = -1;
let arr;
let updateResult = (oper) => {
  if (oper === "❌") {
    operands[0] = +resultScreen.innerHTML.split(",").join("");
  } else {
    operands[1] = +resultScreen.innerHTML.split(",").join("");
  }
  switch (oper) {
    case "+":
      result = operands[0] + operands[1];
      flag = true;
      break;
    case "-":
      result = operands[0] - operands[1];
      flag = true;
      break;
    case "/":
      result = operands[0] / operands[1];
      flag = true;
      break;
    case "x":
      result = operands[0] * operands[1];
      flag = true;
      break;
  }
};
numberBtns.forEach((btn) => {
  btn.onclick = () => {
    if (temp !== -1) temp = -1;
    if (operator === "=") {
      temp = operands[0];
      operands = [0, 0];
      operator = "❌";
    }
    if (operatorPressed) {
      resultScreen.innerHTML = "0";
      operatorPressed = false;
    }
    if (resultScreen.innerHTML === "0" && btn.innerHTML !== ".") {
      resultScreen.innerHTML = "";
    }
    if (btn.innerHTML === "." && resultScreen.innerHTML.includes(".")) return;
    resultScreen.innerHTML = resultScreen.innerHTML.split(",").join("");
    resultScreen.innerHTML += btn.innerHTML;
    if (resultScreen.innerHTML.split(".")[0].length > 3) {
      resultScreen.innerHTML = (+resultScreen.innerHTML).toLocaleString();
      if (btn.innerHTML === ".") resultScreen.innerHTML += ".";
    }
    updateResult(operator);
  };
});
resetBtn.onclick = () => {
  resultScreen.innerHTML = "0";
  operands = [0, 0];
  result = 0;
  operator = "❌";
};
deleteBtn.onclick = () => {
  let aux = resultScreen.innerHTML.split(",").join("");
  aux = aux.slice(0, -1);
  resultScreen.innerHTML = (+aux).toLocaleString();
  updateResult(operator);
  if (resultScreen.innerHTML === "") {
    resultScreen.innerHTML = "0";
  }
};
operatorBtns.forEach((btn) => {
  btn.onclick = () => {
    operatorPressed = true;
    if (temp !== -1) {
      operands[0] = temp;
      temp = -1;
    }
    if (flag === true) {
      if (result.toString().length > 12) {
        let aux = result.toString().split(".");
        if (aux.length == 2 && aux[1] > aux[0]) {
          resultScreen.innerHTML = result.toString().slice(0, 12);
        } else {
          resultScreen.innerHTML = result.toExponential(2);
        }
      } else {
        resultScreen.innerHTML = result.toLocaleString();
      }
      flag = false;
      operands[0] = result;
      operands[1] = 0;
    }
    operator = btn.innerHTML;
  };
});
// Theme Toggle:
let toggleBall = document.querySelector(".ball");
let toggle = document.querySelector(".toggle div:not(.nums)");
let counter = 0;
let html = document.querySelector(":root");
toggle.onclick = () => {
  if (counter === 3) counter = 0;
  if (counter === 2) {
    toggleBall.style.left = "5px";
    html.style.setProperty("--main-background", "hsl(222, 26%, 31%)");
    html.style.setProperty("--toggle-background", "hsl(223, 31%, 20%)");
    html.style.setProperty("--screen-background", "hsl(224, 36%, 15%)");
    html.style.setProperty("--del-key-background", "hsl(225, 21%, 49%)");
    html.style.setProperty("--del-key-shadow", "hsl(224, 28%, 35%)");
    html.style.setProperty("--equals-background", "hsl(6, 63%, 50%)");
    html.style.setProperty("--equals-shadow", "hsl(6, 70%, 34%)");
    html.style.setProperty("--key-background", "hsl(30, 25%, 89%)");
    html.style.setProperty("--key-shadow", "hsl(28, 16%, 65%)");
    html.style.setProperty("--numbers-color", "hsl(221, 14%, 31%)");
    html.style.setProperty("--text-color", "hsl(0, 0%, 100%)");
    html.style.setProperty("--equals-text-color", "hsl(0, 0%, 100%)");
    document.querySelector(".equals").style.color = "hsl(0, 0%, 100%)";
  } else if (counter === 1) {
    toggleBall.style.left = "50px";
    html.style.setProperty("--main-background", "hsl(268, 75%, 9%)");
    html.style.setProperty("--toggle-background", "hsl(268, 71%, 12%)");
    html.style.setProperty("--screen-background", "hsl(268, 71%, 12%)");
    html.style.setProperty("--del-key-background", "hsl(281, 89%, 26%)");
    html.style.setProperty("--del-key-shadow", "hsl(285, 91%, 52%)");
    html.style.setProperty("--equals-background", "hsl(176, 100%, 44%)");
    html.style.setProperty("--equals-shadow", "hsl(177, 92%, 70%)");
    html.style.setProperty("--key-background", "hsl(268, 47%, 21%)");
    html.style.setProperty("--key-shadow", "hsl(290, 70%, 36%)");
    html.style.setProperty("--numbers-color", "hsl(52, 100%, 62%)");
    html.style.setProperty("--text-color", "hsl(52, 100%, 62%)");
    html.style.setProperty("--equals-text-color", "hsl(0, 0%, 100%)");
    document.querySelector(".equals").style.color = "hsl(198, 20%, 13%)";
  } else {
    toggleBall.style.left = "27.5px";
    html.style.setProperty("--main-background", "hsl(0, 0%, 90%)");
    html.style.setProperty("--toggle-background", "hsl(0, 5%, 81%)");
    html.style.setProperty("--screen-background", "hsl(0, 0%, 93%)");
    html.style.setProperty("--del-key-background", "hsl(185, 42%, 37%)");
    html.style.setProperty("--del-key-shadow", "hsl(185, 58%, 25%)");
    html.style.setProperty("--equals-background", "hsl(25, 98%, 40%)");
    html.style.setProperty("--equals-shadow", "hsl(25, 99%, 27%)");
    html.style.setProperty("--key-background", "hsl(45, 7%, 89%)");
    html.style.setProperty("--key-shadow", "hsl(35, 11%, 61%)");
    html.style.setProperty("--numbers-color", "hsl(60, 10%, 19%)");
    html.style.setProperty("--text-color", "hsl(0, 0, 100%)");
    html.style.setProperty("--equals-text-color", "hsl(0, 0%, 100%)");
    document.querySelector(".equals").style.color = "hsl(0, 0%, 100%)";
  }
  counter++;
};
