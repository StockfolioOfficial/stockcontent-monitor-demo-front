import * as React from 'react';
import { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import arrow from '../../assets/images/Arrow.svg';

export interface PagenationProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

export interface ArrowImgProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  isLeft?: boolean;
}

const PagenationBtn = styled.button<PagenationProps>`
  ${({ theme }) => css`
    text-align: center;
    width: 32px;
    height: 32px;
    border-radius: 100%;
    background-color: ${theme.colors.purple};

    :hover {
      box-shadow: ${theme.hoverShadow.pagenation};
    }

    :disabled {
      background-color: ${theme.colors.violet};
    }
  `}
`;

const PagenationNumber = styled.button<PagenationProps>`
  ${({ theme, isActive }) => css`
    width: 25px;
    background-color: ${theme.colors.white};
    color: ${isActive ? theme.colors.black : theme.colors.gray2};
    font-size: ${theme.fonts.size.s};
    font-weight: ${theme.fonts.weight.light};
    line-height: ${theme.fonts.lineHeight.s};

    :hover {
      background-color: ${theme.colors.gray1};
    }
  `}
`;

const ArrowImg = styled.img<ArrowImgProps>`
  display: block;
  margin: 0 auto;
  transform: ${({ isLeft }) => (isLeft ? 'scaleX(-1)' : '')};
`;

export default function Pagenation(props: PagenationProps): JSX.Element {
  const pageList = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
    {
      id: 11,
    },
    {
      id: 12,
    },
    {
      id: 13,
    },
    {
      id: 14,
    },
    {
      id: 15,
    },
    {
      id: 16,
    },
    {
      id: 17,
    },
    {
      id: 18,
    },
  ];

  const pageLimit = 10;

  const pageOffset = useRef(1);

  const lastPage = Math.ceil(pageList.length / pageLimit);

  const pageStartPoint = (pageOffset.current - 1) * pageLimit;

  const [clickedPage, setClickedPage] = useState<number>(1);

  const goNextPage = () => {
    pageOffset.current += 1;
    setClickedPage(pageStartPoint + pageLimit + 1);
  };

  const goPrevPage = () => {
    pageOffset.current -= 1;
    setClickedPage(pageStartPoint);
  };

  return (
    <div style={{ display: 'flex', margin: '10px' }}>
      <PagenationBtn disabled={pageOffset.current === 1} onClick={goPrevPage}>
        <ArrowImg src={arrow} alt="arrow" isLeft />
      </PagenationBtn>
      {pageList
        .slice(pageStartPoint, pageStartPoint + pageLimit)
        .map(number => {
          if (clickedPage === number.id)
            return (
              <PagenationNumber key={number.id} isActive>
                {number.id}
              </PagenationNumber>
            );

          return (
            <PagenationNumber
              key={number.id}
              onClick={() => setClickedPage(number.id)}
            >
              {number.id}
            </PagenationNumber>
          );
        })}
      <PagenationBtn
        disabled={pageOffset.current === lastPage}
        onClick={goNextPage}
      >
        <ArrowImg src={arrow} alt="arrow" />
      </PagenationBtn>
    </div>
  );
}
