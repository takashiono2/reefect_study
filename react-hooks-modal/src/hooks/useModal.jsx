import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

const useModal = () => {
  const [show, setShow] = useState(false);

  const openModal = () => {
    setShow(true);
  }

  const closeModal = () => {
    setShow(false);
  }

  // eslint-disable-next-line react/prop-types
  const Modal = ({ children }) => {
    const contentRef = useRef(null);

    useEffect(() => {
      if (contentRef.current === null) return;

      if (show) {
        disableBodyScroll(contentRef.current);
      } else {
        enableBodyScroll(contentRef.current);
      }

      return () => {
        clearAllBodyScrollLocks();
      };
    }, [contentRef]);

    if (!show) return null;

    return createPortal(
      <div style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <div style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          opacity: 0.5,
          backgroundColor: "gray",
        }}></div>
          <div style={{ position: 'relative' }} ref={contentRef}>
            {children}
          </div>
        </div>
      ,
      document.getElementById('root')
    )
  };
  return { Modal, openModal, closeModal, show };
};

export default useModal;
