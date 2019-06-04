let runningTotal = 0
let buffer = "0"
let previousOperator

const screen = document.querySelector("#screen")
var errorText = "Not Support"

// handling button click
 document.querySelector(".calc-buttons").addEventListener("click", function(event) {
	buttonClick(event.target.innerText)
})

// input only numbers
function buttonClick(value) {
	if (isNaN(parseInt(value))) {
		handleSymbol(value)
	} else {
		handleNumber(value)
	}
	rerender()
}

//  handle number
function handleNumber(value) {
	if (buffer === "0") {
	     	buffer = value
   	} else {
		buffer += value
	}
}


//reference: https://www.w3schools.com/js/js_switch.asp
function handleSymbol(value) {
// task handling 
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
		    case "+":
		    case "−":
		    case "×":
		    case "÷":
			handleCal(value)
			break
	}
}

// storing numbers +++
function handleCal(value) {
	let intBuffer = parseInt(buffer)
	if (runningTotal === 0) {
	runningTotal = intBuffer
  
	} else {
		flushOperation(intBuffer)
	}
    //screen.innerText = previousOperatorvalue
	console.log(previousOperator = value)
    buffer = value

}

// math operation
function flushOperation(intBuffer) {
	if (previousOperator === "+") {
		runningTotal += intBuffer
	} else if (previousOperator === "-") {
		runningTotal -= intBuffer
	} else if (previousOperator === "×") {
		runningTotal *= intBuffer
	} else {
		runningTotal /= intBuffer
	}
}

//render all outputs
function rerender() {
  if (buffer.length <= 14) {
    screen.innerText = buffer
  }else{
   screen.innerText = errorText
  }
 }

//screen.innerText = buffer