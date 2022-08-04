var passSlider = document.getElementById("passLength");
var slideOutput = document.getElementById("slideValue");
slideOutput.innerHTML = passSlider.value;

passSlider.oninput = function() {
  slideOutput.innerHTML = this.value;
}




// Password Pathway
// Grab Parameters