import * as React from 'react';
import StackLayout from './StackLayout';
import BaseLayoutProps from '../../types/BaseLayoutProps';

export interface HStackLayoutProps extends BaseLayoutProps {}

export default function HStackLayout(props: HStackLayoutProps) {
  return <StackLayout orientation="horizontal" {...props} />;
}
