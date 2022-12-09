const result = "";

function calculateIMC() {
	const weight = document.getElementById("peso").value;
	const height = document.getElementById("altura").value;
	const finalResult = document.getElementById("finalResult");
	const finalIMC = document.getElementById("imcResult");

	let imc = weight / (height * height);

	if (imc < 18.5) {
		finalResult.innerHTML = "Abaixo do Peso";
		finalResult.style.color = "yellow";
	} else if (imc > 18.5 && imc < 24.9) {
		finalResult.innerHTML = "Peso Ideal";
		finalResult.style.color = "rgb(0,207,98)";
	} else if (imc > 25 && imc < 29.9) {
		finalResult.innerHTML = "Sobrepeso";
		finalResult.style.color = "yellow";
	} else if (imc > 30 && imc < 34.9) {
		finalResult.innerHTML = "Obesidade Grau I";
		finalResult.style.color = "red";
	} else if (imc > 35 && imc < 39.9) {
		finalResult.innerHTML = "Obesidade Grau II";
		finalResult.style.color = "crimson";
	} else if (imc > 40) {
		finalResult.innerHTML = "Obesidade Grau III";
		finalResult.style.color = "darkred";
	}
	finalIMC.innerHTML = imc.toFixed(1);
}
