import * as React from 'react';
import styled, { css } from 'styled-components';
import DetailDeniedReason from '../molecules/DetailDeniedReason';
import BaseLayoutProps from '../types/BaseLayoutProps';

export interface DeniedReasonLayoutProps extends BaseLayoutProps {
  contentId: string;
}

const DetailDeniedLogWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const DeniedReasonTitle = styled.h3`
  ${({ theme }) => css`
    margin-bottom: 10px;
    font-weight: ${theme.fonts.weight.bold};
    font-size: ${theme.fonts.size.ml};
    line-height: ${theme.fonts.lineHeight.ml};
  `}
`;

export default function DetailDeniedReasonLayout({
  contentId,
  ...rest
}: DeniedReasonLayoutProps) {
  return (
    <DetailDeniedLogWrapper {...rest}>
      <DeniedReasonTitle>반려 사유를 작성합니다.</DeniedReasonTitle>
      <DetailDeniedReason contentId={contentId} />
    </DetailDeniedLogWrapper>
  );
}
