import styled, { css } from 'styled-components';
import * as React from 'react';
import DetailVideoItem from '../molecules/DetailVideoItem';
import DetailDeniedLog from '../molecules/DetailDeniedLog';
import { DetailDeniedLogLayoutProps } from '../types/DetailDataTypes';

const DetailDeniedLogLayoutStyled = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0 120px 0;
`;
const DetailDeniedLogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  h1 {
    ${({ theme }) => css`
      padding-bottom: 10px;
      font-size: ${theme.fonts.size.ml};
      font-weight: ${theme.fonts.weight.bold};
      line-height: ${theme.fonts.lineHeight.ml};
    `}
  }
`;

const DetailDeniedLogWrap = styled.div`
  margin-bottom: 15px;
`;

export default function DetailDeniedLogLayout({
  deniedLog,
  ...rest
}: DetailDeniedLogLayoutProps) {
  return (
    <DetailDeniedLogLayoutStyled>
      <DetailVideoItem {...rest} />
      <DetailDeniedLogWrapper>
        <h1>반려기록</h1>
        {deniedLog.map(data => (
          <DetailDeniedLogWrap key={data.logId}>
            <DetailDeniedLog
              date={new Date(data.deniedAt)}
              tag={data.denyTags}
              reason={data.reason}
            >
              {data.reason}
            </DetailDeniedLog>
          </DetailDeniedLogWrap>
        ))}
      </DetailDeniedLogWrapper>
    </DetailDeniedLogLayoutStyled>
  );
}
