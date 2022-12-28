export const emailIdCheck = (id) => {
  let regExp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+$/;
  return regExp.test(id);
};

export const passwordCheck = (pw) => {
  let regExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,20}$/;
  return regExp.test(pw);
};

export const checkPinTitle = (title) => {
  return title.length > 0 && title.length <= 40;
};

export const checkPinContent = (content) => {
  return content.length <= 500;
};

export const checkPinLink = (link) => {
  return link === '' || link.match(/(http(s)?:\/\/)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi);
};
