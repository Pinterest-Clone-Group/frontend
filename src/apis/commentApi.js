import { authInstance } from './instance';

const COMMENT_API = '/api/pins/';

const commentApi = {
  // 댓글 등록
  register: ({ pinId, comment, parentCommentId }) =>
    authInstance.post(COMMENT_API + pinId + '/comments', { comment, parentCommentId }),
  // 핀 목록 검색 조회
  getAll: ({ pinId }) => authInstance.get(COMMENT_API + pinId + '/comments'),
  updateById: ({ commentId, comment }) => authInstance.put(COMMENT_API + 'comments/' + commentId, { comment }),
  deleteById: ({ commentId }) => authInstance.delete(COMMENT_API + 'comments/' + commentId),
  putLikeById: ({ commentId }) => authInstance.put(COMMENT_API + 'comments/' + commentId + '/likes'),
};

export default commentApi;
