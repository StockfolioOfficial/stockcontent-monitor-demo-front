import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import TextBtn from '../atoms/TextBtn';
import BaseLayoutProps from '../types/BaseLayoutProps';
import UseStore from '../../stores/UseStores';
import { observer } from 'mobx-react';
import positiveBtns from './ModalPositiveBtns';
import { useNavigate } from 'react-router-dom';

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
    | 'Approving'
    | null;
}

const selectModalTheme = (modalTitle: ModalTitleProps['modalTitle']) => {
  let title: JSX.Element;
  let colorTheme: 'red' | 'blue' | 'purple';
  let revColorTheme: 'pink' | 'sky' | 'violet';
  let btnText1: string;
  let btnText2: string | null;
  let positiveBtn: Function;
  let btnState: 'void' | 'return';
  switch (modalTitle) {
    case 'Approving':
      title = <p>승인하시겠습니까?</p>;
      colorTheme = 'blue';
      revColorTheme = 'sky';
      btnText1 = '취소';
      btnText2 = '승인';
      positiveBtn = positiveBtns.Approving;
      btnState = 'void';
      break;
    case 'CancelDeniedReason':
      title = <p>작성하시던 내용은 저장되지 않습니다.</p>;
      colorTheme = 'blue';
      revColorTheme = 'sky';
      btnText1 = '취소';
      btnText2 = '확인';
      positiveBtn = positiveBtns.CancelDeniendReason;
      btnState = 'return';
      break;
    case 'NothingReason':
      title = <p>반려 사유를 선택하거나 작성해주세요?</p>;
      colorTheme = 'purple';
      revColorTheme = 'violet';
      btnText1 = '';
      btnText2 = '확인';
      positiveBtn = positiveBtns.NothingReason;
      btnState = 'void';
      break;
    case 'SomeoneConfirming':
      title = (
        <p>
          다른 관리자가 검수중입니다. <br /> 승인 및 반려를 하실 수 없습니다.
        </p>
      );
      colorTheme = 'purple';
      revColorTheme = 'violet';
      btnText1 = '';
      btnText2 = '확인';
      positiveBtn = positiveBtns.SomeoneConfirming;
      btnState = 'return';
      break;
    case 'SubmitDeniedReason':
      title = (
        <p>
          반려 후 취소가 불가능합니다. <br /> 반려 사유 작성을 완료합니다.
        </p>
      );
      colorTheme = 'blue';
      revColorTheme = 'sky';
      btnText1 = '취소';
      btnText2 = '완료';
      positiveBtn = positiveBtns.SubmitDeniedReason;
      btnState = 'return';
      break;
    case 'WritingDeniedReason':
      title = <p>반려사유 작성할까요?</p>;
      colorTheme = 'red';
      revColorTheme = 'pink';
      btnText1 = '아니오';
      btnText2 = '네';
      positiveBtn = positiveBtns.WritingDeniedReason;
      btnState = 'return';
      break;
    case null:
      title = <p />;
      colorTheme = 'red';
      revColorTheme = 'pink';
      btnText1 = '아니오';
      btnText2 = '네';
      positiveBtn = () => null;
      btnState = 'void';
      break;
  }
  let components = {
    title,
    colorTheme,
    revColorTheme,
    btnText1,
    btnText2,
    positiveBtn,
    btnState,
  };
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
  `}
`;

const ModalTextStyeld = styled.p<ModalProps>`
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

const ModalBtnStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Modal = () => {
  const { ModalStore } = UseStore();

  const { modalTitle, isOpen } = ModalStore;

  const {
    title,
    btnText1,
    btnText2,
    colorTheme,
    revColorTheme,
    positiveBtn,
    btnState,
  } = selectModalTheme(modalTitle);

  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.cssText = `
        overflow: hidden`;
    }
    return () => {
      document.body.style.cssText = `
        overflow: auto`;
    };
  }, [isOpen]);

  return (
    <ModalStyled isModalActive={isOpen}>
      <ModalWrapper isModalActive={isOpen}>
        <ModalTextStyeld>{title}</ModalTextStyeld>
        <ModalBtnStyled>
          {btnText1 ? (
            <TextBtn
              width="115px"
              fontColor={colorTheme}
              btnType="lowBtn"
              btnTheme={revColorTheme}
              onClick={() => ModalStore.closeModal()}
            >
              {btnText1}
            </TextBtn>
          ) : (
            ''
          )}
          <TextBtn
            width={btnText1 ? '115px' : '240px'}
            fontColor={revColorTheme}
            btnType="lowBtn"
            btnTheme={colorTheme}
            onClick={() =>
              btnState === 'return' ? navigate(positiveBtn()) : positiveBtn()
            }
          >
            {btnText2}
          </TextBtn>
        </ModalBtnStyled>
      </ModalWrapper>
    </ModalStyled>
  );
};

export default observer(Modal);
