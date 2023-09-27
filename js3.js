function calculate(operation) {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.classList.remove("active-button"));
    const clickedButton = document.getElementById(operation);
    clickedButton.classList.add("active-button");
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }
    let result;
    if (operation === 'multiply') {
        result = num1 * num2;
    } else if (operation === 'divide') {
        if (num2 === 0) {
            alert("Division by zero is not allowed.");
            return;
        }
        result = num1 / num2;
    }
    const resultBox = document.getElementById("result-box");
    resultBox.innerHTML = `The Result Is: <br><div>${result}</div>`;
    resultBox.style.opacity = 1;
}