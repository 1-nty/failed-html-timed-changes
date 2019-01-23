let i = 0;
function burning() {}
function change() {
  console.log("This is running:");
  window.setInterval(burning(), 10000);
  if (i % 2 === 1) {
    document.getElementById("header1").innerHTML = "Hello?";
  } else if (i % 2 === 0) {
    document.getElementById("header1").innerHTML = "Page";
  } else {
    document.getElementById("header1").innerHTML = "Does this work?";
  }
  i++;
  return i;
}

window.setInterval(change(), 3000);
