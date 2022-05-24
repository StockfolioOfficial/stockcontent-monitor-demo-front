import styled, { keyframes } from 'styled-components';
import * as React from 'react';
import BaseLayoutProps from '../types/BaseLayoutProps';

export interface SkeletonBoxProps extends BaseLayoutProps {
  width: number;
  height: number;
  borderRadius?: number;
}

const SkeletonBoxAnimation = keyframes`
  0%{
    background-color: #FAFAFA;
  }
`;

const SkeletonBoxStyled = styled.div<SkeletonBoxProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 0)}px;
  background-color: ${({ theme }) => theme.colors.gray1};
  animation: ${SkeletonBoxAnimation} infinite 1s alternate;
`;

export default function SkeletonBox(props: SkeletonBoxProps) {
  return <SkeletonBoxStyled {...props} />;
}
