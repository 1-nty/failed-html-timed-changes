
//def vars
let i = 0;
let arr = ["Hello?","Page"]
// function to run defined
function change() {
  document.getElementById("header1").innerHTML = arr[i%2]  
  i++;
}
// Set an incrementer every three seconds
window.setInterval(function(){change()},3000)

