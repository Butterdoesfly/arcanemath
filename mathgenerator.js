var BMAnswer = 4;
function BasicMath() {
	let BMEffect = document.getElementById("BMAnswer");
	let BMInput = document.getElementById("BMInput").value;
	let BMExplain = document.getElementById("BMExplain");
	if (BMInput == BMAnswer) {
		BMEffect.innerHTML = "Correct!";
	} else {
		BMEffect.innerHTML = `Incorrect! The correct answer was ${BMAnswer}.`;
	}
	document.getElementById("BMInput").value = "";
	let Num1 = Math.floor(Math.random() * 10);
	let Num2 = Math.floor(Math.random() * 10);
	BMAnswer = Num1 + Num2;
	BMExplain.innerHTML = `What is ${Num1} + ${Num2}?`;
}

window.onload=function(){
  let BMInput = document.getElementById("BMInput");
	BMInput.addEventListener("keydown", (e) => {
		if (e.code === "Enter") {
			BasicMath();
		};
	});
	
};

