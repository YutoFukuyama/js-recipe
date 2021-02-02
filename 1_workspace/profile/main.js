const quizText = document.getElementById("quiz-text")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")

// クイズの内容
const quiz = {
  text: "私の出身はどこ",
  choices: [
    {
      text: "宮城県",
      feedback: "お前は十分に活躍した。正解だ。"
    },
    {
      text: "東京",
      feedback: "ハズレだが、ほぉ・・・悪くない"
    },
    {
      text: "千葉",
      feedback: "全然なってない、すベてやり直せ"
    }
  ]
}

const reloadQuiz = function(){
  quizText.textContent = "Q. " + quiz.text
  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
}

const choose = function(choiceNumber) {
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

choice1.onclick = function() {
  choose(0)
}
choice2.onclick = function() {
  // 1 番目の選択肢を選択
  choose(1)
}
choice3.onclick = function() {
  choose(2)
}

reloadQuiz()

const phrase = [
  "https://www.instagram.com/yutos_704/",
  "好きな音楽:洋楽",
  "好きなボディービルダー:横川尚隆",
  "今ハマっているアニメ:進撃の巨人"
]