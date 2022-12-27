import { checkPinContent, checkPinLink, checkPinTitle } from '../utils/validationCheck';

export const PIN_VALIDATION = Object.freeze({
  title: {
    BLANK: '제목은 필수로 입력하셔야 됩니다.',
    SUCCESS: '처음 40자는 일반적으로 피드에서 볼 수 있습니다.',
    INVALID: '저런! 제목이 너무 깁니다. 길이를 조금 줄여보세요.',
    checkValueValidated: (title) => checkPinTitle(title),
  },
  content: {
    SUCCESS: '사람들은 핀을 클릭하면 대개 처음 50글자를 읽습니다.',
    INVALID: '저런! 설명이 너무 깁니다. 길이를 조금 줄여보세요.',
    checkValueValidated: (content) => checkPinContent(content),
  },
  link: {
    SUCCESS: ' ',
    INVALID: '유효한 URL이 아닙니다.',
    checkValueValidated: (link) => checkPinLink(link),
  },
});
