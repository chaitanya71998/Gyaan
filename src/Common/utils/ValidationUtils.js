export const validateUsername = username => {
   if (username === '') {
      return {
         hasError: true,
         errorMessage: 'empty username'
      }
   } else {
      return {
         hasError: true,
         errorMessage: 'empty username'
      }
   }
}
export const validatePassword = password => {
   let minNumberOfChars = 6
   let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
   let maxNumberOfChars = 16

   if (password === '') {
      return {
         hasError: true,
         errorMessage: 'empty password'
      }
   } else if (
      password.length < minNumberOfChars ||
      password.length > maxNumberOfChars
   ) {
      return {
         hasError: true,
         errorMessage: 'password length should be 6-16 letters'
      }
   } else if (!passwordRegex.test(password)) {
      return {
         hasError: true,
         errorMessage: 'password should contain atleast one number'
      }
   } else
      return {
         hasError: false,
         errorMessage: ''
      }
}
