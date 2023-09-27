function reverseNumber() {
    const inputNumber = document.getElementById("numberInput").value;
    if (!isNaN(inputNumber)) {
        let numberString = inputNumber.toString();
        let reversedString = numberString.split('').reverse().join('');
        document.getElementById("result").textContent = `Reversed Number: ${reversedString}`;
    } else {
        document.getElementById("result").textContent = "Please enter a valid number.";
    }
}