import * as React from 'react';
import { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import arrow from '../../assets/images/Vector-1.png';
// png파일 타입 지정 해주지 않았는데 에러 발생 안함 why??

// 디자이너분께 질문사항
// 버튼 disabled 관련 이슈
// 페이지 단위 부족할 경우 이슈

export interface PagenationProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

const PagenationBtn = styled.button<PagenationProps>`
  ${({ theme }) => css`
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

  // page limit
  // 한번에 보여주는 페이지 갯수
  const pageLimit = 10;

  // page
  // 값의 변화에따라 결국엔 clickedPage에 영향을 주어 랜더링을 하게 됨으로,
  // 불필요한 추가 랜더링을 방지하기 위해서 useRef를 사용하여 변수의 상태값을 관리함.
  const page = useRef(1);

  // last page
  // 버튼의 disabled관리를 하기 위한 마지막 페이지 값
  const lastPage = Math.ceil(pageList.length / pageLimit);

  // 페이지 offset 값 (ex. 1페이지는 0, 2페이지부터는 pageLimit만큼 증가함)
  // offset부터 limit만큼 잘라서 보여주기 위한 값
  const pageOffSet = (page.current - 1) * pageLimit;

  // 현재 보여주고 있는 페이지의 상태값
  const [clickedPage, setClickedPage] = useState<number>(1);

  const goNextPage = () => {
    page.current += 1;
    setClickedPage(pageOffSet + pageLimit + 1);
  };

  const goPrevPage = () => {
    page.current -= 1;
    setClickedPage(pageOffSet);
  };

  return (
    <div style={{ display: 'flex', margin: '10px' }}>
      <PagenationBtn disabled={page.current === 1} onClick={goPrevPage}>
        <img src={arrow} alt="arrow" style={{ transform: 'scaleX(-1)' }} />
      </PagenationBtn>
      {/* pageOffset값 부터 limit만큼 잘라서 map으로 뿌려준다 */}
      {pageList.slice(pageOffSet, pageOffSet + pageLimit).map(number => {
        if (clickedPage === number.id)
          return (
            <PagenationNumber key={number.id} isActive={true}>
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
      <PagenationBtn disabled={page.current === lastPage} onClick={goNextPage}>
        <img src={arrow} alt="arrow" />
      </PagenationBtn>
    </div>
  );
}
