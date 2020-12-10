export function isFirstNameValid(firstName) {
  const firstNameValid = /^([a-zA-Z])+$/;
  return firstNameValid.test(String(firstName).toLowerCase());
}

export function isLastNameValid(lastName) {
  const lastNameValid = /^([a-zA-Z])+$/;
  return lastNameValid.test(String(lastName).toLowerCase());
}

export function isEmailValid(email) {
  // eslint-disable-next-line no-useless-escape
  const emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return emailValid.test(String(email).toLowerCase());
}

export function isPasswordValid(password) {
  const passwordValid = /^(?=^.{6,12}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
  return passwordValid.test(String(password));
}