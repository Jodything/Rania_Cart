function validate(e) {
    var form = document.getElementById('signUpForm');
    var errors = [];

    //check length of name is greater than 2 characters
    if (!form.name.value) {
        errors.push({
            field: form.name,
            msg: 'required!'
        });
    }

    if (form.name.value.length < 2) {
        errors.push({
            field: form.name,
            msg: 'name must be more than 2 characters'
        });
    }

    if (!form.email.value) {
        errors.push({
            field: form.email,
            msg: 'required!'
        });
    }

    // check phone is a number and is 10 digits
    if (form.phone.value && (form.phone.value.length > 10 || form.phone.value.length < 10)) {
        errors.push({
            field: form.phone,
            msg: 'phone number must be 10 digits'
        });
    }

    // check the person isnt benjamin button
    if (form.age.value && form.age.value < 1) {
        errors.push({
            field: form.age,
            msg: 'Age must be a positive number'
        });
    }

    // check password is greate than 8 characters
    if (form.password.value.length <= 8) {
        errors.push({
            field: form.password,
            msg: 'password must be more than 8 characters'
        });
    }
    // check both passwords match
    if (form.password.value !== form.confirmPassword.value) {
        form.confirmPassword.setAttribute('class', 'help-block');
        form.confirmPassword.insertAdjacentHTML('afterend', '<span class="whoops">passwords do not match</span>');
        errors.push({
            field: form.confirmPassword,
            msg: 'passwords do not match'
        });
    }

    if (errors.length) {
        for (var i = 0; i < errors.length; i++) {
            errors[i].field.setAttribute('class', 'help-block');
            errors[i].field.insertAdjacentHTML('afterend', '<span class="whoops">' + errors[i].msg + '</span>');
        }
        return false;
    } else {
        return true;
    }
}
