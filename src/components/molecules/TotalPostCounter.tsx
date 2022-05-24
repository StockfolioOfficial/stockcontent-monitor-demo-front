import * as React from 'react';
import styled, { css } from 'styled-components';
import SlotMachine from '../atoms/Slotmachine';

export interface TotalPostCounterProps {
  title: string;
  totalPost: number;
  unit: string;
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

const SlotUnitWrapper = styled.div`
  display: flex;
`;

const SlotWrapper = styled(SlotMachine)`
  ${({ theme }) => css`
    color: ${theme.colors.blue};
    font-weight: ${theme.fonts.weight.bold};
    font-size: ${theme.fonts.size.ml};
  `}
`;

const UnitWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.blue};
    font-weight: ${theme.fonts.weight.bold};
    font-size: ${theme.fonts.size.ml};
    line-height: ${theme.fonts.lineHeight.xs};
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
      <SlotUnitWrapper>
        <SlotWrapper number={totalPost} />
        <UnitWrapper>{unit}</UnitWrapper>
      </SlotUnitWrapper>
    </TotalPostCounterStyled>
  );
}
