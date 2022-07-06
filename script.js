const scoreDisplay = document.getElementById('score-display');
const questionDisplay = document.getElementById('question-display');
let clicked = [];
let score = 0;
const questions = [
     {
          correct: 2,
          option: ['jury','assess'],
          quiz: ['value','estimate','evaluate'],
     },
     {
          correct: 2,
          option: ['trace','adjacent'],
          quiz: ['close','near','next'],
     },
     {
          correct: 2,
          option: ['mad','exotic'],
          quiz: ['foreign','national','ethnic'],
     },
     {
          correct: 1,
          option: ['forecast','sustainable'],
          quiz: ['assume','insight','weather'],
     },
     {
          correct: 2,
          option: ['charity','rapid'],
          quiz: ['fast','quick','prompt'],
     },
];
scoreDisplay.textContent = score;
function addResult(div1,answer,className){
     const answerDisplay = div1.querySelector('.answer-display');
     answerDisplay.classList.remove('wrong');
     answerDisplay.classList.remove('correct');
     answerDisplay.classList.add(className);
     answerDisplay.textContent = answer;
}
function checkAnswer(div1,button,option,optionIndex,correctAnswer){
     if(optionIndex === correctAnswer){
          score++;
          scoreDisplay.textContent = score;
          addResult(div1,'Correct!','correct');
     }else{
          score--;
          scoreDisplay.textContent = score;
          addResult(div1,'Wrong!','wrong');
     }
     clicked.push(option);
     button.disabled = clicked.includes(option);
}
function populateQuestions(){
     questions.forEach((question) => {
          const div1 = document.createElement('div');
          div1.classList.add('question-box');
          const h1 = document.createElement('h1');
          h1.textContent = '✒';
          div1.append(h1);
          question.quiz.forEach((tip) => {
               const paragraph = document.createElement('p');
               paragraph.textContent = tip;
               div1.append(paragraph);
          });
          const div2 = document.createElement('div');
          div2.classList.add('question-buttons');
          div1.append(div2);
          question.option.forEach((option,optionIndex) => {
               const button = document.createElement('button');
               button.classList.add('question-button');
               button.textContent = option;
               button.addEventListener('click',() => {
                    checkAnswer(div1,button,option,optionIndex + 1,question.correct);
               });
               div2.append(button);
          });
          const div3 = document.createElement('div');
          div3.classList.add('answer-display');
          div1.append(div3);
          questionDisplay.append(div1);
     });
}
populateQuestions();