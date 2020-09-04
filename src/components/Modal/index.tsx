import React, { useRef } from 'react';
import { FiDelete } from 'react-icons/fi';

import {
  ModalContainer,
  ModalOverlay,
  ModalBox,
  ModalTitle,
  ModalContent,
  ModalClose,
} from './styles';

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: ({}: any) => void;
}

export const Modal: React.FC<ModalProps> = ({
  title,
  isOpen,
  onClose,
  children,
}) => {
  const outsideRef = useRef(null);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleCloseOnOverlay = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    if (e.target === outsideRef.current) {
      onClose({});
    }
  };

  return isOpen ? (
    <ModalContainer>
      <ModalOverlay ref={outsideRef} onClick={handleCloseOnOverlay} />
      <ModalBox>
        <ModalTitle>Adicionar tarefa</ModalTitle>
        <ModalContent>{children}</ModalContent>
        <ModalClose onClick={onClose}>
          <FiDelete color="#bb0a21" size={40} />
        </ModalClose>
      </ModalBox>
    </ModalContainer>
  ) : null;
};
