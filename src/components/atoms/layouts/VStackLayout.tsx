import * as React from 'react';
import styled from 'styled-components';
import StackLayout from './StackLayout';
import BaseLayoutProps from '../../types/BaseLayoutProps';

export interface VStackLayoutProps extends BaseLayoutProps {}

const VStackLayoutStyled = styled(StackLayout)`
  min-height: 100vh;
`;

export default function VStackLayout(props: VStackLayoutProps) {
  return <VStackLayoutStyled orientation="vertical" {...props} />;
}
