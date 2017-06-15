alert("Welcome to the party, are you on the VIP list?");
alert("Lets take a look.");

var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var userAge = prompt("How old are you?");

alert("Ah yes, " + firstName + " " + lastName + ", there you are.");
alert("So " + firstName + " " + lastName + ", you are " + userAge + "...");
console.log("Hello " + firstName + " " + lastName);
console.log(firstName + " " + lastName + " is " + userAge);
/*--------------------------------------------------------------------------------------*/

    var age = userAge;
    var daysOld = age * 365;

function bouncer() {
    if(age > 18) {          
        document.getElementById('bouncer').innerHTML = "Ah yes " + firstName + " " + lastName + ", you are on the VIP List, right this way please.";
    } else {
        document.getElementById('bouncer').innerHTML = "No VIP Pass? How did you even get in here? You look like you're about " + age + " years old.";   
    }

}

 
      if(age < 18 && age >= 1) {
        alert("I'm great at Math. That makes you " + daysOld + " days old!");
        alert("Sorry " + firstName + ", you are not old enough to enter the venue. Next time make reservations at Chuck-E-Cheese.");
        console.log("Sorry, you are not old enough to enter the venue.");       
        
    } else if(age < 21 && age >= 18) {
        alert("I'm great at Math. That makes you " + daysOld + " days old!");
        alert("You can enter " + firstName + ", but cannot drink.");
        console.log("You can enter, but cannot drink.");
        
    } else if(age == 21) {
        alert("I'm great at Math. That makes you " + daysOld + " days old!");
        alert("Happy 21st Birthday " + firstName + "!");
        console.log("Happy 21st Birthday!");
        
    } else if(age > 21) {
        alert("I'm great at Math. That makes you " + daysOld + " days old!");
        alert("Come on in " + firstName + " and have a great time!");
        console.log("Come on in and have a great time!");
        
    } else {
        alert("Go away I don't have time for games.");
    }

function ageFunction() {
    if(age % 2 !==0) {
        console.log("Your age is an odd number");
    } else{
        console.log("Your age is an even number");
    }
    if(age % Math.sqrt(age)===0) {
        console.log("Your age is also a perfect square.");
    }
}
ageFunction(age);


