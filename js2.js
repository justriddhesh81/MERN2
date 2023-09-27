function sortStringAlphabetically() {
    const inputString = document.getElementById("stringInput").value;
    const sortedString = inputString.split('').sort().join('');
    document.getElementById("result").textContent = `Sorted String: ${sortedString}`;
}