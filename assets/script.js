//linking to html
var passSlider = document.getElementById("passLength");
var slideOutput = document.getElementById("slideValue");
slideOutput.innerHTML = passSlider.value;
var password=document.getElementById("password");
var generateButton = document.querySelector('#button1');//query selector for button
var para1DOM = document.getElementById("para1");//"1234567890"
var para2DOM = document.getElementById("para2");//"abcdefghijklmnopqrstuvwxyz"
var para3DOM = document.getElementById("para3");//"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var para4DOM = document.getElementById("para4");//"!@#$%^&*()_+{}|:?"


// reads out password length slider value in real time
passSlider.oninput = function() {
  slideOutput.innerHTML = this.value;
}

//checks parameters and generates string with checked parameters
function checkPara () {
var numbers = "1234567890";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "!@#$%^&*()_+{}|:?";
const passArray = [""] //intial array from parameter checkboxes 

    //checks for clicked parameters and adds to passArray
    if(document.getElementById("para1").checked) {
            passArray.push(numbers); 
        }//"1234567890"
    if(document.getElementById("para2").checked) {
            passArray.push(lowerCase); 
        }//"abcdefghijklmnopqrstuvwxyz"
    if(document.getElementById("para3").checked) {
            passArray.push(upperCase); 
        }//"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(document.getElementById("para4").checked) {
            passArray.push(specialChar); 
        }//"!@#$%^&*()_+{}|:?"

//makes passArray a single string without commas 
const passString = passArray.join("");
console.log(passString);
genPass(); 
return; //is this needed?

}
// console.log(passSlider.value);

function genPass(passString) {
var password = [""];

for (let i = 0; i < passSlider.value; i++) {
    var pulled = passString[Math.floor(Math.random() * passString.length)];
    password.push(pulled);
}
console.log(password);
//var item = items[Math.floor(Math.random()*items.length)];
//pull from the passString X amount of times
}

//create modale to display and copy

generateButton.addEventListener("click", checkPara);//generates pass on click



