function calculate(operation){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result;

    switch(operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case 'square':
            result = num1 * num1;
            break;  
        case 'cube':
            result = num1 * num1 * num1;
            break;          
        default:
            result = "Invalid operation";    
    }

    document.getElementById('result').textContent = "Result:" + result;
}

