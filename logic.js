function submitAnswers() {
	var total = 5, score = 0, incorrect = "You got the following question(s) wrong: ";
	
	//Get User Input
	
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;
	
	//Validation
	
	for (var i = 1; i <= total; i++) {
		if (eval("q" + i) === null || eval("q" + i) === "") {
			alert("Please provide an answer for question  " + i + ".");
			return false;
		}
	}
	
	//Set Correct Answers
	
	var answers = ["a","a","d","b","d"];

	for (var j = 0; j < answers.length; j++) {
		if (eval("q" + (j+1)) === answers[j]) {
			score++;
		} 
	}
	
	//Display Results
	
	var results = document.getElementById("results");
	results.innerHTML = "<h3>You scored <span>"+score+"</span> out of <span>"+total+"</span></h3>"
	
	if (score == total) {
		alert("Congratulations!  You know some basic info about JavaScript.  You got " + score + " out of " + total + " correct!");
	} else if (score < total && score > 0) {
		alert("You seem to have a limited grasp on some basic info about JavaScript. You got " + score + " out of " + total + " correct");
	} else {
		alert("You should probably study up on your basic JavaScript knowledge. You got " + score + " out of " + total + " correct");
	}
	
	return false;
	
}