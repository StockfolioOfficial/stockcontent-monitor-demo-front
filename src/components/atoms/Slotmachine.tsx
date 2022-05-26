import styled, { keyframes } from 'styled-components';
import BaseLayoutProps from '../types/BaseLayoutProps';

export interface SlotMachineProps extends BaseLayoutProps {
  number: number;
}

export interface AnimationProps {
  speed: number;
}

function useNumToString(number: number) {
  if (number === undefined) return '0';

  return number.toString();
}

function calculateNumberDown(number: number, calculateNumber: number) {
  if (number <= Math.abs(calculateNumber)) {
    if (number + calculateNumber < 0) {
      return number + calculateNumber + 10;
    }
    return number + calculateNumber;
  }
  return number + calculateNumber;
}

function calculateNumberUp(number: number, calculateNumber: number) {
  if (number >= Math.abs(calculateNumber)) {
    if (number + calculateNumber >= 10) {
      return number + calculateNumber - 10;
    }
    return number + calculateNumber;
  }
  return Math.abs(number + calculateNumber);
}

const slotAnimate = keyframes`
0%{
  transform: translateY(-80px);
}
100%{
  transform: translateY(80px);
}
`;

const SlotMachineStyled = styled.div`
  display: flex;
  height: 20px;
  overflow: hidden;
`;

const SlotMachineWrapper = styled.ul<AnimationProps>`
  display: flex;
  flex-direction: column;
  width: 12px;
  align-items: center;
  justify-content: center;
  transform: translateY(80px);
  animation-name: ${slotAnimate};
  animation-duration: ${({ speed }) => speed / 1.5}s;
`;

export default function SlotMachine({ number, ...rest }: SlotMachineProps) {
  let numArray = useNumToString(number)
    .split('')
    .map(el => parseInt(el));

  return (
    <SlotMachineStyled {...rest}>
      {numArray.map((num, index) => (
        <SlotMachineWrapper key={`${Math.random()}`} speed={index + 1}>
          <li>{num}</li>
          <li>{calculateNumberDown(num, -1)}</li>
          <li>{calculateNumberDown(num, -2)}</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>{calculateNumberUp(num, 2)}</li>
          <li>{calculateNumberUp(num, 1)}</li>
        </SlotMachineWrapper>
      ))}
    </SlotMachineStyled>
  );
}
