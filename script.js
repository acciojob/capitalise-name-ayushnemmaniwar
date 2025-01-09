//your JS code here. If required.
document.getElementById("fname").addEventListener("blur", function () {
    // Convert the value of the input field to uppercase
    this.value = this.value.toUpperCase();
});