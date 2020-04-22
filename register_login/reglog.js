
// Function on styling when textbox focus and blur.
function textfocus(textbox) {
    textbox.style.background = "rgb(255, 232, 244)";
    textbox.style.width = "16.5vw";
}

function textblur(textbox) {
    textbox.placeholder = "";
    textbox.style.background = "linear-gradient(rgb(255, 255, 255), rgb(248, 247, 244))";
    textbox.style.width = "15vw";
}

function captionfocus(textbox, caption, width) {
    textfocus(textbox);
    textbox.placeholder = caption;
    textbox.style.width = width;
}

function loginfocus(textbox) {
    textfocus(textbox);
    document.getElementById("forget").style.margin = "auto auto auto 9.5vw";
}

function loginblur(textbox) {
    textblur(textbox);
    document.getElementById("forget").style.margin = "auto auto auto 8vw";
}

function addressfocus(box) { box.style.background = "rgb(255, 232, 244)"; }

function addressblur(box) { box.style.background = "linear-gradient(rgb(255, 255, 255), rgb(248, 247, 244))"; }

// Email validation.
function emailValid() {
    var email = document.getElementById("email");
    var error = document.getElementById("error-email");
    var error_arrow = document.getElementById("errorArrow-email");

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        error_arrow.style.transition = "all 0s";
        error_arrow.style.borderColor = "transparent";
        error.style.transition = "all 0s";
        error.style.background = "transparent";
        error.innerHTML = "";
        return(true);
    }
    else {
        error_arrow.style.transition = "all 0.3s ease";
        error_arrow.style.borderColor = "transparent transparent gray transparent";
        error.style.transition = "all 0.3s ease";
        error.style.background = "gray";
        error.innerHTML = "You have entered an invalid email address!";
        return(false);
    }
}

// Password validation.
function passwordValid() {
    var password = document.getElementById("password");
    var error = document.getElementById("error-password");
    var error_arrow = document.getElementById("errorArrow-password");

    if (password.value.match(/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/)) {
        error_arrow.style.transition = "all 0s";
        error_arrow.style.borderColor = "transparent";
        error.style.transition = "all 0s";
        error.style.background = "transparent";
        error.innerHTML = "";
        return(true);
    }
    else {
        error_arrow.style.transition = "all 0.3s ease";
        error_arrow.style.borderColor = "transparent transparent gray transparent";
        error.style.transition = "all 0.3s ease";
        error.style.background = "gray";
        error.innerHTML = "You have entered an invalid password!<br><br>You should follow all requirement below:<br>&#9679;&nbsp;8 to 20 characters.<br>&#9679;&nbsp;At least one alphabet.<br>&#9679;&nbsp;At least one number.<br>&#9679;&nbsp;At least one symbol. (!@#$%^&*)";
        return(false);
    }
}

// Confirmation Password validation.
function confirmSamePass() {
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword");
    var error = document.getElementById("error-confirmPassword");
    var error_arrow = document.getElementById("errorArrow-confirmPassword");

    if (password.value == confirmPassword.value) {
        error_arrow.style.transition = "all 0s";
        error_arrow.style.borderColor = "transparent";
        error.style.transition = "all 0s";
        error.style.background = "transparent";
        error.innerHTML = "";
        return(true);
    }
    else {
        error_arrow.style.transition = "all 0.3s ease";
        error_arrow.style.borderColor = "transparent transparent gray transparent";
        error.style.transition = "all 0.3s ease";
        error.style.background = "gray";
        error.innerHTML = "Password are not same!";
        return(false);
    }
}

// Phone Number validation.
function phoneNumValid() {
    var phoneNum = document.getElementById("phoneNum");
    var error = document.getElementById("error-phoneNum");
    var error_arrow = document.getElementById("errorArrow-phoneNum");

    if (/^01\d{1}\-\d{7,8}$/.test(phoneNum.value)) {
        error_arrow.style.transition = "all 0s";
        error_arrow.style.borderColor = "transparent";
        error.style.transition = "all 0s";
        error.style.background = "transparent";
        error.innerHTML = "";
        return(true);
    }
    else {
        error_arrow.style.transition = "all 0.3s ease";
        error_arrow.style.borderColor = "transparent transparent gray transparent";
        error.style.transition = "all 0.3s ease";
        error.style.background = "gray";
        error.innerHTML = "You have entered an invalid phone number!";
        return(false);
    }
}

// Checking all validation.
function checkValid() {
    if (emailValid() == true && passwordValid() == true && confirmSamePass() == true && phoneNumValid() == true) {
        alert("Registration successfully!\nPlease login again!");
        return true;
    }
    else {
        return false;
    }
}