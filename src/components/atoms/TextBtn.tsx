import * as React from 'react';
import styled, { css, DefaultTheme } from 'styled-components';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnType: 'highBtn' | 'lowBtn';
  width: string;
  btnTheme: keyof DefaultTheme['pressedShadow'] | 'white';
  fontColor: keyof DefaultTheme['colors'];
}

const Btn = styled.button<ButtonProps>`
  ${({ theme, btnType, width, btnTheme, fontColor }) => css`
    width: ${width};
    height: ${btnType === 'highBtn' ? `56px` : `36px`};
    border-radius: ${btnType === 'highBtn' ? `20px` : `12px`};
    border: none;
    background-color: ${theme.colors[btnTheme]};
    color: ${theme.colors[fontColor]};
    font-size: ${
      btnType === 'highBtn'
        ? `${theme.fonts.size.ms}`
        : `${theme.fonts.size.xxs}`
    };
    font-weight: ${theme.fonts.weight.bold};
    line-height: ${
      btnType === 'highBtn'
        ? `${theme.fonts.lineHeight.ms}`
        : `${theme.fonts.lineHeight.xs}`
    };
    text-align: center;
    cursor: pointer;
    transition: ease-in-out 0.15s;

    &:hover {
      ${
        btnTheme === 'white'
          ? `color: ${theme.colors.gray2}`
          : `box-shadow: ${theme.hoverShadow[btnTheme]}`
      }
    }
  
    &:active {
      ${
        btnTheme === 'white'
          ? `color: ${theme.colors.black}`
          : `box-shadow: ${theme.pressedShadow[btnTheme]}`
      }
  `}
`;

export default function TextBtn({ ...props }: ButtonProps): JSX.Element {
  return <Btn {...props} />;
}
