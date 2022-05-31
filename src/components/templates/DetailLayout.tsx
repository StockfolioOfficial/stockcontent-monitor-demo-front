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
import useStore from '../../stores/UseStores';
export interface DetailLayoutProps {
  contentId: string | undefined;
}

export const DetailDeniedLogLayoutStyled = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0 120px 0;
`;
export default function DetailLayout({ contentId }: DetailLayoutProps) {
  const { stateStore } = useStore();
  const [isSkeletonOpen, setIsSkeletonOpen] = useState(true);
  const [data, setData] = useState<DetailDataProps>();

  //대기중인 아이템을 검수중으로 변경하는 API
  const monitoringMark = async () => {
    try {
      await apiClient.put(`/content/${contentId}/monitoring`);
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  //Detail get API
  useEffect(() => {
    const getDetail = async () => {
      try {
        apiClient.get(`/content/${contentId}`).then(function (res) {
          setData(res.data);
          setIsSkeletonOpen(false);
          stateStore.setState(res.data.stateLabel);
          if (stateStore.state === 'WAIT' || stateStore.state === 'CHECK') {
            monitoringMark();
          }
        });
      } catch (err: any) {
        throw new Error(err.message);
      }
    };
    getDetail();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      monitoringMark();
    }, 800);
    if (!(stateStore.state === 'WAIT' && stateStore.state === 'CHECK')) {
      return () => {
        clearInterval(interval);
      };
    }
  }, []);

  return isSkeletonOpen ? (
    <DetailSkeletonLayout />
  ) : data ? (
    <DetailDeniedLogLayoutStyled>
      <DetailVideoItem
        videoSrc={data.sampleContent}
        videoType="video/mp4"
        title={data.subject}
        stateType={translateDetailState(stateStore.state)}
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
              contentId={data.contentId}
            />
          }
        />
        <Route
          path="/report"
          element={<DetailDeniedReasonLayout contentId={data.contentId} />}
        />
      </Routes>
    </DetailDeniedLogLayoutStyled>
  ) : (
    <Navigate to="/not-found" replace={false} />
  );
}
