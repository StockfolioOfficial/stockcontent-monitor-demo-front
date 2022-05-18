import * as React from 'react';
import styled, { css } from 'styled-components';
import DetailVideoItem from '../molecules/DetailVideoItem';

const VideoStyled = styled.section``;

export default function DetailDeniedReasonLayout() {
  return (
    <VideoStyled>
      <DetailVideoItem
        videoSrc={''}
        videoType={''}
        title="야밤의 속도감 있는 고속도로 라이브"
        stateType="processing"
        uploadDate={new Date('2022-05-09 17:58:20')}
        descript="이것은 설명입니다.이것은 설명입니다.이것은 설명입니다.이것은 설명입니다.이것은 설명입니다.이것은 설명입니다.이것은 설명입니다.이것은 설명입니다.이것은 설명입니다.이것은 설명입니다.이것은 설명입니다."
        tagArray=["고속도로", "자동차", "하이웨이", "야경", "드라이브", "속도감"]
      />
    </VideoStyled>
  );
}