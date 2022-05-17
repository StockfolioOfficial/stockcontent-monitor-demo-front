import * as React from 'react';
import styled, { css, DefaultTheme } from 'styled-components';
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnType: 'highBtn' | 'lowBtn';
  width: string;
  btnTheme: keyof DefaultTheme['pressedShadow'];
  fontColor: keyof DefaultTheme['colors'];
}

const Btn = styled.button<ButtonProps>`
  ${({ theme, width, btnTheme }) => css`
    width: ${width};
    border: none;
    font-weight: ${theme.fonts.weight.bold};
    text-align: center;
    cursor: pointer;

    &:hover {
      box-shadow: ${theme.hoverShadow[btnTheme]};
    }

    &:active {
      box-shadow: ${theme.pressedShadow[btnTheme]};
    }
  `}
`;

const HighBtn = styled(Btn)`
  ${({ theme, btnTheme, fontColor }) => css`
    height: 56px;
    border-radius: 20px;
    background-color: ${theme.colors[btnTheme]};
    color: ${theme.colors[fontColor]};
    font-size: ${theme.fonts.size.ms};
    line-height: ${theme.fonts.lineHeight.ms};
  `}
`;

const LowBtn = styled(Btn)`
  ${({ theme, btnTheme, fontColor }) => css`
    height: 36px;
    border-radius: 12px;
    background-color: ${theme.colors[btnTheme]};
    color: ${theme.colors[fontColor]};
    font-size: ${theme.fonts.size.xxs};
    line-height: ${theme.fonts.lineHeight.xs};
  `}
`;

export default function TextBtn({
  btnType,
  ...props
}: ButtonProps): JSX.Element {
  return btnType === 'highBtn' ? (
    <HighBtn btnType={btnType} {...props} />
  ) : (
    <LowBtn btnType={btnType} {...props} />
  );
}
