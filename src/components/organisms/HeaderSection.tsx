import styled, { css } from 'styled-components';
import BaseLayoutProps from '../types/BaseLayoutProps';
import * as React from 'react';
import logo from '../../assets/images/logo.svg';

export interface HeaderProps extends BaseLayoutProps {}

const HeaderStyled = styled.header`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.purple};
    justify-content: space-between;
    div {
      background-color: aliceblue;
      border: 1px solid ${theme.colors.red};
    }
  `}
`;

const LogoWrapper = styled.img`
  padding: 10px 0;
`;

export default function HeaderSection() {
  return (
    <HeaderStyled>
      <LogoWrapper alt="logo" src={logo} />
      <div>메인으로 바로가기</div>
    </HeaderStyled>
  );
}
