import VStackLayout from '../../components/atoms/layouts/VStackLayout';
import useConfirmContentsParams, {
  ConfirmContentsType,
} from '../../hooks/pathParams/useConfirmContentsParams';
import HStackLayout from '../../components/atoms/layouts/HStackLayout';
import MainTab from '../../components/molecules/MainTab';

export default function ConfirmContentsPage() {
  const { type, setType } = useConfirmContentsParams();

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
      <HStackLayout>{mainTabType.map(renderTypeButton)}</HStackLayout>
      <h1>{type}</h1>
    </VStackLayout>
  );
}
