export const emailIdCheck = (id) => {
  let regExp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+$/;
  return regExp.test(id);
};

export const passwordCheck = (pw) => {
  // 최소조건
  // 8자 이상 16자 미만
  // 입력값 [특수문자,대소문자,숫자]
  let regExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,20}$/;
  return regExp.test(pw);
};
