import { useParams } from 'react-router-dom';
import DetailLayout from '../components/templates/DetailLayout';

type Params = {
  contentId: string;
};

function useContentId() {
  const { contentId } = useParams<Params>();
  if (contentId === undefined) return null;

  return parseInt(contentId);
}

export default function ConfirmContentDetailPage() {
  const contentId = useContentId();

  return <DetailLayout contentId={contentId} />;
}
