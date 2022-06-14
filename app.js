//generate a random ques and returns in an array

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

//push correct ans to empty array and generate remaining  random options
function rndOption(correctAns) {
  let options = [correctAns];
  for (let i = 1; i <= 3; i++) {
    let randomNumber = Math.floor(20 * Math.random());
    options.push(randomNumber);
  }
  return options;
}
//random order the otion array
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
//calculate answer
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
//return ques ans and options in an array
function questionSet() {
  let [firstNumber, secondNumber, Operator, Question] = randomQuestion();
  let answer = answerCalculation(firstNumber, secondNumber, Operator);
  let rawOptions = rndOption(answer);
  let correctAns = rawOptions[0];
  let options = shuffle(rawOptions);
  let quesValues = [firstNumber, secondNumber, Operator];
  let set = [quesValues, Question, options, correctAns];
  // console.log(set);
  return set;
}
//generate specified ques sets and return in array
let allQues = [];

console.log(allQues);
function allQuestions() {
  let quesCount = document.getElementById("inputQty").value;
  for (i = 1; i <= quesCount; i++) {
    let set = questionSet();
    allQues.push(set);
  }
  return allQues;
}
//generate ques and options on clicking button
function showQuestion(quesIndex) {
  document.getElementById("quesCount").style.display = "none";
  document.getElementById("quesBox").style.display = "flex";
  document.getElementById(
    "myQuestion"
  ).innerHTML = `What is <span>${allQues[quesIndex][1]}</span>?`;
  let optionTag = `<button class="option">${allQues[quesIndex][2][0]}</button><button class="option">${allQues[quesIndex][2][1]}</button><button class="option">${allQues[quesIndex][2][2]}</button><button class="option">${allQues[quesIndex][2][3]}</button>`;
  document.getElementById("option").innerHTML = optionTag;
  document.getElementById("counter").innerHTML = `<span>${
    quesIndex + 1
  }</span> out of <span>${allQues.length}</span> Questions`;

  let option = document.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].addEventListener("click", (e) =>
      chooseOption(e, allQues[quesIndex][3])
    );
  }
}
//takes user ans and compare with correct ans.called on if a user clicks any option
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
let quesIndex = 0;
document.getElementById("quesQty").onclick = () => {
  allQuestions();

  console.log(quesIndex, allQues);
  showQuestion(quesIndex, allQues);
};

document.getElementById("next").onclick = () => {
  quesIndex++;
  showQuestion(quesIndex);
};
