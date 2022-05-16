import * as React from 'react';
import styled, { css } from 'styled-components';
import BaseLayoutProps from '../types/BaseLayoutProps';

export interface TagProps extends BaseLayoutProps {}

const DeniedTagStyled = styled.div`
  ${({ theme }) => css`
    width: max-content;
    padding: 2px 4px;
    border-radius: 5px;
    background-color: ${theme.colors.pink};
    color: ${theme.colors.red};
    font-size: ${theme.fonts.size.xxs};
    font-weight: ${theme.fonts.weight.bold};
    line-height: ${theme.fonts.lineHeight.xs};
  `}
`;

export default function DeniedTag(props: TagProps) {
  return <DeniedTagStyled {...props} />;
}
