var passSlider = document.getElementById("passLength");
var slideOutput = document.getElementById("slideValue");
slideOutput.innerHTML = passSlider.value;
var password=document.getElementById("password");
        // ^does this need a space on both sides?


passSlider.oninput = function() {
    //function to read out slider value in real time
  slideOutput.innerHTML = this.value;
}

function readPara () {
    //function for reading special parameters  
}


function genPass() {
    // var for each group
    // numbers
    // text
    // text caps
    // special characters
}


// Password Pathway
// Grab Parameters

//hit generate

//create modale to display and copy