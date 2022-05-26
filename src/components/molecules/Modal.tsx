import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import TextBtn from '../atoms/TextBtn';
import BaseLayoutProps from '../types/BaseLayoutProps';
import useStore from '../../stores/UseStores';
import { observer } from 'mobx-react';

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
  switch (modalTitle) {
    case 'Approving':
      title = <p>승인하시겠습니까?</p>;
      colorTheme = 'blue';
      revColorTheme = 'sky';
      btnText1 = '취소';
      btnText2 = '승인';
      break;
    case 'CancelDeniedReason':
      title = <p>작성하시던 내용은 저장되지 않습니다.</p>;
      colorTheme = 'blue';
      revColorTheme = 'sky';
      btnText1 = '취소';
      btnText2 = '확인';
      break;
    case 'NothingReason':
      title = <p>반려 사유를 선택하거나 작성해주세요.</p>;
      colorTheme = 'purple';
      revColorTheme = 'violet';
      btnText1 = '';
      btnText2 = '확인';
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
      break;
    case 'WritingDeniedReason':
      title = <p>반려사유 작성할까요?</p>;
      colorTheme = 'red';
      revColorTheme = 'pink';
      btnText1 = '아니오';
      btnText2 = '네';
      break;
    case null:
      title = <p />;
      colorTheme = 'red';
      revColorTheme = 'pink';
      btnText1 = '아니오';
      btnText2 = '네';
      break;
  }
  let components = {
    title,
    colorTheme,
    revColorTheme,
    btnText1,
    btnText2,
  };
  return components;
};

const ModalStyled = styled.div<ModalProps>`
  ${({ isModalActive }) => css`
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

const ModalTextStyeld = styled.div<ModalProps>`
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
  const { modalStore } = useStore();

  const { modalTitle, isOpen } = modalStore;

  const { title, btnText1, btnText2, colorTheme, revColorTheme } =
    selectModalTheme(modalTitle);

  const positiveBtn = async (modalTitle: ModalTitleProps['modalTitle']) => {
    if ((modalTitle = 'SubmitDeniedReason')) {
      // 추가적인 로직 구현
    }
    modalStore.closeModal();
    return true;
  };

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
              onClick={() => modalStore.closeModal()}
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
            onClick={() => positiveBtn(modalTitle)}
          >
            {btnText2}
          </TextBtn>
        </ModalBtnStyled>
      </ModalWrapper>
    </ModalStyled>
  );
};

export default observer(Modal);
