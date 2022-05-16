import * as React from 'react';
import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import BaseLayoutProps from '../types/BaseLayoutProps';

export interface ModalProps extends BaseLayoutProps {
  isModalActive?: boolean;
}

const ModalStyled = styled.div<ModalProps>`
  ${({ theme, isModalActive }) => css`
    display: ${isModalActive ? 'block' : 'none'};
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
  `}
`;

const ModalWrapper = styled.div<ModalProps>`
  ${({ theme, isModalActive }) => css`
    display: ${isModalActive ? 'block' : 'none'};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 280px;
    height: 218px;
    padding: 20px;
    border-radius: 20px;
    background: ${theme.colors.white};
    box-shadow: ${theme.hoverShadow.modal};
    z-index: 1;
  `}
`;

const ModalTextStyeld = styled.p`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 240px;
    height: 122px;
    margin-bottom: 20px;
    font-size: ${theme.fonts.size.ms};
    line-height: ${theme.fonts.lineHeight.ms};
  `}
`;

export default function Modal() {
  const [modalState, setModalState] = useState(false);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (modalState) {
      document.body.style.cssText = `
        top: -${scrollY}px;
        position: fixed; 
        width: 100%;`;
    }
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, [modalState, scrollY]);

  const openModal = () => {
    setModalState(() => !modalState);
    setScrollY(window.pageYOffset);
  };

  const closeModal = () => {
    setModalState(() => !modalState);
    setScrollY(0);
  };

  return (
    <>
      <ModalStyled isModalActive={modalState}>
        <ModalWrapper isModalActive={modalState}>
          <ModalTextStyeld>반려사유 작성할까요?</ModalTextStyeld>
          <div>button section</div>
          <button style={{ width: '50px' }} onClick={closeModal}>
            닫기버튼
          </button>
        </ModalWrapper>
      </ModalStyled>
      <button
        style={{ width: '50px', height: '500px', border: '1px solid black' }}
        onClick={openModal}
      >
        버튼
      </button>
    </>
  );
}
