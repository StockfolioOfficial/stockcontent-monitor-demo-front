import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import styled from 'styled-components';
import {
  translateMainState,
  translateDetailState,
} from '../../utils/SwitchStringToString';
import DetailVideoItem from '../molecules/DetailVideoItem';
import DeniedLogLayout from './DeniedLogLayout';
import DetailDeniedReasonLayout from './DeniedReasonLayout';
import DetailSkeletonLayout from './DetailSkeletonLayout';
import { DetailDataProps } from '../types/CommonDataProps';
import apiClient from '../../libs/apis/apiClient';

export interface DetailLayoutProps {
  contentId: number | null;
}

export const DetailDeniedLogLayoutStyled = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0 120px 0;
`;
export default function DetailLayout({ contentId }: DetailLayoutProps) {
  const [isSkeletonOpen, setIsSkeletonOpen] = useState(true);
  const [data, setData] = useState<DetailDataProps>();

  useEffect(() => {
    const getDetail = async () => {
      try {
        apiClient
          .get(`/content/6498cc85-529d-46d3-913e-6b32aed0e1c8`)
          .then(function (res) {
            setData(res.data);
            setIsSkeletonOpen(false);
          });
      } catch (err: any) {
        throw new Error(err.message);
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
      }
    };
    getDetail();
  }, [contentId]);

  return isSkeletonOpen ? (
    <DetailSkeletonLayout />
  ) : data ? (
    <DetailDeniedLogLayoutStyled>
      <DetailVideoItem
        videoSrc={data.sampleContent}
        videoType="video/mp4"
        title={data.subject}
        stateType={translateDetailState(data.stateLabel)}
        uploadDate={new Date(data.uploadedAt)}
        descript={data.description}
        tagArray={data.tags}
      />
      <Routes>
        <Route
          index
          element={
            <DeniedLogLayout
              state={translateMainState(data.stateLabel)}
              data={data.denyLogs}
            />
          }
        />
        <Route path="/report" element={<DetailDeniedReasonLayout />} />
      </Routes>
    </DetailDeniedLogLayoutStyled>
  ) : (
    <Navigate to="/not-found" replace={false} />
  );
}
