export function isEmailValid(email) {
  // eslint-disable-next-line no-useless-escape
  const emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return emailValid.test(String(email).toLowerCase());
}

export function isPasswordValid(password){
  const passwordValid = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/; //La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.
  return passwordValid.test(password);
}

export function isNameOrLastname(text){
  const nameOrLastName = /^ [A-Za-zÀ-ú] + [A-Za-zÀ-ú] + $/;
    return nameOrLastName.test(text)
}