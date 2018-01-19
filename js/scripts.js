
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

// TODO fix this with if / else if
function processNumber(number, name) {
	var output = number.toString();
	if (checkForBeep(number))
		output = "Beep";
	if (checkForBoop(number))
		output = "Boop";
	if (checkForDave(number))
		output = "I'm sorry, " + name + ". I'm afraid I can't do that."
	return output;
}

function processNumbers(max, name) {
	if (name === "") {
		name = "Dave";
	}
	var output = [];
	if(isNaN(parseInt(max))) {
		alert("That's not a number...");
	} else {
		for (var i = 1; i <= max; i+=1) {
			output.push(processNumber(i, name));
		}
	}
	return output;
}

function slideInAnimation(elem) {
	var step = 1;
	elem.hide();
	elem.fadeIn();
	var width = $("#output").width()
	var percent = 50;
	var id = setInterval(frame, 10);
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
	if (values.length < 1)
		return;
	if ($("input:checkbox[name=reverse]:checked").length >= 1) values.reverse();
	var animate = $("input:checkbox[name=anim]:checked").length >= 1;
	var container = $("#output");
	$("p").remove();
	container.hide();
	container.show();
	if (!animate) {
		values.forEach(function(value) {
			container.append("<p>" + value +"</p>");
			var elem = $("p").last();
			elem.show();
		});
	} else {
		var time = 0;
		var timeStep = 0.5;
		var i = 0;
		var id = setInterval(frame, 10);
		function frame() {
			time += timeStep;
			if (i === Math.floor(time)) {
				container.append("<p>" + values[i] +"</p>");
				var elem = $("p").last();
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

		appendValues(processNumbers($("#number").val(), $("#name").val()));
	});
	
});
