

function FactSubmit() {
	let FactNumber = parseFloat(document.getElementById("FactNumber").value);
	let Text = document.getElementById("FactText");
	if ((FactNumber !== FactNumber) == false) {
		var Factorial = FactNumber;
		for (let i = 1; i < FactNumber; i++) {
			console.log(i);
			Factorial = Factorial * i;
		}
		console.log(Factorial);
		Text.innerHTML = (`The factorial of ${FactNumber} is ${Factorial.toLocaleString()}.`);
	} else {
		Text.innerHTML = "That is not a valid number, you must type in a valid number for the calculator to work.";
	}
}

var MaxPoints = 0;

var CurrentPoints = 0;

var Submissions = 0;

function GradeSubmit() {
	let GradeNumber = document.getElementById("GradeNumber").value.split("/")[0]
	let Maximum = document.getElementById("GradeNumber").value.split("/")[1];
	let GradeOverall = document.getElementById("GradeText");
	let GradeSingular = document.getElementById("GradeSingular");
	let GradeSubmissions = document.getElementById("GradeSubmissions")

	if (isNaN(GradeNumber) || isNaN(Maximum)) {
		GradeOverall.innerHTML = "That number is not valid!"
	} else {
		Submissions = Submissions + 1
		CurrentPoints = (parseFloat(CurrentPoints) + parseFloat(GradeNumber));

		MaxPoints = (parseFloat(MaxPoints) + parseFloat(Maximum));

		GradeOverall.innerHTML = `You've submitted ${Submissions} grade(s), you have a ${Math.round(parseFloat((CurrentPoints / MaxPoints)) * 100)}% overall, and you got a ${Math.round((GradeNumber / Maximum) * 100)}% on that assignment.`;
	}
}

function GradeClear() {
	MaxPoints = 0;
	CurrentPoints = 0;
	document.getElementById("GradeText").innerHTML = "I'll calculate the overall grade!";
	document.getElementById("GradeSingular").innerHTML = "I'll calculate each singular grade!";
	document.getElementById("GradeNumber").value = ""
	document.getElementById("GradeSubmissions").innerHTML = "You've submitted 0 grades."
	Submissions = 0;
}

function ZeroCalc() {
	let total = 0;
	let ZeroCalcAnswer = document.getElementById("ZeroCalcAnswer")
	let input = document.getElementById("ZeroCalcInput").value
	ZeroCalcAnswer.innerHTML = "Processing..."
	setTimeout(() => {
		for (let i = 1; i < (parseInt(input) + 1); i++) {
			total = total + parseInt(String(i).split("0").length - 1);
		};
		ZeroCalcAnswer.innerHTML = `You would have to use ${total} zeros.`;
	}, 1000)
};

function Palindrome() {
	let Division = 0;
	let input = document.getElementById("PalindromeInput").value;
	let GiveAnswer = document.getElementById("PalindromeAnswer");
	let PalindromeNumber = document.getElementById("PalindromeExplain");
	let Answer = String(input);

	GiveAnswer.innerHTML = `Processing...`;
	setTimeout(() => {
		while (0 < 1) {
			if (Answer == Answer.split("").reverse().join("")) {
				GiveAnswer.innerHTML = `That is a palindrome of division ${Division}.`;
				break
			} else {
				Division = Division + 1;
				Answer = String(parseInt(String(Answer)) + parseInt(Answer.split("").reverse().join("")));
				PalindromeNumber.innerHTML = Answer
			};
		};
	}, 1000)
};

function Fraction() {
	let FractionAnswer = document.getElementById("FractionAnswer");
	let FractionInput = String(document.getElementById("FractionInput").value);
	let Fractions = FractionInput.split("*");
	let Fraction1 = Fractions[0];
	let Fraction2 = Fractions[1];
	let Fraction1Top = Fraction1.split("/")[0];
	let Fraction1Bottom = Fraction1.split("/")[1];
	if (Fraction1.split(" ")[1]) {
		Fraction1Top = (parseInt(Fraction1.split(" ")[0]) * parseInt(Fraction1Bottom)) + parseInt(Fraction1Top);
	}
	var Fraction2Top = Fraction2.split("/")[0];
	var Fraction2Bottom = Fraction2.split("/")[1];
	if (String(Fraction2).split(" ")[1]) {
		Fraction2Top = (parseInt(Fraction2.split(" ")[0]) * parseInt(Fraction2Bottom)) + parseInt(Fraction2Top);
	};
	var Fraction3Top = parseInt(Fraction1Top) * parseInt(Fraction2Top);
	var Fraction3Bottom = parseInt(Fraction1Bottom) * parseInt(Fraction2Bottom);
	var Fraction3 = String(Fraction3Top) + "/" + String(Fraction3Bottom);
	FractionAnswer.innerHTML = `The answer is ${Fraction3}.`;
};

function Age() {
	let AgeAnswer = document.getElementById("AgeAnswer");
	let Input = parseInt(document.getElementById("AgeInput").value);
	if (Input < 5) {
		AgeAnswer.innerHTML = "Probably not in school.";
	} else if (Input == 5) {
		AgeAnswer.innerHTML = "Probably in kindergarden.";
	} else if (Input > 5 && Input < 18) {
		AgeAnswer.innerHTML = `Probably in grade ${Input - 5}.`;
	} else if (Input > 17 && Input < 22) {
		AgeAnswer.innerHTML = "Probably in college.";
	} else if (Input > 21) {
		AgeAnswer.innerHTML = "Probably not in school.";
	};
};

window.onload=function(){
  let FractionInput = document.getElementById("FractionInput");
	FractionInput.addEventListener("keydown", (e) => {
		if (e.code === "Enter") {
			Fraction();
		};
	});
	
	let FactNumber = document.getElementById("FactNumber");
	FactNumber.addEventListener("keydown", (e) => {
		if (e.code === "Enter") {
			FactSubmit();
		};
	});

	let GradeNumber = document.getElementById("GradeNumber");
	GradeNumber.addEventListener("keydown", (e) => {
		if (e.code === "Enter") {
			GradeSubmit();
		};
	});

	let AgeInput = document.getElementById("AgeInput");
	AgeInput.addEventListener("keydown", (e) => {
		if (e.code === "Enter") {
			Age();
		};
	});

	let ZeroInput = document.getElementById("ZeroCalcInput")
	ZeroInput.addEventListener("keydown", (e) => {
		if (e.code === "Enter") {
			ZeroCalc();
		};
	});

	let PalinInput = document.getElementById("PalindromeInput");
	PalinInput.addEventListener("keydown", (e) => {
		if (e.code === "Enter") {
			Palindrome();
		};
	});
	
};