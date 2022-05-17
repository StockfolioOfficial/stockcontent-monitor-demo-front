import styled, { css, DefaultTheme } from 'styled-components';
import * as React from 'react';
import BaseLayoutProps from '../../types/BaseLayoutProps';

export interface SmallColorDateTextProps extends BaseLayoutProps {
  uploadDate: Date;
  lastDeniedDate?: Date;
  color: keyof DefaultTheme['colors'];
}

function formatDate(t: Date) {
  return `${t.getFullYear().toString()}.${(
    '0' + (t.getMonth() + 1).toString()
  ).slice(-2)}.${('0' + t.getDate().toString()).slice(-2)} ${(
    '0' + t.getHours().toString()
  ).slice(-2)}:${('0' + t.getMinutes().toString()).slice(-2)}:${(
    '0' + t.getSeconds().toString()
  ).slice(-2)}`;
}

const SmallColorDateStyled = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => css`
    font-size: ${theme.fonts.size.xs};
    font-weight: ${theme.fonts.weight.light};
    line-height: ${theme.fonts.lineHeight.xs};
  `}
`;

const UploadDateWrapper = styled.span<SmallColorDateTextProps>`
  ${({ theme, color }) => css`
    color: ${theme.colors[color]};
  `}
`;

const LastDeniedDateWrapper = styled.span`
  margin-top: 2px;
  color: ${({ theme }) => theme.colors.red};
`;

export default function SmallColorDateText(props: SmallColorDateTextProps) {
  const { uploadDate, lastDeniedDate, color, ...rest } = props;

  return (
    <SmallColorDateStyled {...rest}>
      <UploadDateWrapper {...props}>{`업로드일자: ${formatDate(
        uploadDate
      )}`}</UploadDateWrapper>
      <LastDeniedDateWrapper>
        {lastDeniedDate && `마지막 반려일자: ${formatDate(lastDeniedDate)}`}
      </LastDeniedDateWrapper>
    </SmallColorDateStyled>
  );
}
