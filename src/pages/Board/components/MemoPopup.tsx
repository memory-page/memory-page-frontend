import React from 'react';
import styled from 'styled-components';

interface MemoPopupProps {
  isOpen: boolean;
  memoText: string;
  author: string;
  onClose: () => void;
}

const MemoPopup: React.FC<MemoPopupProps> = ({ isOpen, memoText, author, onClose }) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <PopupContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>X</CloseButton>
        <MemoContent>{memoText}</MemoContent>
        <MemoAuthor>- {author}</MemoAuthor>
      </PopupContainer>
    </Overlay>
  );
};

export default MemoPopup;

// Styled Components
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  text-align: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const MemoContent = styled.p`
  font-size: 16px;
  margin: 10px 0;
`;

const MemoAuthor = styled.p`
  font-size: 14px;
  color: gray;
`;