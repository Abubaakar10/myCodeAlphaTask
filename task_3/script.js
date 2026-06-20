const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.textContent;

        if (value === "C") {
            expression = "";
        }

        else if (value === "⌫") {
            expression = expression.slice(0, -1);
        }

        else if (value === "=") {

            try {
                expression = eval(expression).toString();
            }
            catch {
                expression = "Error";
            }

        }

        else {
            if (expression === "Error") expression = "";
            expression += value;
        }

        display.value = expression;

    });

});

document.addEventListener("keydown", e => {

    if ("0123456789+-*/.%".includes(e.key)) {
        expression += e.key;
    }

    else if (e.key === "Enter") {

        try {
            expression = eval(expression).toString();
        }
        catch {
            expression = "Error";
        }

    }

    else if (e.key === "Backspace") {
        expression = expression.slice(0, -1);
    }

    else if (e.key === "Escape") {
        expression = "";
    }

    display.value = expression;

});