import * as React from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import TextBtn from '../atoms/textBtn';
import BaseLayoutProps from '../types/BaseLayoutProps';

export interface CheckBoxProps extends BaseLayoutProps {
  isChecked?: boolean;
}
const DetailDeniendReasonStyled = styled.div`
  width: 360px;
`;

const DetailDeniendReasonWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 20px 25px;
    border: 1px solid ${theme.colors.gray1};
    border-radius: 10px;

    h1 {
      font-size: ${theme.fonts.size.m};
      line-height: ${theme.fonts.lineHeight.m};
      font-weight: ${theme.fonts.weight.bold};
    }

    h2 {
      color: ${theme.colors.gray2};
      font-size: ${theme.fonts.size.xxs};
      line-height: ${theme.fonts.lineHeight.xs};
    }
  `}
`;

const CheckBoxStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0 15px -5px;
`;

const CheckBoxWrapper = styled.div<CheckBoxProps>`
  ${({ theme, isChecked }) => css`
    height: 22px;
    margin: 7.5px 5px;
    padding: 2px 4px;
    border-radius: 5px;
    background: ${isChecked ? theme.colors.pink : theme.colors.gray1};

    input[type='checkbox'] {
      display: none;
    }

    input[type='checkbox'] + label {
      margin: 0;
      color: ${theme.colors.gray3};
      font-size: ${theme.fonts.size.xxs};
      line-height: ${theme.fonts.lineHeight.xs};
      font-weight: ${theme.fonts.weight.bold};
      cursor: pointer;
    }

    input[type='checkbox']:checked + label {
      background-color: ${theme.colors.pink};
      color: ${theme.colors.red};
    }
  `}
`;

const TextAreaStyled = styled.textarea`
  ${({ theme }) => css`
    width: 100%;
    height: 145px;
    margin-top: 5px;
    padding: 10px;
    border: none;
    border-radius: 10px;

    background-color: ${theme.colors.gray0};

    ::placeholder {
      font-family: 'Pretendard';
      font-size: ${theme.fonts.size.ms};
      color: ${theme.colors.gray2};
    }
  `}
`;

const BtnAreaStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

export default function DetailDeniedReason(props: CheckBoxProps): JSX.Element {
  const reasons = [
    {
      id: 1,
      reason: '흔들린영상',
    },
    {
      id: 2,
      reason: '타기업 로고 노출',
    },
    {
      id: 3,
      reason: '과도한 필터를 씌운 영상',
    },
    {
      id: 4,
      reason: '성인물 등급 제한',
    },
    {
      id: 5,
      reason: '적절하지 않은 태그',
    },
    {
      id: 6,
      reason: '비속어가 포함됨',
    },
    {
      id: 7,
      reason: '도용된 영상',
    },
  ];

  const [isCheckedArr, setIsCheckedArr] = useState(
    Array(reasons.length).fill(false)
  );

  const changeCheck = (idx: number): void => {
    setIsCheckedArr(prev => {
      const newArr = [...prev];
      newArr[idx] = !newArr[idx];
      return newArr;
    });
  };

  return (
    <DetailDeniendReasonStyled>
      <DetailDeniendReasonWrapper>
        <h1>반려사유</h1>
        <CheckBoxStyled>
          {reasons.map((el, idx) => (
            <CheckBoxWrapper key={el.id} isChecked={isCheckedArr[idx]}>
              <input
                id={el.reason}
                type="checkbox"
                onChange={() => changeCheck(idx)}
                checked={isCheckedArr[idx]}
              />
              <label htmlFor={el.reason}>{el.reason}</label>
            </CheckBoxWrapper>
          ))}
        </CheckBoxStyled>
        <h2>기타</h2>
        <TextAreaStyled placeholder="추가적인 반려사유가 있다면 작성해주세요." />
      </DetailDeniendReasonWrapper>
      <BtnAreaStyled>
        <TextBtn
          width="175px"
          btnType="highBtn"
          fontColor="blue"
          btnTheme="sky"
        >
          취소
        </TextBtn>
        <TextBtn
          width="175px"
          btnType="highBtn"
          fontColor="sky"
          btnTheme="blue"
        >
          제출
        </TextBtn>
      </BtnAreaStyled>
    </DetailDeniendReasonStyled>
  );
}
