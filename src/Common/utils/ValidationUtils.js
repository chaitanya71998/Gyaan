
export const validatePassword = (password) => {
    let minNumberofChars = 6;
    let passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let maxNumberofChars = 16;

    if (password === "") {
        return {
            hasError: true,
            errorMessage: "empty password"
        }

    }

    else if (password.length < minNumberofChars || password.length > maxNumberofChars) {
        return {
            hasError: true,
            errorMessage: "password length should be 6-16 letters"
        };
    }
    else if(!passwordRegex.test(password)) {
        return {
            hasError: true,
            errorMessage: "password should contain atleast one number and one special character "
        };
    }
    else return {
        hasError:false,
        errorMessage:""
    }

}
