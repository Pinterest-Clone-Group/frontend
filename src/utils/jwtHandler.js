import jwt_decode from 'jwt-decode';

export const getUserIdFromAccessToken = (token) => {
  return jwt_decode(token).userId;
};
