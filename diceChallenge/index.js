var button = document.querySelector('button');
button.addEventListener("click", rollEm);
function randomDie(die_index) {
  var randomnumber = Math.floor(Math.random() * 6) + 1;
  var setImage = "dice" + randomnumber + ".png";
  var src = "images/" + setImage;
  var die = document.querySelectorAll("img")[die_index];
  die.setAttribute("src", src);
  return randomnumber;
}
function rollEm() {
  var dieOne = randomDie(0);
  var dieTwo = randomDie(1);
  var header = document.querySelector("h1");
  if (dieOne > dieTwo) {
    header.innerHTML = "Player One Wins!";
  } else if (dieTwo > dieOne) {
    header.innerHTML = "Player Two Wins!";
  } else {
    header.innerHTML = "Draw!";
  }
}
rollEm();


