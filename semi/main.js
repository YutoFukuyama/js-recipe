//要素の取得
//ボタンを押した時の処理
//正解or不正解

const button1=document.getElementById("button1")
const button2=document.getElementById("button2")
const button3=document.getElementById("button3")
const feedback=document.getElementById("feedback")

button1.onclick = function(){
  feedback.textContent = "正解"
}
button2.onclick = function(){
  feedback.textContent = "不正解"
}
button3.onclick = function(){
  feedback.textContent = "不正解"
}