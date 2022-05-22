import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { DetailDataProps } from '../../components/types/CommonDataProps';
import DetailLayout from '../../components/templates/DetailLayout';
import NotFoundPage from '../notFound';

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
  const [data, setData] = useState<DetailDataProps>();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/mock/${contentId}.json`)
      .then(function (res) {
        setData(res.data);
      })
      .catch(function (error) {
        // if (error.response) {
        //   // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
        //   console.log(error.response.data);
        //   console.log(error.response.status);
        //   console.log(error.response.headers);
        // } else if (error.request) {
        //   // 요청이 이루어 졌으나 응답을 받지 못했습니다.
        //   // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
        //   // Node.js의 http.ClientRequest 인스턴스입니다.
        //   console.log(error.request);
        // } else {
        //   // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
        //   console.log('Error', error.message);
        // }
        // console.log(error.config);
      });
  }, [contentId]);

  return data ? <DetailLayout data={data} /> : <NotFoundPage />;
}
