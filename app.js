function randomQuestion() {
  let firstNumber = Math.floor(Math.random() * 11);
  let secondNumber = Math.floor(Math.random() * 11);
  let stringOperator = ["+", "-", "*", "/"];
  let indexOperator = Math.floor(Math.random() * 4);
  let Operator = stringOperator[indexOperator];
  let Question = firstNumber + Operator + secondNumber;
  console.log(Question + "=?");
  return [firstNumber, secondNumber, Operator, Question];
}

function answerCalculation(number1, number2, opr) {
  if (opr == "+") {
    result = number1 + number2;
  } else if (opr == "-") {
    result = number1 - number2;
  } else if (opr == "*") {
    result = number1 * number2;
  } else if (opr == "/") {
    result = number1 / number2;
  } else {
    result = "Error";
  }

  return result;
}

//random options
function rndOption(correctAns) {
  let options = [correctAns];
  for (let i = 1; i <= 3; i++) {
    let randomNumber = Math.floor(20 * Math.random());
    options.push(randomNumber);
  }

  //   document.getElementById("one").innerText = options[0];
  //   document.getElementById("two").innerText = options[1];
  //   document.getElementById("three").innerText = options[2];
  //   document.getElementById("four").innerText = options[3];
  return options;
}
function questionSet() {
  let [firstNumber, secondNumber, Operator, Question] = randomQuestion();
  let answer = answerCalculation(firstNumber, secondNumber, Operator);
  let rawOptions = rndOption(answer);
  let correctAns = rawOptions[0];
  let options = shuffle(rawOptions);
  let quesValues = [firstNumber, secondNumber, Operator];
  let set = [quesValues, Question, options, correctAns];
  console.log(set);
  return set;
}
//random order
/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
//random options generator

function showQuestion() {
  let set = questionSet();
  theQuestion = set[1];
  document.getElementById(
    "myQuestion"
  ).innerHTML = `What is <span>${theQuestion}</span>?`;
  let optionTag = `<button class="option">${set[2][0]}</button><button class="option">${set[2][1]}</button><button class="option">${set[2][2]}</button><button class="option">${set[2][3]}</button>`;
  document.getElementById("option").innerHTML = optionTag;
  let option = document.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].addEventListener("click", (e) => chooseOption(e, set[3]));
  }
}
function chooseOption(e, correctAns) {
  let userAns = e.target.innerHTML;
  let option = document.getElementsByClassName("option");
  for (let i = 0; i < option.length; i++) {
    option[i].style.pointerEvents = "none";
    if (option[i].innerHTML == correctAns) {
      option[i].style.backgroundColor = "#D1E7DD";
    }
  }
  if (userAns == correctAns) {
    e.target.style.backgroundColor = "#D1E7DD";
  } else {
    e.target.style.backgroundColor = "#F8D7DA";
  }
}
