// HTMLの要素を取得する
const inputForm = document.getElementById("inputForm");
const inputButton = document.getElementById("inputButton");
const inputMoney = document.getElementById("inputMoney");
const buyButton = document.getElementById("buyButton");
const drinkNumber = document.getElementById("drinkNumber");
const chargeButton = document.getElementById("chargeButton");
const chargeMoney = document.getElementById("chargeMoney");
​
// 投入金額とお釣り、ドリンク本数
let totalMoney = 0;
let charge = 0;
let num = 0;
​
// 投入するための関数
const addTotalMoney = function() {
  totalMoney += Number(inputForm.value);
  inputMoney.textContent = totalMoney;
  inputForm.value = 0;
};
​
// 水を購入するときの関数
const getDrink = function() {
  // 投入金額不足の時
  if (totalMoney < 100) {
    return;
  }
  totalMoney -= 100;
  inputMoney.textContent = totalMoney;
  num++;
  drinkNumber.textContent = num;
};
​
// お釣りを取り出すための関数
const getCharge = function() {
  charge = totalMoney;
  totalMoney = 0;
  chargeMoney.textContent = charge;
  inputMoney.textContent = totalMoney;
};
​
inputButton.onclick = function() {
  addTotalMoney();
};
​
buyButton.onclick = function() {
  getDrink();
};
​
chargeButton.onclick = function() {
  getCharge();
};