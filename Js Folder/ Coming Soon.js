var ChangeNum = Math.floor(Math.random() * 6);
switch (ChangeNum) {
  case 0:
    document.getElementById("TimeChange").innerHTML = "10 Days";
    break;
  case 1:
    document.getElementById("TimeChange").innerHTML = "2 Months";
    break;
  case 2:
    document.getElementById("TimeChange").innerHTML = "7 Years";
    break;
  case 3:
    document.getElementById("TimeChange").innerHTML = "0 Decades";
    break;
  case 4:
    document.getElementById("TimeChange").innerHTML = "0 Centuries";
    break;
  case 5:
    document.getElementById("TimeChange").innerHTML = "2 Millennium";
    break;
}