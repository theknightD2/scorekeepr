
var x = 0;
var mode = "Day";
var xss = null;
var CMode = (document.cookie = "User has turned on day mode.");
function ScorePlus1() {
  x = x + 1;
  switch (mode) {
    case "Day":
      document.getElementById("Score").innerHTML = x;
      break;
    case "Dark":
      document.getElementById("ScoreDay").innerHTML = x;
      break;
  }
}
function ScoreMinus1() {
  x = x - 1;
  switch (mode) {
    case "Day":
      document.getElementById("Score").innerHTML = x;
      break;
    case "Dark":
      document.getElementById("ScoreDay").innerHTML = x;
      break;
  }
}
function ResetScore() {
  x = 0;
  switch (mode) {
    case "Day":
      document.getElementById("Score").innerHTML = x;
      break;
    case "Dark":
      document.getElementById("ScoreDay").innerHTML = x;
      break;
  }
}

function DarkMode() {
  switch (mode) {
    case "Day":
      Dark();
      break;
    case "Dark":
      Day();
      break;
  }
}
function Dark() {
  CMode = document.cookie = "User has turned on dark mode.";
  document.body.style.backgroundColor = "Black";
  document.getElementById("DarkModeBody").id = "DayModeBody";
  document.getElementById("Score").id = "ScoreDay";
  document.getElementById("HeadDark").id = "HeadDay";
  document.getElementById("ChangelogDark").id = "ChangelogDay";
  document.getElementById("TestDark").id = "TestDay";
  document.getElementById("DarkMode").id = "DayMode";
  document.getElementById("DayMode").innerHTML = "Day Mode";
  document.getElementById("Plus").id = "PlusDark";
  document.getElementById("Minus").id = "MinusDark";
  document.getElementById("Reset").id = "ResetDark";
  document.getElementById("Cookie").id = "CookieDark";
  document.getElementById("PopupButton").id = "PopupButtonDark";
  mode = "Dark";
}
function Day() {
  CMode = document.cookie = "User has turned on Day mode.";
  document.body.style.backgroundColor = "White";
  document.getElementById("DayModeBody").id = "DarkModeBody";
  document.getElementById("ScoreDay").id = "Score";
  document.getElementById("HeadDay").id = "HeadDark";
  document.getElementById("ChangelogDay").id = "ChangelogDark";
  document.getElementById("TestDay").id = "TestDark";
  document.getElementById("DayMode").id = "DarkMode";
  document.getElementById("DarkMode").innerHTML = "Dark Mode";
  document.getElementById("PlusDark").id = "Plus";
  document.getElementById("MinusDark").id = "Minus";
  document.getElementById("ResetDark").id = "Reset";
  document.getElementById("CookieDark").id = "Cookie";
  document.getElementById("PopupButtonDark").id = "PopupButton";
  mode = "Day";
}
function CookieVisit() {
  switch (mode) {
    case "Day":
      document.getElementById("TestDark").innerHTML = CMode;
      break;
    case "Dark":
      document.getElementById("TestDay").innerHTML = CMode;
      break;
  }
}