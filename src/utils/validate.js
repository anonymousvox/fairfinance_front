export const phoneConfirmationValidateRules = async (value) => {
  if (!value) {
    return "Введите номер телефона";
  }
  if (value && value.replace(/_/g, "").length < 18) {
    return "Введите номер телефона";
  }
};

export const loginPwdRules = (value) => {
  if (!value) {
    return "Введите пароль";
  }
  if (value && value.length < 6) {
    return "Минимальное количество символов: 6";
  }
};

export const registerNameRules = (value) => {
  if (!value) {
    return "Введите имя";
  }
};

export const emailValidateRules = (value) => {
  if (!value) {
    return "Введите email";
  }
  if (!value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    return 'Введите email'
  }
}

export const requiredRule = (value) => {
  if (!value) {
    return "Поле обязательно для заполнения";
  }
}