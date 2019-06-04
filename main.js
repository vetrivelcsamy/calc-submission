let buffer = "0"

const screen = document.querySelector("#screen")

document.querySelector(".calc-buttons").addEventListener("click", function(event) {
	// body...
	buttonClick(event.target.innerText)
})

function buttonClick(value) {
	if (isNaN(parseInt(value))) {
		handleSymbol(value)
	} else {
		handleNumber(value)
	}
	rerender()
}

function handleNumber(value) {
	if (buffer === "0") {
		buffer = value
	} else {
		buffer += value
	}
}

function handleSymbol(value) {
	switch (value) {
		case "=":
			try {
				//	console.log(screen.innerText)
				buffer = eval(screen.value)
			} catch (err) {
				buffer = "Error"
			}
			break
		case "C":
			buffer = "0"
			break
		case "←":
			if (buffer.length === 1) {
				buffer = "0"
			} else {
				buffer = buffer.substring(0, buffer.length - 1)
			}
			break
		case "+":
			buffer += "+"
			break
		case "-":
			buffer += "-"
			break
		case "×":
			buffer += "*"
			break
		case "÷":
			buffer += "/"
			break
	}
}

function rerender() {
	screen.value = buffer
}
