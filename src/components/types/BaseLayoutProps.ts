import BaseProps from './BaseProps';
import * as React from 'react';

export default interface BaseLayoutProps extends BaseProps {
  children?: React.ReactNode;
}
