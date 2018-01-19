
function doTheBeep(number) {
	if (number.includes("0"))
		return "Beep";
	return number;
}

function processNumber(number) {
	return doTheBeep(number + "");
}

function processNumbers(max) {
	var output = [];
	max = parseInt(max);
	if(isNaN(max)) {
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
