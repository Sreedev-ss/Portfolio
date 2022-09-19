window.onscroll = function () {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById('navbar').classList.add('scrolled');
    }
    else {
        document.getElementById('navbar').classList.remove('scrolled');
    }
}

AOS.init({
    duration: 800,
});

const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle)

navLinks.forEach((element, index) => {
    element.addEventListener('click', () => {
        bsCollapse.toggle()
    })
    console.log(index)
});

// Validation
const gform = document.getElementById('gform')
const username = document.getElementById('username')
const number = document.getElementById('number')
const email = document.getElementById('email')
const subject = document.getElementById('subject')
const content = document.getElementById('content')
function validateFormAAA(){

    validateInputs();

}

const setError = (element, message) => {
    const formgroup = element.parentElement;
    const errordisplay = formgroup.querySelector('.error')

    errordisplay.innerText = message
    formgroup.classList.add('error');
    formgroup.classList.remove('success');
}

const setSuccess = element => {

    const formgroup = element.parentElement;
    const errorDisplay = formgroup.querySelector('.error');


    errorDisplay.innerText = '';
    formgroup.classList.add('success');
    formgroup.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function submitForm(userName,number,email,subject,content) {
    let gform = document.getElementById('gform');
    gform.querySelector("button#submit-btn-btn").click();
    // console.log(form);
}

const isValidNumber = number => {
    const re = /^[0-9]{10}$/;
    return re.test(String(number));
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const numberValue = number.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const contentValue= content.value.trim();
    var flag = 2;

    // Name
    if (usernameValue === '') {
        setError(username, 'This field cannot be empty');
        flag = 1;
    } else if (usernameValue.length <= 2) {
        setError(username, 'Enter name correctly');
        flag = 1;
    } else {
        setSuccess(username);
    }

    // Number
    if (numberValue === '') {
        setError(number, 'This field cannot be empty');
        flag = 1;
    } else if (numberValue.length !== 10) {
        setError(number, 'Number must be 10 characters');
        flag = 1;
    } else if (!isValidNumber(numberValue)) {
        setError(number, 'Enter number correctly');
        flag = 1;
    }
    else {
        setSuccess(number);
    }

    // Email
    if (emailValue === '') {
        setError(email, 'This field cannot be empty');
        flag = 1;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Email is not valid');
        flag = 1;
    } else {
        setSuccess(email);
    }

    // subject
    if (subjectValue === '') {
        setError(subject, 'This field cannot be empty');
        flag = 1;
    } else if (subjectValue.length < 30) {
        setError(subject, 'Subject should be 20 characters or more');
        flag = 1;
    } else {
        setSuccess(subject);
    }
    
    setSuccess(content);
  
    if(flag==2){
        submitForm(usernameValue,numberValue,emailValue,subjectValue,contentValue);
    }

}


