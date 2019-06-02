let runningTotal = 0
let buffer = "0"
let previousOperator
const screen = document.querySelector("#screen")

document.querySelector(".calc-buttons").addEventListener("click", function(event) {
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

//reference: https://www.w3schools.com/js/js_switch.asp

function handleSymbol(value) {
	switch (value) {
		case "C":
			buffer = "0"
			runningTotal = 0
			previousOperator = null
			break
		case "=":
			if (previousOperator === null) {
				return
			}
			//logic refer: https://stackoverflow.com/a/14479965
			flushOperation(parseInt(buffer))
			previousOperator = null
			buffer = "" + runningTotal
			runningTotal = 0
			break
		case "←":
			if (buffer.length === 1) {
				buffer = "0"
			} else {
				buffer = buffer.substring(0, buffer.length - 1)
			}
			break
		default:
			handleCal(value)
			break
	}
}

function rerender() {
	screen.innerText = buffer
}
