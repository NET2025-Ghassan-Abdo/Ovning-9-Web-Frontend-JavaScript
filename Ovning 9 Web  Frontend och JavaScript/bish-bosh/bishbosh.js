for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 4 === 0) {
        console.log("Bish-Bosh");
    }
    else if (i % 3 === 0) {
        console.log("Bish");
    }
    else if (i % 4 === 0) {
        console.log("Bosh");
    }
    else {
        console.log(i);
    }
}

const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
let index = 0;



var button = document.querySelector(".btn");
var input = document.querySelector(".number");
var result = document.querySelector(".result");

function checkNumber() {
    try {

        
        var value = input.value; 
        if (value === "" || isNaN(value)) {
            throw new Error("❗ Please enter a valid number!");
        }

        var number = parseInt(value);

        if (number % 3 === 0 && number % 4 === 0) {
            result.textContent = "Bish-Bosh";
        }
        else if (number % 3 === 0) {
            result.textContent = "Bish";
        }
        else if (number % 4 === 0) {
            result.textContent = "Bosh";
        }
        else {
            result.textContent = number;
        }
    }
    catch (error) {
        result.textContent = error.message;
    }
}

button.addEventListener("click", checkNumber);

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkNumber();
    }
});



