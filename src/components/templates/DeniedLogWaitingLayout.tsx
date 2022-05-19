import styled, { css } from 'styled-components';
import * as React from 'react';
import DetailVideoItem from '../molecules/DetailVideoItem';
import DetailDeniedLog from '../molecules/DetailDeniedLog';
import TextBtn from '../atoms/TextBtn';
import { DeniedLogLayoutProps } from '../types/DetailDataTypes';

const DetailDeniedLogLayoutStyled = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0 120px 0;
`;

const DetailDeniedLogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  h1 {
    ${({ theme }) => css`
      padding-bottom: 10px;
      font-size: ${theme.fonts.size.ml};
      font-weight: ${theme.fonts.weight.bold};
      line-height: ${theme.fonts.lineHeight.ml};
    `}
  }
`;

const TextButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
`;

const DetailDeniedLogWrap = styled.div`
  margin-bottom: 15px;
`;

export default function DeniedLogWaitingLayout({ data }: DeniedLogLayoutProps) {
  const {
    contentId,
    stateLabel,
    subject,
    description,
    uploadedAt,
    tags,
    denyLogs,
  } = data;

  return (
    <DetailDeniedLogLayoutStyled>
      <DetailVideoItem
        videoSrc=""
        videoType=""
        title={subject}
        stateType={stateLabel}
        uploadDate={new Date(uploadedAt)}
        descript={description}
        tagArray={tags}
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
        <h1>반려기록</h1>
        {denyLogs.map(data => (
          <DetailDeniedLogWrap key={data.logId}>
            <DetailDeniedLog
              date={new Date(data.deniedAt)}
              tag={data.denyTags}
              reason={data.reason}
            >
              {data.reason}
            </DetailDeniedLog>
          </DetailDeniedLogWrap>
        ))}
      </DetailDeniedLogWrapper>
    </DetailDeniedLogLayoutStyled>
  );
}
