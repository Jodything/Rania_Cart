function validate() {
    var form = document.getElementById('signUpForm');
    var errors = [];

    if (!validateName(form.name)) {
        errors.push({
            field: form.name,
            msg: 'name must be more than 2 characters'
        });
    }

    // check email is valid and not blank
    if (!validateEmail(form.email)) {
        errors.push({
            field: form.email,
            msg: 'email invalid'
        });
    }

    if (!validatePhone(form.phone)) {
        errors.push({
            field: form.phone,
            msg: 'phone number must be 10 digits'
        });
    }

    if (!validateAge(form.age)) {
        errors.push({
            field: form.age,
            msg: 'Age must be a positive number'
        });
    }

    // if (!validateGender(form.gender)) {
    //     errors.push({
    //         field: form.gender,
    //         msg: 'required!'
    //     });
    // }

    if (!validatePassword(form.password)) {
        errors.push({
            field: form.password,
            msg: 'password must be more than 8 characters'
        });
    }

    if (!validateConfirmPassword(form.confirmPassword, form.password)) {
        errors.push({
            field: form.confirmPassword,
            msg: 'passwords do not match'
        });
    }

    if (errors.length) {
        for (var i = 0; i < errors.length; i++) {
            if (!errors[i].field.classList.contains('help-block')) {
                errors[i].field.classList.add('help-block');
                errors[i].field.insertAdjacentHTML('afterend', '<span class="whoops">' + errors[i].msg + '</span>');
            }
        }
        return false;
    } else {
        return true;
    }
}



function validateName(name) {
    if (name.value.length < 2) {
        return false;
    } else {
        _removeError(name);
        return true;
    }
}

function validateEmail(email) {
    var emailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!emailRegex.test(email.value)) {
        return false;
    } else {
        _removeError(email);
        return true;
    }
}

function validatePhone(phone) {
    if (phone.value && (phone.value.length > 10 || phone.value.length < 10)) {
        return false;
    } else {
        _removeError(phone);
        return true;
    }
}

function validateAge(age) {
    if (age.value && age.value < 1) {
        return false;
    } else {
        _removeError(age);
        return true;
    }
}

function validateGender(gender) {
    if (!gender.value) {
        return false;
    } else {
        return true;
    }
}

function validatePassword(password) {
    if (password.value.length <= 8) {
        return false;
    } else {
        _removeError(password);
        return true;
    }
}

function validateConfirmPassword(confirmPassword, password) {
    if (!confirmPassword.value) {
        return false;
    } else if (password.value !== confirmPassword.value) {
        return false;
    } else {
        _removeError(confirmPassword);
        return true;
    }
}

function _removeError(el) {
    if (el.classList.contains('help-block')) {
        el.classList.remove('help-block');
        el.nextSibling.remove();
    }
}
