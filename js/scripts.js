function calculateTip() {
    //Get the values the user inputs (bill amount, service quality, number of people splitting the bill)
    var billAmt = document.getElementById("billAmount").value;
    console.log(billAmt);

    var serviceQual = document.getElementById("serviceQuality").value;
    console.log(serviceQual);

    var numOfPeople = document.getElementById("numPeople").value;
    console.log(numOfPeople);

    //Validate their input (to make sure what they input is usable)

    //Bill Amount - words, negative values, emoptry string, etc.
    var amount = Number(billAmt); //Try to turn the value of billAmt into a number
    console.log(amount);

    if (isNaN(amount) || amount <= 0) {
        //If amount can't be converted into a number or is less than or equal to 0, show this error
        alert("Invalid input for bill amount.")
        return; //Return ti exit the function if the bill amount is invalid
    }

    //If we make it here, the amount is good

    //Service Selector - Not choosing an option

    var service = Number(serviceQual); //Convert serviceQual into a number

    if (service === 0) {
        alert("You must pick an option for service quality.");
        return; 
    }

    //Number of People - words, negative values, empty strings, fractional values, etc.
    var people = Number(numOfPeople);

    if (isNaN(people) || people < 1) {
        alert("Please enter a vaild number of people splitting the bill.");
        return;
    }

    //Calculate the amount of the tip that each person needs to pay

    var tipPerPerson = (amount * service) / people;

    tipPerPerson = tipPerPerson.toFixed(2); //Round the tip per person to 2 decimal points

    console.log(tipPerPerson);

    //Display the information to the user

    document.getElementById("tipAmount").style.display = "block"; //Display the hidden tipAmount div when we're ready to show the calculation
    document.getElementById("tip").innerText = tipPerPerson;
}
//Function that is executed when the button is clicked
//We are passing an anonymous function (a function without a name to ther button's onclick handler when it's clicked)
document.getElementById("calculateTip").onclick = function() {
     calculateTip();
}