function randomQuestion() {
    let firstNumber = Math.floor(Math.random() * 11);
    let secondNumber = Math.floor(Math.random() * 11);
    let stringOperator = ["+","-", "*", "/"];
    let indexOperator = Math.floor(Math.random() * 4);
    let Operator = stringOperator[indexOperator];
    let QnA = firstNumber + Operator + secondNumber;
    console.log(QnA + "=?");
    return [firstNumber, secondNumber, Operator];
}



function answerCalculation(number1, number2, opr) {
    if (opr == "+") {
        result = number1 + number2;
    }
    else if (opr == "-") {
        result = number1 - number2;
    }
    else if (opr == "*") {
        result = number1 * number2;
    }
    else if (opr == "/") {
        result = number1 / number2;
    }
    else {
        result = "Error";
    }

    return result;
}

function button() {
    let x = randomQuestion();
    theQuestion = x[0] + x[2] + x[1];
    document.getElementById("myQuestion").value = theQuestion;
    let answer = answerCalculation(x[0], x[1], x[2]);
    console.log(answer)
    document.getElementById("myAnswer").value = answer;
}
