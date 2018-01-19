
function doTheBeep(number) {
	if (number.includes("0"))
		number = "Beep";
	return number;
}

function doTheBoop(number) {
	if (number.includes("1"))
		number = "Boop"
	return number;
}

function processNumber(number) {
	number = doTheBeep(number);
	number = doTheBoop(number);
	return number;
}

function processNumbers(max) {
	var output = [];
	max = parseInt(max);
	if(isNaN(max)) {
		alert("That's not a number...");
	} else {
		for (var i = 0; i <= max; i+=1) {
			output.push(processNumber(i + ""));
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
