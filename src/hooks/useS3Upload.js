import AWS from 'aws-sdk';
import { useState } from 'react';

const useS3Upload = () => {
  const [resultUrl, setResultUrl] = useState(null);

  AWS.config.update({
    region: 'ap-northeast-2',
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: process.env.REACT_APP_S3_IDENTIFY_ID,
    }),
  });

  const clearResult = () => {
    setResultUrl(null);
  };

  // TODO: image validation 필요
  // TODO: pin 이미지와 profile image 로직 분리 시도
  // TODO: pin 이미지의 경우 thumbnail처리를 위해 리사이징 후 두개 업로드 고려
  const uploadFile = (file, dir) => {
    const upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: process.env.REACT_APP_S3_BUCKET,
        Body: file, // 업로드할 파일 객체
        ContentType: file.type,
        Key: 'data/' + dir + '/' + Date.now() + '.' + file.name.split('.').pop(),
      },
    });

    const promise = upload.promise();
    return promise;
  };

  const uploadProfile = (file, id) => {
    const upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: process.env.REACT_APP_S3_BUCKET,
        Body: file, // 업로드할 파일 객체
        ContentType: file.type,
        Key: 'data/profile/' + id + '.' + file.name.split('.').pop(),
      },
    });

    const promise = upload.promise();
    return promise;
  };

  return { uploadFile, uploadProfile, resultUrl, clearResult };
};

export default useS3Upload;
