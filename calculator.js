function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a / b;
}

function calculate(operator, a, b){
 if(operator == '+') return add(a,b);
 if(operator == '-') return subtract(a,b);
 if(operator == '*') return multiply(a,b);
 if(operator == '/') return divide(a,b);  
}

function updateExpression(button)
{
   if (expressionEvaluated == true){
    expression = "";
   }
   if(operators.includes(expression[expression.length-1]) && operators.includes(button)){
        expression = expression.slice(0,expression.length-1) + button;
        display.innerText = expression;
   }
   else{
    expression = expression + button;
    display.innerText = expression;
   }

}

function evaluateExpression(operator,expression){
   let operands = expression.split(operator);
   return calculate(operator,Number(operands[0]),Number(operands[1]));
}


let buttons = document.querySelectorAll('button');
let operators = ['+','-','*','/'];
let display = document.querySelector('#display');
let expression = display.innerText;
let expressionEvaluated = false;
let operator = undefined;
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let buttonClicked = button.innerText;
        if ((operators.includes(buttonClicked )|| buttonClicked == "=") && (!operators.includes(expression[expression.length-1])) && (expression.includes('+') || expression.includes('-')|| expression.includes('*')|| expression.includes("/"))){
            let result = evaluateExpression(operator,expression);
            expressionEvaluated = true;
            updateExpression(result);
            expressionEvaluated = false;
            if(!(buttonClicked == '=')){
                updateExpression(buttonClicked);  
            }
        }
        else if (buttonClicked == "<-")
        {
            expression = "";
            updateExpression(expression);
        }
        else{
            if(!(buttonClicked == '=')){
                updateExpression(buttonClicked);
            }     
        }
        if (operators.includes(buttonClicked)){
             operator = buttonClicked;
        }
    });
});




