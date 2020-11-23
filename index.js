var chalk=require("chalk");
var readlineSync=require("readline-sync");
console.log(chalk.bold.yellow.underline("Let\'s play a Game!\n"));
var userName=readlineSync.question(chalk.blue("Enter your Name: "));
console.log("\nHi! "+chalk.rgb(51,51,255)(userName.toUpperCase())+".Welcome to the \"\DO YOU KNOW Danish quiz!\"\n");
console.log(chalk.bgBlue("Answer the following questions.\nCorrect answer gives you 1 point\nNo negative marking.\n"))
var score=0;
function play(question,answer){
  var userAnswer=readlineSync.question(chalk.cyan(question));
  if(userAnswer.toLowerCase()==answer){
    console.log(chalk.green("Your are Right!\n"));
    score=score+1;
    console.log(chalk.blue("Your current score is ", score));
    console.log("----------------------\n");
  }else{
    console.log(chalk.red("Your are Wrong!\n"));
    console.log(chalk.bgYellow("Correct answer is ",answer));
    console.log(chalk.blue("\nYour current score is ",score));
     console.log("----------------------\n");
  }
}
var questions=[{question:"Q1)Where do I live? ",                               answer:"pune"},
                {question:"Q2)Which is my favourite colour? ",
                answer:"black"},
                {question:"Q3)Have I ever lived in USA? ",
                answer:"no"},
                {question:"Q4)Have I completed my graduation? ",
                answer:"yes"},
                {question:"Q5)In which company have I worked before? ",answer:"byjus"}];

for(i=0;i<questions.length;i++){
  play(questions[i].question,questions[i].answer);
}
console.log(chalk.rgb(51,51,255)("Congrats!! You have completed the quiz.\n"))
console.log(chalk.yellow("Your Final score is ",score));