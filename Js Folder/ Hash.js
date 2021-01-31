var UniqueIdU = location.hash;
var UniqueIdR = UniqueIdU.substr(1);
document.getElementById("On").innerHTML = "You do not have a shared id.";
document.getElementById("Random").innerHTML = "";
if (UniqueIdR != "") {
  document.getElementById("Random").innerHTML = UniqueIdR;
  document.getElementById("On").innerHTML = "Your shared id is:";
}