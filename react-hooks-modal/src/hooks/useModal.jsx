import { useState } from 'react';

const useModal = () => {
  const [show, setShow] = useState(false);

  const openModal = () =>{
    setShow(true);
  }

  const closeModal = () =>{
    setShow(false);
  }

  const Modal = ({ children }) => {
    if(!show)return null;
    return <>{children}</>;
  };
  return { Modal, openModal, closeModal };
};

export default useModal;
