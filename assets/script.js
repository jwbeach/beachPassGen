var passSlider = document.getElementById("passLength");
var slideOutput = document.getElementById("slideValue");
slideOutput.innerHTML = passSlider.value;
var password=document.getElementById("password");
        // ^does this need a space on both sides?

//query selector for button
var generateButton = document.querySelector('#button1');

var para1DOM = document.getElementById("para1");
var para2DOM = document.getElementById("para2")
var para3DOM = document.getElementById("para3"); 
var para4DOM = document.getElementById("para4");




passSlider.oninput = function() {
    //function to read out slider value in real time
  slideOutput.innerHTML = this.value;
}

//function for reading special parameters   then F:genPass
function checkPara () {
    const passArray = [""]
    var numbers = "1234567890";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var specialChar = "!@#$%^&*()_+{}|:?";

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
        console.log(passArray)

    }


function genPass() {
    // var numbers = "1234567890";
    // var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    // var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // var specialChar = "!@#$%^&*()_+{}|:?";
    


    //var item = items[Math.floor(Math.random()*items.length)];
    //^pull from the array with length
}

generateButton.addEventListener("click", checkPara);

// Password Pathway
// Grab Parameters

//hit generate

//create modale to display and copy