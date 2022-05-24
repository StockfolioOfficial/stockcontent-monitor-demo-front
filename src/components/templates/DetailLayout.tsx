import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import DetailVideoItem from '../molecules/DetailVideoItem';
import {
  translateMainState,
  translateDetailState,
} from '../../utils/translateStateLabel';
import { DetailDeniedLayoutProps } from '../types/CommonLayoutProps';
import DeniedLogLayout from './DeniedLogLayout';
import DetailDeniedReasonLayout from './DeniedReasonLayout';

const DetailDeniedLogLayoutStyled = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0 120px 0;
`;

export default function DetailLayout({ data }: DetailDeniedLayoutProps) {
  return (
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
  );
}
