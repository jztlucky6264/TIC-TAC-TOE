function detectmobile() {
  var a = navigator.userAgent || navigator.vendor || window.opera;
  if (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
      a
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      a.substr(0, 4)
    )
  ) {
    return true;
  } else {
    return false;
  }
}

if (detectmobile() && document.documentElement.clientWidth <= 768) {
  window.location.href = "http://yourwebsite.com/pageformobiles";
}

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
  //get all boxes
  var box1 = document.getElementById("r1"),
    box2 = document.getElementById("r2"),
    box3 = document.getElementById("r3"),
    box4 = document.getElementById("r4"),
    box5 = document.getElementById("r5"),
    box6 = document.getElementById("r6"),
    box7 = document.getElementById("r7"),
    box8 = document.getElementById("r8"),
    box9 = document.getElementById("r9");

  //get all posibilites
  if (
    box1.innerHTML !== "" &&
    box1.innerHTML === box2.innerHTML &&
    box1.innerHTML === box3.innerHTML
  ) {
    selectWinnerBoxes(box1, box2, box3);
    const whoWon = box1.innerText;
    document.getElementById("winDialog").showModal();
    document.getElementById("result").innerText = whoWon + " " + "won";
    document.getElementById("msg").innerHTML = whoWon + " " + "Is The Winner";
    document.getElementById("msg").style.background = "Red";
  } else if (
    box4.innerHTML !== "" &&
    box4.innerHTML === box5.innerHTML &&
    box4.innerHTML === box6.innerHTML
  ) {
    selectWinnerBoxes(box4, box5, box6);
    const whoWon = box4.innerText;
    document.getElementById("winDialog").showModal();
    document.getElementById("result").innerText = whoWon + " " + "won";
    document.getElementById("msg").innerHTML = whoWon + " " + "Is The Winner";
    document.getElementById("msg").style.background = "Red";
  } else if (
    box7.innerHTML !== "" &&
    box7.innerHTML === box8.innerHTML &&
    box7.innerHTML === box9.innerHTML
  ) {
    selectWinnerBoxes(box7, box8, box9);
    const whoWon = box7.innerText;
    document.getElementById("winDialog").showModal();
    document.getElementById("result").innerText = whoWon + " " + "won";
    document.getElementById("msg").innerHTML = whoWon + " " + "Is The Winner";
    document.getElementById("msg").style.background = "Red";
  } else if (
    box1.innerHTML !== "" &&
    box1.innerHTML === box5.innerHTML &&
    box1.innerHTML === box9.innerHTML
  ) {
    selectWinnerBoxes(box1, box5, box9);
    const whoWon = box1.innerText;
    document.getElementById("winDialog").showModal();
    document.getElementById("result").innerText = whoWon + " " + "won";
    document.getElementById("msg").innerHTML = whoWon + " " + "Is The Winner";
    document.getElementById("msg").style.background = "Red";
  } else if (
    box3.innerHTML !== "" &&
    box3.innerHTML === box5.innerHTML &&
    box3.innerHTML === box7.innerHTML
  ) {
    selectWinnerBoxes(box3, box5, box7);
    const whoWon = box3.innerText;
    document.getElementById("winDialog").showModal();
    document.getElementById("result").innerText = whoWon + " " + "won";
    document.getElementById("msg").innerHTML = whoWon + " " + "Is The Winner";
    document.getElementById("msg").style.background = "Red";
  } else if (
    box1.innerHTML !== "" &&
    box1.innerHTML === box4.innerHTML &&
    box1.innerHTML === box7.innerHTML
  ) {
    selectWinnerBoxes(box1, box4, box7);
    const whoWon = box1.innerText;
    document.getElementById("winDialog").showModal();
    document.getElementById("result").innerText = whoWon + " " + "won";
    document.getElementById("msg").innerHTML = whoWon + " " + "Is The Winner";
    document.getElementById("msg").style.background = "Red";
  } else if (
    box2.innerHTML !== "" &&
    box2.innerHTML === box5.innerHTML &&
    box2.innerHTML === box8.innerHTML
  ) {
    selectWinnerBoxes(box2, box5, box8);
    const whoWon = box2.innerText;
    document.getElementById("winDialog").showModal();
    document.getElementById("result").innerText = whoWon + " " + "won";
    document.getElementById("msg").innerHTML = whoWon + " " + "Is The Winner";
    document.getElementById("msg").style.background = "Red";
  } else if (
    box3.innerHTML !== "" &&
    box3.innerHTML === box6.innerHTML &&
    box3.innerHTML === box9.innerHTML
  ) {
    selectWinnerBoxes(box3, box6, box9);
    const whoWon = box3.innerText;
    document.getElementById("winDialog").showModal();
    document.getElementById("result").innerText = whoWon + " " + "won";
    document.getElementById("msg").innerHTML = whoWon + " " + "Is The Winner";
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
    document.getElementById("winDialog").style.background = "blue";
    document.getElementById("winDialog").showModal();
    document.getElementById("msg").innerHTML = "!draw";
    document.getElementById("msg").style.background = "blue";
    document.getElementById("pop_up_btn").style.background = "blue";
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
}
