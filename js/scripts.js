
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

function animatePrompt() {
	var showing = true;
	var container = $("#output");
	container.append("<p id='prompt'></p>");
	var p = $("#prompt");
	p.html(">")
	
	var id = setInterval(frame, 500)
	function frame() {
		if (typeof(p) != "undefined") {
			if (showing) {
				p.html("&nbsp;")
				showing = false;
			} else {
				p.html(">")
				showing = true;
			}
		} else {
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
			container.append("<p></p>");
			var elem = $("p").last();
			elem.html("&nbsp; &nbsp;" + value)
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
				container.append("<p></p>");
				var elem = $("p").last();
				elem.html("&nbsp; &nbsp;" + values[i])
				elem.fadeIn();
				i++;
				if (i === values.length) {
					clearInterval(id);
					animatePrompt();
				}	
			}
		}
	}
}


$(document).ready(function() {
	
	$("#input-form").submit(function(event) {
		event.preventDefault();

		appendValues(processNumbers($("#number").val(), $("#name").val()));
		$("#number").val("");
	});
	
});
