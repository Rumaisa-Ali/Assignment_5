//question # 1
var city = prompt("Enter your city: ");
if (city.toLowerCase() == "Karachi"){
    alert("welcome to city of lights")
}
//question # 2
var gender = prompt("Enter your gender: ")
if (gender.toLowerCase() == "Male"){
    alert("Welcome sir!")
}
else if(gender.toLowerCase() == "Female"){
    alert("Welcome madam!")
}
// question # 3
var traffic = prompt("Enter the light color: ")
if (traffic.toLowerCase() == "Red"){
    alert("Must stop!")
}
else if(traffic.toLowerCase() == "Yellow"){
    alert("Ready to move!")
}
else if(traffic.toLowerCase() == "Green"){
    alert("Move now!")
}
//question # 4
var fuel = +prompt("Enter the fuel (in liters) in your car: ");
if(fuel < 0.25){
    alert("Refill your car!")
}
// question # 5
// a. the code will run the alert statemnet will be executed
//b. the if statement would not be executed.
// c. statemnts that will execute = "condition 2 is true" and "condition 4 is true"
// d. "The cost equals" (The alert message will be displayed).
// e. "True" (Only the first alert message will be displayed).
// f. "car is smaller than cat" (The alert message will be displayed).
// question # 6
// 1. Take inputs from the user using prompts
var sub1 = +prompt("Enter marks obtained in Subject 1:");
var sub2 = +prompt("Enter marks obtained in Subject 2:");
var sub3 = +prompt("Enter marks obtained in Subject 3:");
var totalMarks = +prompt("Enter total marks for the 3 subjects (e.g., 300):");
var marksObtained = sub1 + sub2 + sub3;
var percentage = (marksObtained / totalMarks) * 100;
var grade;
var remarks;
if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}
console.log("Marks Sheet");
console.log("Total marks : " + totalMarks);
console.log("Marks obtained : " + marksObtained);
console.log("Percentage : " + percentage.toFixed(0) + "%");
console.log("Grade : " + grade);
console.log("Remarks : " + remarks);
// question # 7
var num = 7;
var guess = +prompt("Guess the number (1-10): ");
if (guess == num + 1){
    alert("Close enough!")
}
else if(guess == num){
    alert("Bingo! you got it!")
}
else{
    alert("Not close!")
}
// question # 8
var num1 = +prompt("Enter the number: ");
if(num1 % 3 == 0){
   alert("The number is divisible by 3!")
}
else{
    alert("The number is not divisible by 3!")
}
// question # 9
var num_1 = +prompt("Enter the number to know it its even or odd: ")
if(num_1 % 2 == 0){
    alert("The number is even");
}
else{
    alert("The number is odd!")
}
// question # 10
var T = +prompt("Enter the temperature:");

if (T > 40) {
    alert("It is too hot outside.");
} else if (T > 30) {
    alert("The Weather today is Normal.");
} else if (T > 20) {
    alert("Today’s Weather is cool.");
} else if (T > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It's freezing cold outside!");
}
// question # 11
var operation = prompt("Enter the operation you want to do(/ , + , - , * , %): ")
var first_num = +prompt("Enter the first number: ");
var second_num = +prompt("Enter the second number: ");

if (operation == "+"){
    var a = first_num + second_num;
    console.log("The sum is: " ,a);
}
else if (operation == "-"){
    var a = first_num - second_num;
    console.log("The difference is: " ,a);
}
else if (operation == "*"){
    var a = first_num * second_num;
    console.log("The profuct is: " ,a);
}
else if (operation == "/"){
    var a = first_num - second_num;
    console.log("The division is: " ,a);
}
else if (operation == "%"){
    var a = first_num % second_num;
    console.log("The remainder is: " ,a);
}
