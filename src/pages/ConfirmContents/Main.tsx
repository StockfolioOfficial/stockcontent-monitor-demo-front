import VStackLayout from '../../components/atoms/layouts/VStackLayout';
import useConfirmContentsParams, {
  ConfirmContentsType,
} from '../../hooks/pathParams/useConfirmContentsParams';
import HStackLayout from '../../components/atoms/layouts/HStackLayout';
import MainTab from '../../components/molecules/MainTab';

import styled from 'styled-components';
import MainLayout from '../../components/templates/MainLayout';
import { useNavigate } from 'react-router-dom';

const MainTabWrapper = styled.section`
  margin: 31px 0 0 100px;
`;

export default function ConfirmContentsPage() {
  const { type, setType } = useConfirmContentsParams();
  const navigate = useNavigate();

  //todo refactor
  const mainTabType: ConfirmContentsType[] = ['대기중', '반려됨', '승인'];

  const renderTypeButton = (t: ConfirmContentsType) => {
    return (
      <MainTab
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
      <button
        onClick={() => {
          navigate('1');
        }}
      >
        1번 게시물(검수 대기중)
      </button>
      <button
        onClick={() => {
          navigate('2');
        }}
      >
        1번 게시물(없는 게시물)
      </button>
      <button
        onClick={() => {
          navigate('3');
        }}
      >
        1번 게시물(다른 사람이 검수중)
      </button>
    </VStackLayout>
  );
}
