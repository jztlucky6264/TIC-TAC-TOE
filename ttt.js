let sign = "X";

function read(number) {
  let play = document.getElementById("r" + number);
  console.log(play);

  if (play.innerHTML === "X" || play.innerHTML === "O") {
    return;
  }

  play.innerHTML = sign;
  checksign();
  Message(sign);
  getwinner();
}

function checksign() {
  if (sign == "X") {
    sign = "O";
  } else sign = "X";
}
function selectWinnerBoxes(b1, b2, b3) {
  b1.style.background = "red";
  b2.style.background = "red";
  b3.style.background = "red";
}

function getwinner() {
  var box1 = document.getElementById("r1"),
    box2 = document.getElementById("r2"),
    box3 = document.getElementById("r3"),
    box4 = document.getElementById("r4"),
    box5 = document.getElementById("r5"),
    box6 = document.getElementById("r6"),
    box7 = document.getElementById("r7"),
    box8 = document.getElementById("r8"),
    box9 = document.getElementById("r9");

  /*if (
          box1.innerHTML === "O" ||
          box2.innerHTML === "O" ||
          box3.innerHTML === "O" ||
          box4.innerHTML === "O" ||
          box5.innerHTML === "O" ||
          box6.innerHTML === "O" ||
          box7.innerHTML === "O" ||
          box8.innerHTML === "O" ||
          box9.innerHTML === "O"
        ) {
          document.getElementById("msg").innerHTML = "X Turn";
        } else if (
          box1.innerHTML === "X" ||
          box2.innerHTML === "X" ||
          box4.innerHTML === "X" ||
          box5.innerHTML === "X" ||
          box6.innerHTML === "X" ||
          box7.innerHTML === "X" ||
          box8.innerHTML === "X" ||
          box9.innerHTML === "X"
        ) {
          document.getElementById("msg").innerHTML = "O Turn";
        } else if (box3.innerHTML === "X") {
          document.getElementById("msg").innerHTML = "O Turn";
        }*/

  //get all posibilites
  if (
    box1.innerHTML !== "" &&
    box1.innerHTML === box2.innerHTML &&
    box1.innerHTML === box3.innerHTML
  ) {
    selectWinnerBoxes(box1, box2, box3);
    document.getElementById("winDialog").showModal();
    document.getElementById("msg").innerHTML = " won";
    document.getElementById("msg").style.background = "Red";
  } else if (
    box4.innerHTML !== "" &&
    box4.innerHTML === box5.innerHTML &&
    box4.innerHTML === box6.innerHTML
  ) {
    selectWinnerBoxes(box4, box5, box6);
    document.getElementById("winDialog").showModal();
    document.getElementById("msg").innerHTML = " won";
    document.getElementById("msg").style.background = "Red";
  } else if (
    box7.innerHTML !== "" &&
    box7.innerHTML === box8.innerHTML &&
    box7.innerHTML === box9.innerHTML
  ) {
    selectWinnerBoxes(box7, box8, box9);
    document.getElementById("winDialog").showModal();
    document.getElementById("msg").innerHTML = " won";
    document.getElementById("msg").style.background = "Red";
  } else if (
    box1.innerHTML !== "" &&
    box1.innerHTML === box5.innerHTML &&
    box1.innerHTML === box9.innerHTML
  ) {
    selectWinnerBoxes(box1, box5, box9);
    document.getElementById("winDialog").showModal();
    document.getElementById("msg").innerHTML = " won";
    document.getElementById("msg").style.background = "Red";
  } else if (
    box3.innerHTML !== "" &&
    box3.innerHTML === box5.innerHTML &&
    box3.innerHTML === box7.innerHTML
  ) {
    selectWinnerBoxes(box3, box5, box7);
    document.getElementById("winDialog").showModal();
    document.getElementById("msg").innerHTML = " won";
    document.getElementById("msg").style.background = "Red";
  } else if (
    box1.innerHTML !== "" &&
    box1.innerHTML === box4.innerHTML &&
    box1.innerHTML === box7.innerHTML
  ) {
    selectWinnerBoxes(box1, box4, box7);
    document.getElementById("winDialog").showModal();
    document.getElementById("msg").innerHTML = " won";
    document.getElementById("msg").style.background = "Red";
  } else if (
    box2.innerHTML !== "" &&
    box2.innerHTML === box5.innerHTML &&
    box2.innerHTML === box8.innerHTML
  ) {
    selectWinnerBoxes(box2, box5, box8);
    document.getElementById("winDialog").showModal();
    document.getElementById("msg").innerHTML = " won";
    document.getElementById("msg").style.background = "Red";
  } else if (
    box3.innerHTML !== "" &&
    box3.innerHTML === box6.innerHTML &&
    box3.innerHTML === box9.innerHTML
  ) {
    selectWinnerBoxes(box3, box6, box9);
    document.getElementById("winDialog").showModal();
    document.getElementById("msg").innerHTML = " won";
    document.getElementById("msg").style.background = "Red";
  } else if (
    box1.innerHTML !== "" &&
    box2.innerHTML !== "" &&
    box3.innerHTML !== "" &&
    box4.innerHTML !== "" &&
    box5.innerHTML !== "" &&
    box6.innerHTML !== "" &&
    box7.innerHTML !== "" &&
    box8.innerHTML !== "" &&
    box9.innerHTML !== ""
  ) {
    document.getElementById("result").innerHTML = "!draw";
    document.getElementById("winDialog").showModal();
    document.getElementById("msg").innerHTML = "!draw";
    document.getElementById("msg").style.background = "blue";
  }
}

function Replay() {
  location.reload();
}
function Message(sign) {
  if (sign === "X") {
    document.getElementById("msg").innerHTML = " X Turn";
  } else {
    document.getElementById("msg").innerHTML = "O Turn";
  }
  // var boxes = document.getElementsByClassName("box");
  // for (var i = 0; i < boxes.length; i++) {
  //   if (boxes[i].innerHTML == "X") {
  //     document.getElementById("msg").innerHTML = "O Turn";
  //   }
  // }
}
