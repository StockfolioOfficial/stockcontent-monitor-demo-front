import * as React from 'react';
import styled, { css } from 'styled-components';
import SlotMachine from '../atoms/Slotmachine';

export interface TotalPostCounterProps {
  title: '승인된 컨텐츠' | '반려된 컨텐츠' | '대기중인 컨텐츠';
  totalPost: number;
  unit: string;
}

function Styling(title: TotalPostCounterProps['title']) {
  switch (title) {
    case '대기중인 컨텐츠':
      return 'purple';
    case '반려된 컨텐츠':
      return 'red';
    case '승인된 컨텐츠':
      return 'blue';
  }
}

const TotalPostCounterStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: max-content;
  height: 46px;
`;

const TitleWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray2};
    font-weight: ${theme.fonts.weight.normal};
    font-size: ${theme.fonts.size.s};
    line-height: ${theme.fonts.lineHeight.s};
  `}
`;

const SlotUnitWrapper = styled.div<Pick<TotalPostCounterProps, 'title'>>`
  display: flex;
  ${({ theme, title }) => css`
    color: ${theme.colors[Styling(title)]};
    font-weight: ${theme.fonts.weight.bold};
    font-size: ${theme.fonts.size.ml};
  `}
`;

export default function TotalPostCounter({
  title,
  totalPost,
  unit,
  ...rest
}: TotalPostCounterProps) {
  return (
    <TotalPostCounterStyled {...rest}>
      <TitleWrapper>{title}</TitleWrapper>
      <SlotUnitWrapper title={title}>
        <SlotMachine number={totalPost} />
        {unit}
      </SlotUnitWrapper>
    </TotalPostCounterStyled>
  );
}
