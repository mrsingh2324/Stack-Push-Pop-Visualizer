const stack = [];
let count = 0;

const pushBtn = document.getElementById("pushBtn");
const popBtn = document.getElementById("popBtn");
const numberInput = document.getElementById("numberInput");

pushBtn.addEventListener("click", push);
popBtn.addEventListener("click", pop);

numberInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    if (numberInput === document.activeElement) {
      event.preventDefault();
      push();
    }
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Delete") {
    event.preventDefault();
    pop();
  }
});

function push() {
  if (numberInput.value === "") {
    alert("Please enter a number to Push");
    return;
  }

  const number = parseInt(numberInput.value);

  stack.push(number);
  console.log(stack);
  numberInput.value = "";

  updateStackVisualization();
}

function pop() {
  if (stack.length === 0) {
    alert("Stack is empty!");
    return;
  }

  stack.pop();
  console.log(stack);

  updateStackVisualization();
}

function updateStackVisualization() {
  const stackElement = document.getElementById("stack");
  stackElement.innerHTML = "";

  let j = 0;

  for (let i = stack.length - 1; i >= 0; i--) {
    const element = document.createElement("div");
    element.classList.add("stack-element");
    element.innerHTML = stack[i];
    element.style.backgroundColor = getRandomColor(j);
    element.style.opacity = "0.7";
    stackElement.appendChild(element);

    j++;
  }
}

function getRandomColor(j) {
  const colors = [
    "#66991A",
    "#80B300",
    "#33FFCC",
    "#6680B3",
    "#809900",
    "#FF99E6",
    "#B34D4D",
    "#E6B3B3",
    "#FF1A66",
    "#CCFF1A",
    "#66994D",
    "#E6331A",
  ];
  return colors[j % colors.length];
}
z