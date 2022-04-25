const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
// dodger.style.bottom = "0px";
// dodger.style.left = "50px";


function moveDodgerLeft(){
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  if(left>0){
      dodger.style.left = `${left - 1}px`;
  }  
}
function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if(left<400){
        dodger.style.left = `${left + 1}px`;
    }  

}
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft()
    }
    if (event.key === "ArrowRight") {
        moveDodgerRight()
    }
  });


