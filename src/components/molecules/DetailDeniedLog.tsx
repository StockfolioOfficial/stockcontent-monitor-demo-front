import * as React from 'react';
import styled, { css } from 'styled-components';
import DeniedTag from '../atoms/DeniedTag';
import BaseLayoutProps from '../types/BaseLayoutProps';

export interface DeniedProps extends BaseLayoutProps {
  date: Date;
  tag: string[];
  reason: string;
}
//Date formatting 함수
function formatDate(t: Date) {
  return `${t.getFullYear().toString()}.${(
    '0' + (t.getMonth() + 1).toString()
  ).slice(-2)}.${('0' + t.getDate().toString()).slice(-2)} ${(
    '0' + t.getHours().toString()
  ).slice(-2)}:${('0' + t.getMinutes().toString()).slice(-2)}:${(
    '0' + t.getSeconds().toString()
  ).slice(-2)}`;
}

const DeniedLogStyled = styled.div`
  width: 360px;
  padding: 20px 25px;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const DeniedDate = styled.p`
  ${({ theme }) => css`
    margin-bottom: 15px;
    color: ${theme.colors.black};
    font-weight: ${theme.fonts.weight.bold};
    font-size: ${theme.fonts.size.m};
    line-height: ${theme.fonts.lineHeight.m};
  `}
`;

const DeniedTagWrapper = styled.div`
  margin: 10px 0;
`;

const DeniedReasonWrapper = styled.div`
  margin-top: 15px;
`;

const DeniedEtc = styled.div`
  ${({ theme }) => css`
    margin-bottom: 5px;
    color: ${theme.colors.gray2};
    font-size: ${theme.fonts.size.xxs};
    line-height: ${theme.fonts.lineHeight.xs};
  `}
`;

const DeniedReason = styled.p`
  ${({ theme }) => css`
    width: 310px;
    color: ${theme.colors.gray3};
    font-size: ${theme.fonts.size.ms};
    line-height: ${theme.fonts.lineHeight.msL};
  `}
`;

export default function DetailDeniedLog({
  date,
  tag,
  reason,
  ...props
}: DeniedProps): JSX.Element {
  return (
    <DeniedLogStyled>
      <DeniedDate>{formatDate(date)}</DeniedDate>
      {tag.map(tagData => (
        <DeniedTagWrapper key={tagData}>
          <DeniedTag>{tagData}</DeniedTag>
        </DeniedTagWrapper>
      ))}
      <DeniedReasonWrapper>
        <DeniedEtc>기타</DeniedEtc>
        <DeniedReason {...props}>
          {reason === undefined ? `없음` : props.children}
        </DeniedReason>
      </DeniedReasonWrapper>
    </DeniedLogStyled>
  );
}
