function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + "";
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }

}
function genaratePin() {
    const showPin = document.getElementById('show-pin');
    showPin.value = getPin();;
}

document.getElementById('key-pad').addEventListener('click', function name(event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    const previousNumber = calcInput.value;
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = "";
        }
    }
    else {
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
})

function verifypin(params) {
    const pin = document.getElementById('typed-numbers').value;
    const showPin = document.getElementById('show-pin').value;
    const notifyError = document.getElementById('notify-error');
    const notifySuccess = document.getElementById('notify-success');
    if (pin == showPin) {
        notifySuccess.style.display = 'block';
        notifyError.style.display = 'none';
    } else {
        notifyError.style.display = 'block';
        notifySuccess.style.display = 'none';

    }
}