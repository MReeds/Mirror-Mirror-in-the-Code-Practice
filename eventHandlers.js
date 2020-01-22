const inputField = document.getElementById("message");

const boxOne = document.getElementById("boxOne");

const boxTwo = document.getElementById("boxTwo");

inputField.addEventListener("keyup", (event) => {
    boxOne.innerHTML = event.target.value
    boxTwo.innerHTML = event.target.value
})

// hello

