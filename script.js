var player1, player2;
document.querySelector("img").setAttribute("src", getRandomDiceImg());
document.querySelector(".img2").setAttribute("src", getRandomDiceImg());
result(player1, player2);

function getRandomDiceImg(score) {
  var randomNum = Math.floor(Math.random() * 6) + 1;
  if (player1 === undefined) {
    player1 = randomNum;
  } else {
    player2 = randomNum;
  }
  return "images/dice" + randomNum.toString() + ".png";
}

function result(p1, p2) {
  if (p1 > p2) {
    return document.querySelector(".container h1").innerHTML = "Player 1 Wins!";
  } else if (p2 > p1) {
    return document.querySelector(".container h1").innerHTML = "Player 2 Wins!";
  } else {
    return document.querySelector(".container h1").innerHTML = "Draw!";
  }
}
