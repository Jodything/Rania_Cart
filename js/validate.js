function validate(e) {
    var form = document.getElementById('signUpForm');

    //Required fields
    if (!form.name.value || !form.email.value || !form.password.value || !form.confirmPassword.value) {
        alert('Please fill in all required fields');
        form.name.setAttribute('class', 'help-block');
        form.email.setAttribute('class', 'help-block');
        form.password.setAttribute('class', 'help-block');
        form.confirmPassword.setAttribute('class', 'help-block');
        return false;
    } else {
        //check length of name is greater than 2 characters
        if (form.name.value.length < 2) {
            form.name.setAttribute('class', 'help-block');
            form.name.insertAdjacentHTML('afterend', '<span class="whoops">name must be more than 2 characters long</span>');
            return false;
        }
        // check password is greate than 8 characters
        if (form.password.value.length <= 8) {
            form.password.setAttribute('class', 'help-block');
            form.password.insertAdjacentHTML('afterend', '<span class="whoops">password must be more than 8 characters long</span>');
            return false;
        }
        // check both passwords match
        if (form.password.value !== form.confirmPassword.value) {
            form.confirmPassword.setAttribute('class', 'help-block');
            form.confirmPassword.insertAdjacentHTML('afterend', '<span class="whoops">passwords do not match</span>');
            return false;
        }
        // check the person isnt benjamin button
        if (form.age.value) {
            if (form.age.value.length < 1) {
                form.age.setAttribute('class', 'help-block');
                form.age.insertAdjacentHTML('afterend', '<span class="whoops">Age must be a positive number</span>');
                return false;
            }
        }

        // check phone is a number and is 10 digits
        if (form.phone.value) {
            if (form.phone.value.length > 10 || form.phone.value.length < 10) {
                form.phone.setAttribute('class', 'help-block');
                form.phone.insertAdjacentHTML('afterend', '<span class="whoops">phone number must be 10 digits long</span>');
                return false;
            }
            if (!form.phone.value.isNaN) {
                form.phone.setAttribute('class', 'help-block');
                form.phone.insertAdjacentHTML('afterend', '<span class="whoops">phone number must be a number</span>');
                return false;
            }
        }

        return true;
    }
}
