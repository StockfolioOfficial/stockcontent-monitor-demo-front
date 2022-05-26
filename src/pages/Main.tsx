import VStackLayout from '../components/atoms/layouts/VStackLayout';
import useConfirmContentsParams, {
  ConfirmContentsType,
} from '../hooks/pathParams/useConfirmContentsParams';
import HStackLayout from '../components/atoms/layouts/HStackLayout';
import MainTab from '../components/molecules/MainTab';

import styled from 'styled-components';
import MainLayout from '../components/templates/MainLayout';
import TotalPostCounter from '../components/molecules/TotalPostCounter';
import { translateTotalPostTitle } from '../utils/SwitchStringToString';

const MainTabSlotStyled = styled(HStackLayout)`
  justify-content: space-between;
  align-self: center;
  width: 1200px;
  margin-top: 31px;
`;

const MainTabWrapper = styled.div``;

export default function ConfirmContentsPage() {
  const { type, setType } = useConfirmContentsParams();
  const { pageNum, setPageNum } = useConfirmContentsParams();

  const mainTabType: ConfirmContentsType[] = ['대기중', '반려됨', '승인'];

  const renderTypeButton = (tabType: ConfirmContentsType) => {
    return (
      <MainTab
        key={tabType}
        click={tabType === type ? `clicked` : `unClicked`}
        tabType={tabType}
        onClick={() => {
          setType(tabType);
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
          totalPost={777}
          unit="개"
        />
      </MainTabSlotStyled>
      <MainLayout type={type} pageNum={pageNum} setPageNum={setPageNum} />
    </VStackLayout>
  );
}
