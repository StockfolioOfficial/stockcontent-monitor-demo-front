import * as React from 'react';
import styled, { css } from 'styled-components';
import DetailDeniedReason from '../molecules/DetailDeniedReason';
import DetailVideoItem from '../molecules/DetailVideoItem';
import { DetailDeniedLayoutProps } from '../types/CommonDataProps';

const DetailStyled = styled.section`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 40px 0 120px 0;
`;

const DeniedReasonWrapper = styled.section``;

const DeniedReasonTitle = styled.p`
  ${({ theme }) => css`
    margin-bottom: 10px;
    font-weight: ${theme.fonts.weight.bold};
    font-size: ${theme.fonts.size.ml};
    line-height: ${theme.fonts.lineHeight.ml};
  `}
`;

export default function DetailDeniedReasonLayout({
  data,
}: DetailDeniedLayoutProps) {
  const {
    sampleContent: videoSrc,
    subject: title,
    stateLabel: stateType,
    uploadedAt: uploadDate,
    description: descript,
    tags: tagArray,
  } = data;

  return (
    <DetailStyled>
      <DetailVideoItem
        videoSrc={videoSrc}
        videoType="video/mp4"
        title={title}
        stateType={stateType}
        uploadDate={new Date(uploadDate)}
        descript={descript}
        tagArray={tagArray}
      />
      <DeniedReasonWrapper>
        <DeniedReasonTitle>반려 사유를 작성합니다.</DeniedReasonTitle>
        <DetailDeniedReason />
      </DeniedReasonWrapper>
    </DetailStyled>
  );
}
