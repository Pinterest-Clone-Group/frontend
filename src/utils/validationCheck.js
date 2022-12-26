export const emailIdCheck = (id) => {
  let regExp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+$/;
  return regExp.test(id);
};

export const passwordCheck = (pw) => {
  let regExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,20}$/;
  return regExp.test(pw);
};
