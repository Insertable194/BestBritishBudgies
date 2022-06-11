try {
"use strict";

function toggleVisibility(element) {
  var x = document.getElementById(element);
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("info-hider").innerHTML = "Hide Content";
  } else {
    x.style.display = "none";
    document.getElementById("info-hider").innerHTML = "Show Content";

  }
}












}
catch (err)
{console.log(err.name + err.message);}
