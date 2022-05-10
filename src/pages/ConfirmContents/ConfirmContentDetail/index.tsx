import { useParams } from 'react-router-dom';

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

  return <h1>Detail Page {contentId}</h1>;
}
