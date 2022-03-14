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
  flag = false;
let arr;
numberBtns.forEach((btn) => {
  btn.onclick = () => {
    if (operatorPressed) {
      resultScreen.innerHTML = "";
      operatorPressed = false;
    }
    if (resultScreen.innerHTML === "0" && btn.innerHTML !== ".") {
      resultScreen.innerHTML = "";
    }
    if (btn.innerHTML === "." && resultScreen.innerHTML.includes(".")) return;
    resultScreen.innerHTML += btn.innerHTML;
    if (operator === "❌") {
      operands[0] = +resultScreen.innerHTML;
    } else {
      operands[1] = +resultScreen.innerHTML;
      console.log(operands);
    }
    switch (operator) {
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
});
resetBtn.onclick = () => {
  resultScreen.innerHTML = "0";
  operands = [0, 0];
  result = 0;
  operator = "❌";
};
deleteBtn.onclick = () => {
  resultScreen.innerHTML = resultScreen.innerHTML.slice(0, -1);
  if (resultScreen.innerHTML === "") {
    resultScreen.innerHTML = "0";
  }
};
operatorBtns.forEach((btn) => {
  btn.onclick = () => {
    operatorPressed = true;
    if (flag === true) {
      if (result.toString().length > 12) {
        let aux = result.toString().split(".");
        if (aux.length == 2 && aux[1] > aux[0]) {
          resultScreen.innerHTML = result.toString().slice(0, 12);
        } else {
          resultScreen.innerHTML = result.toExponential(5);
        }
      } else {
        resultScreen.innerHTML = result;
      }
      flag = false;
      operands[0] = result;
      operands[1] = 0;
    }
    operator = btn.innerHTML;
  };
});
