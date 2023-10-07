const textInput = document.querySelector('#text');
const numberInput = document.querySelector('#number');
const emailInput = document.querySelector('#email');

textInput.addEventListener('input', () => {
    const stringRegEx = /^[a-zA-Z]+$/
    const testText = stringRegEx.test(textInput.value)

    if (textInput.value.length < 3 || textInput.value.length > 20 || !testText) {
        textInput.parentElement.classList.remove('valid')
        textInput.parentElement.classList.add('invalid')
    } else {
        textInput.parentElement.classList.remove('invalid')
        textInput.parentElement.classList.add('valid')
    }

    if (textInput.value.length === 0) {
        textInput.parentElement.classList.remove('invalid')
        textInput.parentElement.classList.remove('valid')
    }
});

numberInput.addEventListener('input', () => {
    const numberRegEx = /^[0-9]{0,8}$/;
    const testNumber = numberRegEx.test(numberInput.value);

    if (numberInput.value.length === 2) {
        numberInput.value = `+998 (${numberInput.value})`;
    }

    if (numberInput.value.length > 1) {
        numberInput.value = numberInput.value.slice(0, 18);
    }

    if (numberInput.value.length < 14 || !testNumber) {
        numberInput.parentElement.classList.remove('valid');
        numberInput.parentElement.classList.add('invalid');
    } else {
        numberInput.parentElement.classList.remove('invalid');
        numberInput.parentElement.classList.add('valid');
    }

    if (numberInput.value.length === 0) {
        numberInput.parentElement.classList.remove('invalid');
        numberInput.parentElement.classList.remove('valid');
    }
});

emailInput.addEventListener('input', () => {
    const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    const testEmail = emailRegEx.test(emailInput.value)

    if (!testEmail) {
        emailInput.parentElement.classList.remove('valid')
        emailInput.parentElement.classList.add('invalid')
    } else {
        emailInput.parentElement.classList.remove('invalid')
        emailInput.parentElement.classList.add('valid')
    }

    if (emailInput.value.length === 0) {
        emailInput.parentElement.classList.remove('invalid')
        emailInput.parentElement.classList.remove('valid')
    }
})