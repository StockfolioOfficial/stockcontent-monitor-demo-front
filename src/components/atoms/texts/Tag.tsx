import styled, { css } from 'styled-components';
import * as React from 'react';
import BaseLayoutProps from '../../types/BaseLayoutProps';
export interface TagProps extends BaseLayoutProps {
  tagType: 'tag' | 'denied' | 'processing' | 'approved';
}

function handleMessage({ tagType, children }: TagProps) {
  let message: string | React.ReactNode;
  switch (tagType) {
    case 'denied':
      message = '반려';
      break;
    case 'processing':
      message = '검수중';
      break;
    case 'approved':
      message = '승인';
      break;
    case 'tag':
      message = children;
  }

  return message;
}

function styling({ tagType }: TagProps) {
  let style: ReturnType<typeof css>;
  let commonFont: ReturnType<typeof css> = css`
    padding: 2px 4px;
    border-radius: 5px;
    font-size: ${({ theme }) => theme.fonts.size.xxs};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
  `;

  switch (tagType) {
    case 'tag':
      style = css`
        padding: 4px 6px;
        border-radius: 10px;
        background-color: ${({ theme }) => theme.colors.sky};
        color: ${({ theme }) => theme.colors.blue};
        font-size: ${({ theme }) => theme.fonts.size.xs};
      `;
      break;
    case 'processing':
      style = css`
        ${commonFont}
        background-color: ${({ theme }) => theme.colors.violet};
        color: ${({ theme }) => theme.colors.purple};
      `;
      break;
    case 'denied':
      style = css`
        ${commonFont}
        background-color: ${({ theme }) => theme.colors.pink};
        color: ${({ theme }) => theme.colors.red};
      `;
      break;
    case 'approved':
      style = css`
        ${commonFont}
        background-color: ${({ theme }) => theme.colors.gray1};
        color: ${({ theme }) => theme.colors.gray3};
      `;
      break;
  }

  return style;
}

const TagStyled = styled.div`
  ${styling}
  min-width: fit-content;
  width: max-content;

  line-height: ${({ theme }) => theme.fonts.lineHeight.xs};
`;

export default function Tag(props: TagProps) {
  return <TagStyled {...props}>{handleMessage(props)}</TagStyled>;
}
