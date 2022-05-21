import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import DetailVideoItem from '../molecules/DetailVideoItem';
import {
  translateMainState,
  translateDetailState,
} from '../../util/translatedata/translateStateLabel';
import { DetailDeniedLayoutProps } from '../types/CommonLayoutProps';
import DeniedLogLayout from './DeniedLogLayout';
import DetailDeniedReasonLayout from './DeniedReasonLayout';

const DetailDeniedLogLayoutStyled = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0 120px 0;
`;

export default function DetailLayout({ data }: DetailDeniedLayoutProps) {
  const { pathname } = useLocation();

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
      {pathname === '/confirm-contents/1' ? (
        <DeniedLogLayout
          state={translateMainState(data.stateLabel)}
          data={data.denyLogs}
        />
      ) : (
        <DetailDeniedReasonLayout />
      )}
    </DetailDeniedLogLayoutStyled>
  );
}
