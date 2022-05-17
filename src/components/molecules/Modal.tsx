import * as React from 'react';
import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import BaseLayoutProps from '../types/BaseLayoutProps';

export interface ModalProps extends BaseLayoutProps {
  isModalActive?: boolean;
}

export interface ModalTitleProps extends ModalProps {
  modalTitle:
    | 'SomeoneConfirming'
    | 'WritingDeniedReason'
    | 'NothingReason'
    | 'SubmitDeniedReason'
    | 'CancelDeniedReason'
    | 'Approving';
}

const selectTitle = ({ modalTitle }: ModalTitleProps) => {
  let title: JSX.Element;
  let button;
  switch (modalTitle) {
    case 'Approving':
      title = <p>승인하시겠습니까?</p>;
      button = 2;
      break;
    case 'CancelDeniedReason':
      title = <p>작성하시던 내용은 저장되지 않습니다.</p>;
      button = 2;
      break;
    case 'NothingReason':
      title = <p>반려 사유를 선택하거나 작성해주세요.?</p>;
      button = 2;
      break;
    case 'SomeoneConfirming':
      title = (
        <p>
          다른 관리자가 검수중입니다. <br /> 승인 및 반려를 하실 수 없습니다.
        </p>
      );
      button = 2;
      break;
    case 'SubmitDeniedReason':
      title = (
        <p>
          반려 후 취소가 불가능합니다. <br /> 반려 사유 작성을 완료합니다.
        </p>
      );
      button = 2;
      break;
    case 'WritingDeniedReason':
      title = <p>'반려사유 작성할까요?'</p>;
      button = 2;
      break;
  }
  let components = { title: title, button: button };
  return components;
};

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

const ModalTextStyeld = styled.p<ModalTitleProps>`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 240px;
    height: 122px;
    margin-bottom: 20px;
    font-size: ${theme.fonts.size.ms};
    line-height: ${theme.fonts.lineHeight.ms};
    text-align: center;
  `}
`;

export default function Modal(props: ModalTitleProps) {
  const [modalState, setModalState] = useState(false);

  useEffect(() => {
    if (modalState) {
      document.body.style.cssText = `
        overflow: hidden`;
    }
    return () => {
      document.body.style.cssText = '';
    };
  }, [modalState]);

  return (
    <>
      <ModalStyled isModalActive={modalState}>
        <ModalWrapper isModalActive={modalState}>
          <ModalTextStyeld {...props}>
            {selectTitle(props).title}
          </ModalTextStyeld>
          <div style={{ height: '36px', backgroundColor: 'skyblue' }}>
            <button
              style={{
                height: '100%',
                width: '115px',
                backgroundColor: 'blue',
                marginRight: '10px',
                borderRadius: '10px',
              }}
              onClick={() => setModalState(() => !modalState)}
            >
              닫기버튼
            </button>
            <button
              style={{
                height: '100%',
                width: '115px',
                backgroundColor: 'gray',
                borderRadius: '10px',
              }}
              onClick={() => setModalState(() => !modalState)}
            >
              닫기버튼
            </button>
          </div>
        </ModalWrapper>
      </ModalStyled>
      <button
        style={{ width: '50px', height: '500px', border: '1px solid black' }}
        onClick={() => setModalState(() => !modalState)}
      >
        버튼
      </button>
    </>
  );
}
