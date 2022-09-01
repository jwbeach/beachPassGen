//I went a little rogue when starting this project and I was too far along to stop
//Have mercy! Thanks! 

// variables linking to html
var passSlider = document.getElementById("passLength");
var slideOutput = document.getElementById("slideValue");
slideOutput.innerHTML = passSlider.value;
var generateButton = document.querySelector('#button1');//query selector for generate button
var modal = document.getElementById("passModal");
var span = document.getElementsByClassName("close")[0];
var copyButton = document.querySelector("#copy");

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
    const passArray = [] //intial array from parameter checkboxes 

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
    const passString = passArray.join('');
    // then function genPass
    genPass(passString); 
    // then function modalDisplay
    modalDisplay();    
}

// Takes field of parameters and randomly pulls from it X times in for loop
// X is determined by passSlider value
function genPass(passString) {
    var password = [];
    for (let i = 0; i < passSlider.value; i++) {
        var pulled = passString[Math.floor(Math.random() * passString.length)];
        password.push(pulled);
    }
    document.getElementById("passDisplay").innerHTML = password.join('');
}

// modal display function
function modalDisplay() {
    modal.style.display = "block";
} 

//close modal function on (X)
span.onclick = function(dis) {
    modal.style.display = "none";
}
 
//close modal function on click anywhere other than modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//copy function from HTML passDisplay, innerHTML from genPass()
function copyPass() {
    //grabs password display from HTML 
    var copyPassDisplay = document.getElementById("passDisplay");
    //returns new range object for pass
    var passRange = document.createRange();
    var passSelect = window.getSelection();
    passRange.selectNodeContents(copyPassDisplay);
    passSelect.removeAllRanges();
    //selects range equal to nodes found in passDisplay aka highlights the Password
    passSelect.addRange(passRange);
    //executes copy function
    document.execCommand("copy");
    // sends an alert notifying password has been copied
    alert("Password Successfully Copied");
}

// Event listener for generate button, initiates checkPara Function on click
generateButton.addEventListener("click", checkPara);
