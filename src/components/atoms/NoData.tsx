import styled from 'styled-components';
import BaseLayoutProps from '../types/BaseLayoutProps';
import { ConfirmContentsType } from '../../hooks/pathParams/useConfirmContentsParams';

export interface NoDataProps extends BaseLayoutProps {
  type: ConfirmContentsType;
}

const NoDataStyled = styled.section`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.purple};
  font-size: ${({ theme }) => theme.fonts.weight.bold};
`;

export function NoData({ type }: NoDataProps) {
  return <NoDataStyled>{type} 데이터가 존재하지 않습니다.</NoDataStyled>;
}
