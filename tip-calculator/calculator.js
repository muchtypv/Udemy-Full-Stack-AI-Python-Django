function calculate() {
    var billTotal = document.getElementById("total").value;
    var tipRate = document.getElementById("score").value;
    var numGuests = document.getElementById("guests").value;

    if (billTotal == "" || isNaN(billTotal)) {
        alert("Please enter a numeric amount for the bill");
        return;
    } 

    if (numGuests == "" || numGuests == "0" || isNaN(numGuests)) {
        alert("Please enter the number of guests");
        return;
    } 

    if (isNaN(tipRate)) {
        alert("Please select service level");
        return;
    } 

    var totalTip = billTotal * tipRate;
    var individualTip = totalTip / numGuests;

    document.getElementById("output").innerHTML =
        "<p>TIP AMOUNT</p><p>$" + individualTip.toFixed(2) + "</p><p>each</p>"


}