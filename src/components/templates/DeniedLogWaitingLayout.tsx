import styled from 'styled-components';
import * as React from 'react';
import DetailVideoItem from '../molecules/DetailVideoItem';
import DeniedLogSection from '../organisms/DeniedLogSection';
import TextBtn from '../atoms/TextBtn';
import { DetailDeniedLayoutProps } from '../types/CommonDataProps';

const DetailDeniedLogLayoutStyled = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0 120px 0;
`;

const DetailDeniedLogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const TextButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
`;

export default function DeniedLogWaitingLayout({
  data,
}: DetailDeniedLayoutProps) {
  const {
    sampleContent: videoSrc,
    stateLabel: stateType,
    subject: title,
    description: descript,
    uploadedAt: uploadDate,
    tags: tagArray,
    denyLogs: deniedLogs,
  } = data;

  return (
    <DetailDeniedLogLayoutStyled>
      <DetailVideoItem
        videoSrc={videoSrc}
        videoType="video/mp4"
        title={title}
        stateType={stateType}
        uploadDate={new Date(uploadDate)}
        descript={descript}
        tagArray={tagArray}
      />
      <DetailDeniedLogWrapper>
        <TextButtonWrapper>
          <TextBtn
            btnType="highBtn"
            width="175px"
            btnTheme="sky"
            fontColor="blue"
          >
            승인
          </TextBtn>
          <TextBtn
            btnType="highBtn"
            width="175px"
            btnTheme="red"
            fontColor="pink"
          >
            반려사유 작성
          </TextBtn>
        </TextButtonWrapper>
        <DeniedLogSection deniedLogs={deniedLogs} />
      </DetailDeniedLogWrapper>
    </DetailDeniedLogLayoutStyled>
  );
}
