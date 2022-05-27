import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import axios from 'axios';
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
          .get(`/content/8a494149-9a75-456b-b4b4-0d116f6ca55a`)
          .then(function (res) {
            setData(res.data);
            setIsSkeletonOpen(false);
          });
      } catch (err: any) {
        throw new Error(err.message);
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
    // <Navigate to="/not-found" />
    <div />
  );
}
