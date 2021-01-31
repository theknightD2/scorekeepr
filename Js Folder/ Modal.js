var Base64 = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "-",
  "_"
];
var BaseSelection1 = Base64[Math.floor(Math.random() * Base64.length)];
var BaseSelection2 = Base64[Math.floor(Math.random() * Base64.length)];
var BaseSelection3 = Base64[Math.floor(Math.random() * Base64.length)];
var BaseSelection4 = Base64[Math.floor(Math.random() * Base64.length)];
var BaseSelection5 = Base64[Math.floor(Math.random() * Base64.length)];
var BaseSelection6 = Base64[Math.floor(Math.random() * Base64.length)];
var BaseSelection7 = Base64[Math.floor(Math.random() * Base64.length)];
var BaseSelection8 = Base64[Math.floor(Math.random() * Base64.length)];
var Result = BaseSelection1.concat(
  BaseSelection2,
  BaseSelection3,
  BaseSelection4,
  BaseSelection5,
  BaseSelection6,
  BaseSelection7,
  BaseSelection8,
);

var URL = "https://scorekeepr.glitch.me#"
var URLHash = URL + Result;
// Get the modal
var modal = document.getElementById("Popup");

// Get the button that opens the modal
var btn = document.getElementById("PopupButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close Settings")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};


// Get the share modal

var ShareModal = document.getElementById("Share");

// Get the button that opens the modal
var ShareBtn = document.getElementById("ShareBtn");

// Get the <span> element that closes the modal
var ShareSpan = document.getElementsByClassName("close ShareSpan")[0];

// When the user clicks on the button, open the modal
ShareBtn.onclick = function() {
  ShareModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
ShareSpan.onclick = function() {
  ShareModal.style.display = "none";
};
document.getElementById("CopyURL").value = URLHash;
function CopyURL() {
  document.getElementById("CopyURL").disabled = false;
  document.getElementById("CopyURL").value = URLHash;
  var copyText = document.getElementById("CopyURL");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");
  document.getElementById("CopyURL").disabled = true;
}


