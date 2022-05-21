import styled, { css } from 'styled-components';
import BaseLayoutProps from '../types/BaseLayoutProps';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import TextBtn from '../atoms/TextBtn';

export interface HeaderProps extends BaseLayoutProps {}

const HeaderStyled = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.purple};
  `}
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
`;

const LogoWrapper = styled.img`
  padding: 10px 0;
`;

export default function HeaderSection() {
  const navigate = useNavigate();

  return (
    <HeaderStyled>
      <HeaderWrapper>
        <LogoWrapper
          alt="logo"
          src={logo}
          onClick={() => {
            navigate('/');
          }}
        />
        <TextBtn
          btnTheme="violet"
          btnType="lowBtn"
          width="116px"
          fontColor="purple"
        >
          마켓으로 바로가기
        </TextBtn>
      </HeaderWrapper>
    </HeaderStyled>
  );
}
