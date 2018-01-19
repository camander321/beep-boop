
function checkForBeep(number) {
	console.log(number.toString().includes("1"));
	if (number.toString().includes("0"))
		return true;
	return false;
}

function checkForBoop(number) {
	if (number.toString().includes("1"))
		return true;
	return false;
}

function checkForDave(number) {
	if (number % 3 === 0)
		return true;
	return false;
}

function processNumber(number) {
	var output = number.toString();
	if (checkForBeep(number))
		output = "Beep";
	if (checkForBoop(number))
		output = "Boop";
	if (checkForDave(number))
		output = "I'm sorry, Dave. I'm afraid I can't do that."
	return output;
}

function processNumbers(max) {
	var output = [];
	max = parseInt(max);
	if(isNaN(parseInt(max)) {
		alert("That's not a number...");
	} else {
		for (var i = 0; i <= max; i+=1) {
			output.push(processNumber(i));
		}
	}
	return output;
}


$(document).ready(function() {
	$("#input-form").submit(function(event) {
		event.preventDefault();
		
		console.log(processNumbers($("#input").val()));
		$("#input").val("");
	});
	
});
