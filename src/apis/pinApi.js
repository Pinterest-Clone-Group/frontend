import { authInstance } from './instance';

const PIN_API = '/api/pins';

const pinApi = {
  // 핀 등록
  upload: ({ title, content, image, link }) => authInstance.post(PIN_API, { title, content, image, link }),
  // 핀 목록 조회
  getAll: () => authInstance.get(PIN_API),
  // 핀 목록 검색 조회
  getAllBySearchQuery: (query) => authInstance.get(PIN_API + '/search?searchKeyword=' + query),
  // 핀 상세 조회
  getById: (pinId) => authInstance.get(PIN_API + '/' + pinId),
  // 핀 수정
  update: ({ pinId, title, content }) => authInstance.put(PIN_API + '/' + pinId, { title, content }),
  // 핀 삭제
  delete: (pinId) => authInstance.delete(PIN_API + '/' + pinId),
};

export default pinApi;
