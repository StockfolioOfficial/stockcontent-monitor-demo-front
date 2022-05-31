import VStackLayout from '../components/atoms/layouts/VStackLayout';
import HStackLayout from '../components/atoms/layouts/HStackLayout';
import MainTab from '../components/molecules/MainTab';

import styled from 'styled-components';
import MainLayout from '../components/templates/MainLayout';
import TotalPostCounter from '../components/molecules/TotalPostCounter';
import { translateTotalPostTitle } from '../utils/SwitchStringToString';
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export type ConfirmContentsType = '대기중' | '반려됨' | '승인';

const ScrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'auto',
  });
};

const MainTabSlotStyled = styled(HStackLayout)`
  justify-content: space-between;
  align-self: center;
  width: 1200px;
  margin-top: 31px;
`;

const MainTabWrapper = styled.div``;

export default function ConfirmContentsPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [postCount, setPostCount] = useState(0);

  //searchParams get
  const tab = searchParams.get('tab');
  const page = searchParams.get('page');

  //useState hook 사용
  const [type, setType] = useState<ConfirmContentsType>(
    (tab as ConfirmContentsType) ?? '대기중'
  );
  const [pageNum, setPageNum] = useState<string>((page as string) ?? '1');

  //navigate 함수
  const updateNavigate = () => {
    navigate({
      search: `?tab=${type}&page=${pageNum}`,
    });
  };

  //useEffect 렌더링
  useEffect(() => {
    ScrollTop();
    searchParams.set('tab', type);
    updateNavigate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  useEffect(() => {
    ScrollTop();
    searchParams.set('page', pageNum);
    updateNavigate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum]);

  const mainTabType: ConfirmContentsType[] = ['대기중', '반려됨', '승인'];

  const renderTypeButton = (tabType: ConfirmContentsType) => {
    return (
      <MainTab
        key={tabType}
        click={tabType === type ? `clicked` : `unClicked`}
        tabType={tabType}
        onClick={() => {
          setType(tabType);
          setPageNum('1');
        }}
      >
        {tabType}
      </MainTab>
    );
  };

  return (
    <VStackLayout>
      <MainTabSlotStyled>
        <MainTabWrapper>{mainTabType.map(renderTypeButton)}</MainTabWrapper>
        <TotalPostCounter
          title={translateTotalPostTitle(type)}
          totalPost={postCount}
          unit="개"
        />
      </MainTabSlotStyled>
      <MainLayout
        type={type}
        pageNum={pageNum}
        setPageNum={setPageNum}
        setPostCount={setPostCount}
      />
    </VStackLayout>
  );
}
