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
function CopyURL() {
  document.getElementById("CopyURL").disabled = false;
  document.getElementById("CopyURL").value = "https://scorekeepr.glitch.me";
  var copyText = document.getElementById("CopyURL");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");
  document.getElementById("CopyURL").disabled = true;
}
