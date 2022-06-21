var answer;
var score = 0;
var backgroundImages = [];

function nextQuestion(){
  const n1 = Math.floor(Math.random() * 5);
  document.getElementById('n1').innerHTML = n1;
  const n2 = Math.ceil(Math.random() * 5);
  document.getElementById('n2').innerHTML = n2;
  answer = n1 + n2;
};

function checkAnswer() {
  const prediction = predictImage();
  console.log(`answer: ${answer}, prediction: ${prediction}`);

  if (prediction == answer) {
    score++;
    console.log(`Correct!. Score: ${score}`);
    if (score < 7) {backgroundImages.push(`url('images/background${score}.svg')`)}
    if (score > 6) {
      alert('Congratulation! You reached max points. The game will now restart.')
      score = 0;
      backgroundImages = [];
    }

    document.body.style.backgroundImage = backgroundImages;
  } else {
    if (score > 0) {
      score--;
      console.log(`Wrong!. Score is ${score}`);
      setTimeout(function() {
        backgroundImages.pop();
        document.body.style.backgroundImage = backgroundImages;
      }, 3000);

    } else {
      console.log(`Wrong!. Score is ${score}`);
    }
    alert("Wrong Answer. Check you calculation.")
  }

};
