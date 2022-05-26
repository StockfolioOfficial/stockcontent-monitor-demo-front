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

  const mainTabType: ConfirmContentsType[] = ['대기중', '반려됨', '승인'];

  const renderTypeButton = (t: ConfirmContentsType) => {
    return (
      <MainTab
        key={t}
        click={t === type ? `clicked` : `unClicked`}
        tabType={t}
        onClick={() => setType(t)}
      >
        {t}
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
      <MainLayout type={type} />
    </VStackLayout>
  );
}
