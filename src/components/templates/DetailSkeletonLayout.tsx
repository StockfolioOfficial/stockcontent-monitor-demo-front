import styled from 'styled-components';
import * as React from 'react';
import SkeletonBox from '../atoms/SkeletonBox';
import { DetailDeniedLogLayoutStyled } from './DetailLayout';
import { DetailDeniedLogWrapper } from './DeniedLogLayout';

const VidieoStyled = styled.div``;

const SkeletonBoxWrapper = styled(SkeletonBox)`
  margin: 10px 0;
`;

export default function DetailSkeletonLayout() {
  return (
    <DetailDeniedLogLayoutStyled>
      <VidieoStyled>
        <SkeletonBoxWrapper width={800} height={450} borderRadius={4} />
        <SkeletonBoxWrapper width={29} height={22} borderRadius={4} />
        <SkeletonBoxWrapper width={800} height={26} borderRadius={4} />
        <SkeletonBoxWrapper width={800} height={16} borderRadius={4} />
        <SkeletonBoxWrapper width={800} height={80} borderRadius={4} />
        <SkeletonBoxWrapper width={300} height={30} borderRadius={4} />
      </VidieoStyled>
      <DetailDeniedLogWrapper>
        <SkeletonBoxWrapper width={360} height={600} borderRadius={4} />
      </DetailDeniedLogWrapper>
    </DetailDeniedLogLayoutStyled>
  );
}
