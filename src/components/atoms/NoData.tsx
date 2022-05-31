import styled from 'styled-components';
import BaseLayoutProps from '../types/BaseLayoutProps';
import { ConfirmContentsType } from '../../pages/Main';

export interface NoDataProps extends BaseLayoutProps {
  type: ConfirmContentsType;
}

const NoDataStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10%;
  flex-grow: 1;
  color: ${({ theme }) => theme.colors.purple};
  font-size: ${({ theme }) => theme.fonts.weight.bold};
`;

export function NoData({ type }: NoDataProps) {
  return <NoDataStyled>{type} 데이터가 존재하지 않습니다.</NoDataStyled>;
}
