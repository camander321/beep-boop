
function checkForBeep(number) {
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
	if(isNaN(parseInt(max))) {
		alert("That's not a number...");
	} else {
		for (var i = 1; i <= max; i+=1) {
			output.push(processNumber(i));
		}
	}
	return output;
}

function slideInAnimation(elem) {
	var step = 1;
	elem.hide();
	elem.fadeIn(100 / step * 2);
	var width = $(".container").width()
	var percent = 100;
	var id = setInterval(frame, 5);
	function frame() {
		percent -= step;
		elem.css("left", percent + "%")
		if (percent <= 0) {
			percent = 0;
			clearInterval(id);
		}
	}
}

function appendValues(values) {
	var animate = true;
	var container = $(".container");
	if (!animate) {
		values.forEach(function(value) {
			container.append("<p>" + value +"</p>");
			var elem = $("p").last();
			elem.hide();
			elem.fadeIn();
		});
	} else {
		var time = 0;
		var timeStep = 0.05;
		var i = 0;
		var id = setInterval(frame, 5);
		function frame() {
			time += timeStep;
			if (i === Math.floor(time)) {
				container.append("<p>" + values[i] +"</p>");
				var elem = $("p").last();
				// elem.hide();
				// elem.fadeIn();
				slideInAnimation(elem);
				i++;
				if (i === values.length) {
					clearInterval(id);
				}	
			}
		}
	}
}


$(document).ready(function() {
	
	$("#input-form").submit(function(event) {
		event.preventDefault();
		
		appendValues(processNumbers($("#input").val()));
		$("#input").val("");
		//slideInAnimation();
	});
	
});
