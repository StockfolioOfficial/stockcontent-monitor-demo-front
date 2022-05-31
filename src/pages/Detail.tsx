import { useParams } from 'react-router-dom';
import DetailLayout from '../components/templates/DetailLayout';

type Params = {
  contentId: string;
};

function useContentId() {
  const { contentId } = useParams<Params>();
  return contentId;
}

export default function ConfirmContentDetailPage() {
  const contentId = useContentId();

  return <DetailLayout contentId={contentId} />;
}
