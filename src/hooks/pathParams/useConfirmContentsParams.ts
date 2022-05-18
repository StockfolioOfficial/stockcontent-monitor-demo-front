import { useNavigate, useSearchParams } from 'react-router-dom';

const ConfirmContentsTypeQueryKey = 't';

export type ConfirmContentsType = '대기중' | '반려됨' | '승인';

export default function useConfirmContentsParams() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const updateNavigate = () => {
    navigate({
      search: searchParams.toString(),
    });
  };

  // type
  const type =
    (searchParams.get(ConfirmContentsTypeQueryKey) as ConfirmContentsType) ??
    '대기중';
  const setType = (t: ConfirmContentsType) => {
    searchParams.set(ConfirmContentsTypeQueryKey, t);
    updateNavigate();
  };

  //todo pagination
  // const page or limit
  // const setPage or setLimit
  return {
    type,
    setType,
    updateNavigate,
  };
}
