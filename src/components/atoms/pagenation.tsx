import * as React from 'react';
import { useState, useRef } from 'react';
import styled, { css } from 'styled-components';

export interface PagenationProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const PagenationBtn = styled.button<PagenationProps>`
  width: 32px;
  height: 32px;
  border: 0; /* globalStyle로 (reset이나 normalize에 있을 듯) */
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.purple};

  :hover {
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    cursor: pointer; /* globalStyle로 (reset이나 normalize에 있을 듯) */
  }

  :disabled {
    background-color: ${({ theme }) => theme.colors.violet};
  }
`;

const PagenationNumber = styled.button<PagenationProps>`
  ${({ theme }) => css`
    width: 25px;
    border: none;
    background-color: ${theme.colors.white};
    color: ${theme.colors.gray2};
    font-size: ${theme.fonts.size.s};
    font-weight: ${theme.fonts.weight.light};
    line-height: ${theme.fonts.lineHeight.s};

    :hover {
      background-color: ${theme.colors.gray1};
      cursor: pointer; /* globalStyle로 (reset이나 normalize에 있을 듯) */
    }
  `}
`;

export default function Pagenation(props: PagenationProps): JSX.Element {
  const pageLimit = 0;
  const pageOffsetLength = 0;
  const [pageNumber, setPageNumber] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);

  const offset = useRef(1);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const goNextPage = (): void => {
    offset.current += 1;
    setPageNumber(() => pageNumber.map(number => number + 10));
    setCurrentPage(pageNumber[0] + 10);
  };

  const goPrevPage = (): void => {
    offset.current -= 1;
    setPageNumber(() => pageNumber.map(number => number - 10));
    setCurrentPage(pageNumber[pageNumber.length - 1] - 10);
  };

  return (
    <div style={{ display: 'flex', margin: '10px' }}>
      <PagenationBtn onClick={goPrevPage} disabled={offset.current === 1} />
      {pageNumber.map(number => {
        if (currentPage === number)
          return (
            <PagenationNumber
              key={number}
              {...props}
              style={{ color: 'black' }}
            >
              {number}
            </PagenationNumber>
          );

        return (
          <PagenationNumber
            onClick={() => {
              console.log('number 클릭');
              setCurrentPage(number);
            }}
            key={number}
          >
            {number}
          </PagenationNumber>
        );
      })}
      <PagenationBtn onClick={goNextPage} disabled={offset.current === 3} />
    </div>
  );
}
