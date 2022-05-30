import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export type ConfirmContentsType = '대기중' | '반려됨' | '승인';

export default function useConfirmContentsParams() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  //searchParams get
  const tab = searchParams.get('tab');
  const page = searchParams.get('page');

  //useState hook 사용
  const [type, setType] = useState<ConfirmContentsType>(
    (tab as ConfirmContentsType) ?? '대기중'
  );
  const [pageNum, setPageNum] = useState<string>((page as string) ?? '1');

  //navigate 함수
  const updateNavigate = () => {
    navigate({
      search: searchParams.toString(),
    });
  };

  //useEffect 렌더링
  useEffect(() => {
    searchParams.set('tab', type);
    updateNavigate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  useEffect(() => {
    searchParams.set('page', pageNum);
    updateNavigate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum]);

  return {
    type,
    setType,
    pageNum,
    setPageNum,
  };
}
