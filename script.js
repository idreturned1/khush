const wordText = document.querySelector(".word"),
  hintText = document.querySelector(".hint span"),
  timeText = document.querySelector(".time b"),
  inputField = document.querySelector("input"),
  skipBtn = document.querySelector(".skip-word"),
  checkBtn = document.querySelector(".check-word");

let wordIndex = 0;
let correctWord, timer;

const initTimer = (maxTime) => {
  // clearInterval(timer);
  // timer = setInterval(() => {
  //   if (maxTime > 0) {
  //     maxTime--;
  //     return (timeText.innerText = maxTime);
  //   }
  //   alert(`Time Up! ${correctWord.toUpperCase()} was the correct word.`);
  //   playGame();
  // }, 1000);
};

const playGame = () => {
  initTimer(60);
  let wordObj = words[wordIndex++];
  let wordArray = wordObj.word.split("");
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  wordText.innerText = wordArray.join("");
  hintText.innerText = wordObj.hint;
  correctWord = wordObj.word.toLowerCase();
  inputField.value = "";
  inputField.setAttribute("maxlength", correctWord.length);
};
playGame();

const redirect = () => {
  window.open("https://www.khusshrajmulchandani.com/")
}

const checkWord = () => {
  if (wordIndex === words.length-1) 
   {
    var btn = document.getElementById('chkbtn');
    btn.innerText = "Claim Your Prize!"
   }
  let userWord = inputField.value.toLowerCase();
  if (!userWord) return alert("Please type a word to check!");
  if (userWord !== correctWord)
    alert(`Oops! ${userWord} is not a correct word! \nThe correct answer is ${correctWord}!`);
  else
    alert(`Congrats! ${correctWord.toUpperCase()} is the correct word.`);
  if (wordIndex < words.length) 
    return playGame();
  else
    redirect()
};

skipBtn.addEventListener("click", playGame);
checkBtn.addEventListener("click", checkWord);
