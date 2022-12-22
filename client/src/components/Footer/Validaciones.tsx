const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/

export function validate(input: any) {
  const errors: any = {};
  if (input.user_name.search(/^[a-zA-Z\s]*$/)) {
    errors.user_name = "Este campo no admite simbolos ni numeros";
  } else if (!input.user_name || input.user_name.length < 3)
    errors.user_name =
      "Se requiere un nombre o el nombre ingresado es muy corto";
  //----------------------------------------------------------------
  else if (
    validEmail.test(input.user_email)
  ) {
    errors.user_email = "Por favor inserte un e-mail válido";
  }
  else if (!input.user_email ) errors.user_email = "Este campo es obligatorio";
 
  //----------------------------------------------------------------
  else if (!input.user_message || input.user_message < 30)
    errors.user_message = "Este campo debe contener mas de 30 carácteres";

  return errors;
}
