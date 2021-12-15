export const LoginForm = {
  password: {
    value: '',
    validate: { isValid: false },
  },

  email: { value: '', validate: { isValid: false } },
};
export const RegisterForm = inputs => {
  return {
    ...inputs,
    name: { value: '', validate: { isValid: false } },
  };
};
