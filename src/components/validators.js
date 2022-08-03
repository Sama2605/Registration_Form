



export const emailValidator = email => {
    if (!email) {
      return console.log('Pole email jest puste')}
      else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
      return console.log('Niepoprawny email');
    }
   return email}
  export const passwordValidator = password => {
    if (!password) {
      return "Wpisz hasło";
    } else if (password.length < 8) {
      return "Hasło musi mieć co najmniej 8 znaków ";
    }
    return password ;
  };
  
  export const confirmPasswordValidator = (confirmPassword, password) => {
    if (!confirmPassword) {
      return "Powtórz hasło";
    } else if (confirmPassword.length < 8) {
      return "Hasło musi mieć co najmniej 8 znaków";
    } else if (confirmPassword !== password) {
      return "Hasła się różnią";
    }
    return  password;
  };
