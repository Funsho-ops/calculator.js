const num3 = parseFloat(prompt ("Enter 3"));
const num6 = parseFloat(prompt ("Enter 6"));

const operator = prompt("Enter operator (+, -, /, *)");
let result = 0;
if (isNaN(num3) || isNaN(num6)){
alert("Wrong input! Refresh the page and Enter right input!");
} else{
    if(operator == "+"){
        result = num3 + num6;
    } else if(operator == "-"){
        result = num3 - num6;
    } else if(operator == "*"){
        result = num3 * num6;
    } else if (operator == "/"){
        result = num3 / num6;
    }
    alert(num3 + operator + num6 + "=" + result);
}





