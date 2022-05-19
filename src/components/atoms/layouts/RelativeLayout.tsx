/* eslint-disable react/destructuring-assignment */
import { cloneElement, CSSProperties, ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import BaseLayoutProps from '../../types/BaseLayoutProps';
import * as React from 'react';

export interface RelativeLayoutProps extends BaseLayoutProps {}

function childStyling(
  baseStyle: CSSProperties,
  pt?: string | number,
  pl?: string | number,
  pr?: string | number,
  pb?: string | number
) {
  const newStyle: CSSProperties = { ...baseStyle };
  if (pt !== undefined) newStyle.top = pt;
  if (pl !== undefined) newStyle.left = pl;
  if (pr !== undefined) newStyle.right = pr;
  if (pb !== undefined) newStyle.bottom = pb;
  return {
    ...newStyle,
  };
}

function mapChild(value: ReactNode, index: number): ReactNode {
  if (typeof value === 'object') {
    return convertRelativeChild(value as ReactElement, index);
  }

  return value;
}

function convertRelativeChild(value: ReactElement, defaultKey?: React.Key) {
  const { style, pt, pb, pl, pr } = value.props;
  const wrapProps = {
    ...value.props,
  };

  wrapProps.key = value.key ?? defaultKey;
  wrapProps.style = childStyling(style, pt, pl, pr, pb);
  return cloneElement(value, wrapProps);
}

const Styled = styled.div`
  position: relative;
  // overflow: hidden; // todo 어떻게 속성으로 뺄까
  > :not(style) {
    position: absolute;
  }
`;

export default function RelativeLayout(props: RelativeLayoutProps) {
  const node = props.children;
  const wrapProps = {
    ...props,
  };

  if (Array.isArray(node)) {
    wrapProps.children = node.map(mapChild);
  } else if (typeof node === 'object') {
    wrapProps.children = convertRelativeChild(node as ReactElement);
  }

  return <Styled {...wrapProps} />;
}

declare module 'react' {
  interface HTMLAttributes<T> extends React.DOMAttributes<T> {
    pt?: string | number;
    pl?: string | number;
    pr?: string | number;
    pb?: string | number;
  }
}
