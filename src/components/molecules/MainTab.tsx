import styled, { css } from 'styled-components';
import { ConfirmContentsType } from '../../pages/Main';
export interface TabButtonProps
  extends React.BaseHTMLAttributes<HTMLButtonElement> {
  tabType: ConfirmContentsType;
  click: 'clicked' | 'unClicked';
}

function tabStyle({ tabType }: TabButtonProps) {
  let style: ReturnType<typeof css>;
  switch (tabType) {
    case '대기중':
      style = css`
        background-color: ${({ theme }) => theme.colors.violet};
        color: ${({ theme }) => theme.colors.purple};
      `;
      break;
    case '반려됨':
      style = css`
        background-color: ${({ theme }) => theme.colors.pink};
        color: ${({ theme }) => theme.colors.red};
      `;
      break;
    case '승인':
      style = css`
        background-color: ${({ theme }) => theme.colors.sky};
        color: ${({ theme }) => theme.colors.blue};
      `;
      break;
  }
  return style;
}

const TabBtn = styled.button<TabButtonProps>`
  ${({ click }) => click === 'clicked' && tabStyle}

  ${({ theme, click }) => css`
    margin-right: 15px;
    padding: 7px 11px;
    border-radius: 10px;
    font-size: ${theme.fonts.size.ml};
    font-weight: ${click === 'clicked' && `${theme.fonts.weight.bold}`};
    line-height: ${theme.fonts.lineHeight.ml};
  `}

  &:hover {
    ${tabStyle};
    transition: ease-in-out 0.15s;
  }
`;

export default function MainTab({ ...props }: TabButtonProps): JSX.Element {
  return <TabBtn {...props} />;
}
