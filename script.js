const table = document.querySelector(".table");
const resetBtn = document.querySelector(".resetBtn");
const turn = document.querySelector(".turn");

let flag = false;
let player = 0;
let playerx = [];
let playero = [];
let win = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

const reset = () => {
  const x = document.querySelectorAll(".cell");
  x.forEach((item) => {
    item.innerHTML = null;
    item.classList.remove("win__item");
  });
  player = 0;
  playerx = [];
  playero = [];
  flag = false;
  turn.innerHTML = `It is <img src="/images/o.svg" alt="" />'s turn`;
  resetBtn.textContent = "reset";
  //reset.textContent = "reset";
};

reset();

resetBtn.addEventListener("click", () => reset());

table.addEventListener("click", (e) => {
  if (flag) {
    //resetBtn.textContent = "play resetBtn";

    return;
  }
  if (player && !e.target.innerHTML) {
    e.target.innerHTML = `<img src="/images/x.svg" alt="" />`;
    let res;
    playerx.push(Number(e.target.getAttribute("id")));
    for (let i = 0; i < win.length; i++) {
      res = playerx.filter((item) => win[i].includes(item));
      if (res.length == 3) {
        flag = true;
        turn.innerHTML = `<img src="/images/x.svg" alt="" /> won`;
        break;
      }
    }

    if (flag) {
      resetBtn.textContent = "play again";
      const t = document.querySelectorAll(".cell");
      let b = [];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < t.length; j++) {
          if (res[i] == t[j].id) b[i] = t[j];
        }
      }
      b.forEach((item) => item.classList.add("win__item"));
      turn.innerHTML = `<img src="/images/x.svg" alt="" /> won`;
    } else {
      turn.innerHTML = `It is <img src="/images/o.svg" alt="" />'s turn`;
      player = 0;
    }
  } else if (player == 0 && !e.target.innerHTML) {
    let res;

    e.target.innerHTML = `<img src="/images/o.svg" alt="" />`;
    playero.push(Number(e.target.getAttribute("id")));
    for (let i = 0; i < win.length; i++) {
      res = playero.filter((item) => win[i].includes(item));
      if (res.length == 3) {
        console.log(res);
        flag = true;

        break;
      }
    }
    if (flag) {
      resetBtn.textContent = "play again";
      const t = document.querySelectorAll(".cell");
      let b = [];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < t.length; j++) {
          if (res[i] == t[j].id) b[i] = t[j];
        }
      }
      b.forEach((item) => item.classList.add("win__item"));
      turn.innerHTML = `<img src="/images/o.svg" alt="" /> won`;
    } else {
      turn.innerHTML = `It is <img src="/images/x.svg" alt="" />'s turn`;
      player = 1;
    }
  }
  if (flag) {
    return;
  }
  //console.log(e.target.innerHTML);
});
