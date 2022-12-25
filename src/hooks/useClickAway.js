import { useEffect, useRef } from 'react';

const useClickAway = (handler) => {
  const ref = useRef(null);
  const currentHandler = useRef(handler);

  useEffect(() => {
    currentHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }
    const handleDocumentClick = (event) => {
      event.stopPropagation();
      const doc = (node && node.ownerDocument) || document;
      doc.documentElement?.contains(event.target) && !node.contains(event.target) && handler(event);
    };
    document.addEventListener('mousedown', handleDocumentClick);

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, [ref, handler]);

  return { ref };
};

export default useClickAway;
