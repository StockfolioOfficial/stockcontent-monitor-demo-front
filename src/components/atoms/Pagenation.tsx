import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import arrow from '../../assets/images/Arrow.svg';

export interface PagenationProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pageNum: string;
  setPageNum: React.Dispatch<React.SetStateAction<string>>;
  totalItems: number;
}

interface PagenationBtnProp {
  isActive?: boolean;
}

interface ArrowImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  isLeft?: boolean;
}

const PagnationStyled = styled.div`
  display: flex;
  margin: 10px;
`;

const PagenationBtn = styled.button<PagenationBtnProp>`
  ${({ theme }) => css`
    text-align: center;
    width: 32px;
    height: 32px;
    border-radius: 100%;
    background-color: ${theme.colors.purple};
    :hover(:not(:disabled)) {
      box-shadow: ${theme.hoverShadow.pagenation};
    }
    :disabled {
      background-color: ${theme.colors.violet};
      cursor: default;
    }
  `}
`;

const PagnationNumberWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
`;

const PagenationNumber = styled.button<PagenationBtnProp>`
  ${({ theme, isActive }) => css`
    width: 25px;
    background-color: ${theme.colors.white};
    color: ${isActive ? theme.colors.black : theme.colors.gray2};
    font-size: ${theme.fonts.size.s};
    font-weight: ${isActive
      ? theme.fonts.weight.bold
      : theme.fonts.weight.light};
    line-height: ${theme.fonts.lineHeight.s};
    :hover {
      border-radius: 4px;
      background-color: ${theme.colors.gray1};
    }
  `}
`;

const ArrowImg = styled.img<ArrowImgProps>`
  display: block;
  margin: 0 auto;
  transform: ${({ isLeft }) => (isLeft ? 'scaleX(-1)' : 'none')};
`;

export default function Pagenation({
  pageNum,
  setPageNum,
  totalItems,
}: PagenationProps) {
  const pageLimit = 10;
  const pageOffset = useRef(1);
  const lastPageOffset = Math.ceil(
    Math.ceil(Number(totalItems) / 20) / pageLimit
  );

  const pageStartIndex = (pageOffset.current - 1) * pageLimit;
  const pageEndIndex = pageOffset.current * pageLimit;

  const goNextPage = () => {
    pageOffset.current += 1;
    setPageNum(`${pageStartIndex + pageLimit + 1}`);
  };

  const goPrevPage = () => {
    pageOffset.current -= 1;
    setPageNum(`${pageStartIndex}`);
  };

  return (
    <PagnationStyled>
      <PagenationBtn disabled={pageOffset.current === 1} onClick={goPrevPage}>
        <ArrowImg src={arrow} alt="arrow" isLeft />
      </PagenationBtn>
      <PagnationNumberWrapper>
        {Array(Math.ceil(Number(totalItems) / 20))
          .fill(1)
          .map((el, idx) => el + idx)
          .slice(pageStartIndex, pageEndIndex)
          .map(number => {
            if (Number(pageNum) === number)
              return (
                <PagenationNumber key={number} isActive>
                  {number}
                </PagenationNumber>
              );

            return (
              <PagenationNumber key={number} onClick={() => setPageNum(number)}>
                {number}
              </PagenationNumber>
            );
          })}
      </PagnationNumberWrapper>
      <PagenationBtn
        disabled={pageOffset.current === lastPageOffset}
        onClick={goNextPage}
      >
        <ArrowImg src={arrow} alt="arrow" />
      </PagenationBtn>
    </PagnationStyled>
  );
}
