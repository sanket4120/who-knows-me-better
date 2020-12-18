let readlineSync = require('readline-sync');

let userName = readlineSync.question('What is your name? ');
console.log(`Hi ${userName} how well do you know sanket`);

let score = 0;

function play(question, answer) {
  let ans = readlineSync.question(question);
  if (ans == answer) {
    score += 1;
    console.log('Right!');
  } else {
    console.log('Wrong!');
  }
  console.log('-------------------');
}

let questions = [
  {
    question: 'Where do i live? ',
    answer: 'nashik',
  },
  {
    question: 'Best friend? ',
    answer: 'manoj',
  },
  {
    question: 'Favourite anime? ',
    answer: 'naruto',
  },
  {
    question: 'Shy or Outgoing? ',
    answer: 'shy',
  },
  {
    question: 'How many brothers do i have? ',
    answer: 'zero',
  },
  {
    question: 'Do i prefer casual clothes or dressing up? ',
    answer: 'casual clothes',
  },
];

let highScores = [
  {
    name: 'sanket',
    score: '6',
  },
  {
    name: 'manoj',
    score: '5',
  },
  {
    name: 'tejas',
    score: '4',
  },
];

for (let i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer);
}

console.log(`\nYou scored:${score}/${questions.length}`);

let minHighScore = highScores[0].score;

console.log('\ncheckout high scores list here');
console.log('\n********High Scores********');

for (let i = 0; i < highScores.length; i++) {
  if (minHighScore > highScores[i].score) {
    minHighScore = highScores[i].score;
  }
  console.log(`${highScores[i].name}: ${highScores[i].score}`);
}

console.log(
  "\nIf you have beaten anyone's score then send me the screenshot, so that I can update the high scores list."
);
