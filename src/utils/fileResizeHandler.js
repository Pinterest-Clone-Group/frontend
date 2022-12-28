import imageCompression from 'browser-image-compression';

// TODO: hook 리팩터링 고려
export const resizeFile = async (file) => {
  let modifiedFile = null;
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 360,
  };

  try {
    const compressedFile = await imageCompression(file, options);
    modifiedFile = compressedFile;
  } catch (error) {
    modifiedFile = null;
    console.log(error);
  }
  return modifiedFile && new File([modifiedFile], modifiedFile.name, { type: file.type });
};
