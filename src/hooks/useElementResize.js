import { useEffect, useRef } from 'react';

const useElementResize = () => {
  const ref = useRef();

  function resize(obj) {
    obj.style.height = '1px';
    obj.style.height = 12 + obj.scrollHeight + 'px';
  }

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const { current } = ref;
    current.addEventListener('keydown', () => resize(current));
    current.addEventListener('keyup', () => resize(current));

    return () => {
      current.removeEventListener('keydown', () => resize(current));
      current.removeEventListener('keyup', () => resize(current));
    };
  }, [ref]);

  return { ref };
};

export default useElementResize;
