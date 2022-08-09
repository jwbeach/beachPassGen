var passSlider = document.getElementById("passLength");
var slideOutput = document.getElementById("slideValue");
slideOutput.innerHTML = passSlider.value;
var password=document.getElementById("password");
var generateButton = document.querySelector('#button1');//query selector for button
var para1DOM = document.getElementById("para1");//"1234567890"
var para2DOM = document.getElementById("para2");//"abcdefghijklmnopqrstuvwxyz"
var para3DOM = document.getElementById("para3");//"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var para4DOM = document.getElementById("para4");//"!@#$%^&*()_+{}|:?"

passSlider.oninput = function() {
// reads out slider value in real time
  slideOutput.innerHTML = this.value;
}

function checkPara () {
var numbers = "1234567890";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "!@#$%^&*()_+{}|:?";
const passArray = [""] //stored intial pass from parameter checkboxes 

    //parameters for password, adds to passArray
    if(document.getElementById("para1").checked) {
            passArray.push(numbers); 
        }
    if(document.getElementById("para2").checked) {
            passArray.push(lowerCase); 
        }
    if(document.getElementById("para3").checked) {
            passArray.push(upperCase); 
        }
    if(document.getElementById("para4").checked) {
            passArray.push(specialChar); 
        }


const passString = passArray.join("");//puts all selected parameters into a single string without commas 
console.log(passString);

}

function genPass() {
//var item = items[Math.floor(Math.random()*items.length)];
//pull from the passString X amount of times
}

//create modale to display and copy

generateButton.addEventListener("click", checkPara);//generates pass on click



