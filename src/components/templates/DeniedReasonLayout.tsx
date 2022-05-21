import * as React from 'react';
import styled, { css } from 'styled-components';
import DetailDeniedReason from '../molecules/DetailDeniedReason';

const DetailDeniedLogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const DeniedReasonTitle = styled.p`
  ${({ theme }) => css`
    margin-bottom: 10px;
    font-weight: ${theme.fonts.weight.bold};
    font-size: ${theme.fonts.size.ml};
    line-height: ${theme.fonts.lineHeight.ml};
  `}
`;

export default function DetailDeniedReasonLayout() {
  return (
    <DetailDeniedLogWrapper>
      <DeniedReasonTitle>반려 사유를 작성합니다.</DeniedReasonTitle>
      <DetailDeniedReason />
    </DetailDeniedLogWrapper>
  );
}
