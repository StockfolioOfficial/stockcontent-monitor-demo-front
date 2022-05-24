import VStackLayout from '../components/atoms/layouts/VStackLayout';
import useConfirmContentsParams, {
  ConfirmContentsType,
} from '../hooks/pathParams/useConfirmContentsParams';
import HStackLayout from '../components/atoms/layouts/HStackLayout';
import MainTab from '../components/molecules/MainTab';

import styled from 'styled-components';
import MainLayout from '../components/templates/MainLayout';

const MainTabWrapper = styled.section`
  margin: 31px 0 0 100px;
`;

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
      <HStackLayout>
        <MainTabWrapper>{mainTabType.map(renderTypeButton)}</MainTabWrapper>
      </HStackLayout>
      <MainLayout type={type} />
    </VStackLayout>
  );
}
