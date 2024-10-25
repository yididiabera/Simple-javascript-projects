const btn = document.getElementById("btn");

let min = 1;
let max = 6;

const label1 = document.getElementById("lable1");
const label2 = document.getElementById("lable2");
const label3 = document.getElementById("lable3");

let randomNum1;
let randomNum2;
let randomNum3;

btn.onclick = () => {
  randomNum1 = Math.floor(Math.random() * max) + min;
  randomNum2 = Math.floor(Math.random() * max) + min;
  randomNum3 = Math.floor(Math.random() * max) + min;

  label1.textContent = randomNum1;
  label2.textContent = randomNum2;
  label3.textContent = randomNum3;
};
