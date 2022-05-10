import * as React from 'react';
import StackLayout from './StackLayout';
import BaseLayoutProps from '../../types/BaseLayoutProps';

export interface VStackLayoutProps extends BaseLayoutProps {}

export default function VStackLayout(props: VStackLayoutProps) {
  return <StackLayout orientation="vertical" {...props} />;
}
