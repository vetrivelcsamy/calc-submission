const button = document.querySelector('button');

document.querySelector('button').addEventListener('click', event => {
	    //alert(`You clicked on button ${event.target.innerText}`);
	    // console.log(`You clicked on button ${event.target.innerText}`);
     //button.innerHTML = `Click count: ${event.detail}`;
     document.getElementById("screen").innerHTML += "!";
});