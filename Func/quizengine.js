//coding Please Donot Edit the following code
//new dynamic 2D array for choices

var totalChoices = 3;
			
var choices = new Array(questions.length);
for (i=0; i <totalChoices; i++)
	choices[i]=new Array(totalChoices);
			
			
function initializeChoice(){
				for(i=0;i<questions.length;i++){
				choices[i] = [ ];
					for(j=0;j<totalChoices;j++){
					choices[i][j]=0;
					}
				}
			}
		
			
			
			
			 function makeChoices() {
			 initializeChoice();
				//For every question
				for(i = 0; i < questions.length; i++) {
					
					var randIdx1 = Math.floor(Math.random() * totalChoices);
					choices[i][randIdx1]=answer[i];
										
					
					//For every choice
					for(j = 0; j < totalChoices; j++) {
							if(j!=randIdx1){
							var randIdx2 = Math.floor(Math.random() * answer.length);
								if(randIdx2==i){
								j--; // to repeat the process
								}else{
								choices[i][j]=answer[randIdx2];
								}
							
					}
					
				}
			 }
}
			
			function initializeQuiz() {
				 makeChoices();
				 //Write the questions in <p> tags
				 for (i = 0; i < questions.length; i++) {
					 document.getElementById("demo").innerHTML += "<p class= \"Qcolor\">Q" + (i + 1) + ")" + questions[i] + "</p>";
					 //Write the choices as radio buttons.
					 for (j = 0; j < totalChoices; j++) {
						 document.getElementById("demo").innerHTML += "<input type=\"radio\" name=\"" + i + "\"  id=\" " +
							 ((10 * i) + j) + " \"  value=\"" + choices[i][j] + "\"    >" + choices[i][j] + "</input><meaning class=\" black \"> meaning in </meaning> "
							 +"<a href=\"https://www.google.co.in/webhp?source=search_app&gws_rd=ssl#q="+choices[i][j]+"+meaning\" target=\"_blank\">English</a> / "+" , "
							 +"<a href=\"https://www.google.co.in/webhp?source=search_app&gws_rd=ssl#q="+choices[i][j]+"+meaning+in+hindi\"  target=\"_blank\">Hindi</a>  "
							 +"<br />";
					 }
				 }
			 }
		initializeQuiz();

			 function getscore() {
				 var submitted = [];
				 for (i = 0; i < questions.length; i++) {
					 var radios = document.getElementsByName(i);
					 var k = 0;
					 for (j = 0; j < totalChoices; j++) {
						 if (radios[j].checked == true) {
							 submitted.push(radios[j].value);
							 k++;
						 }
					 }
					 if (k == 0)
						 submitted.push("Not Attempted");

				 }

				 var score = 0;
				 for (i = 0; i < questions.length; i++) {
					 if (submitted[i] == answer[i])
						 score++;
				 }
				 document.getElementById("score").innerHTML +=
					 "<br />" + "<p class= \"black\">Your score is " + score + "</p><br /> <p class=\"black\"> Your Answers are</p><br>" + submitted;
				 document.getElementById("score").innerHTML +=
					 "<br><p class= \"black\">Correct answers to the given questions are as follows</p> <br>" + answer;

			 }
