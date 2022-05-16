import VStackLayout from '../../components/atoms/layouts/VStackLayout';
import useConfirmContentsParams, {
  ConfirmContentsType,
} from '../../hooks/pathParams/useConfirmContentsParams';
import HStackLayout from '../../components/atoms/layouts/HStackLayout';
import DetailDeniedReason from '../../components/molecules/DetailDeniedReason';

export default function ConfirmContentsPage() {
  const { type, setType } = useConfirmContentsParams();

  //todo refactor
  const test: ConfirmContentsType[] = ['waiting', 'denied', 'approved'];
  const renderTypeButton = (t: ConfirmContentsType) => {
    if (t === type)
      return (
        <button>
          <strong>{t}</strong>
        </button>
      );
    return <button onClick={() => setType(t)}>{t}</button>;
  };

  return (
    <VStackLayout>
      <HStackLayout>{test.map(renderTypeButton)}</HStackLayout>
      <h1>{type}</h1>
    </VStackLayout>
  );
}
