import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import apiClient from '../../libs/apis/apiClient';

import useStore from '../../stores/UseStores';

import { TagProps } from '../atoms/DeniedTag';
import TextBtn from '../atoms/TextBtn';
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
  const [deniedTagList, setDeniedTagList] = useState<TagProps[]>([]);
  const [isCheckedArr, setIsCheckedArr] = useState<boolean[]>(
    Array(deniedTagList.length).fill(false)
  );
  const [reasonText, setReasonText] = useState('');

  const { modalStore, deniedStore } = useStore();

  //반려사유 태그 fetch API
  useEffect(() => {
    apiClient.get(`/deny-tag`).then(res => {
      setDeniedTagList(res.data);
    });
    // .catch(err => {
    //   if (err.response) {
    //     console.log(err.response.data);
    //     console.log(err.response.status);
    //     console.log(err.response.headers);
    //   } else if (err.request) {
    //     console.log(err.request);
    //   } else {
    //     console.log('Error', err.message);
    //   }
    //   console.log(err.config);
    // }
  }, []);

  const changeCheck = (idx: number): void => {
    setIsCheckedArr(prev => {
      let newArr = [...prev];
      newArr[idx] = !newArr[idx];
      return newArr;
    });
  };

  let submitArr: number[] = [];

  isCheckedArr.map((el, idx) => {
    if (el === true) {
      submitArr.push(idx + 1);
    }
    return submitArr;
  });

  return (
    <DetailDeniendReasonStyled>
      <DetailDeniendReasonWrapper>
        <h1>반려사유</h1>
        <CheckBoxStyled>
          {deniedTagList.map((el, idx) => (
            <CheckBoxWrapper key={el.TagId} isChecked={isCheckedArr[idx]}>
              <input
                id={el.content}
                type="checkbox"
                onChange={() => changeCheck(idx)}
                checked={isCheckedArr[idx] || false}
              />
              <label htmlFor={el.content}>{el.content}</label>
            </CheckBoxWrapper>
          ))}
        </CheckBoxStyled>
        <h2>기타</h2>
        <TextAreaStyled
          placeholder="추가적인 반려사유가 있다면 작성해주세요."
          onChange={e => setReasonText(e.target.value)}
        />
      </DetailDeniendReasonWrapper>

      <BtnAreaStyled>
        <TextBtn
          width="175px"
          btnType="highBtn"
          fontColor="blue"
          btnTheme="sky"
          onClick={() => {
            modalStore.openModal('CancelDeniedReason');
          }}
        >
          취소
        </TextBtn>
        <TextBtn
          width="175px"
          btnType="highBtn"
          fontColor="sky"
          btnTheme="blue"
          onClick={() => {
            return isCheckedArr.includes(true)
              ? (deniedStore.setReason(submitArr, reasonText),
                modalStore.openModal('SubmitDeniedReason'))
              : modalStore.openModal('NothingReason');
          }}
        >
          제출
        </TextBtn>
      </BtnAreaStyled>
    </DetailDeniendReasonStyled>
  );
}
