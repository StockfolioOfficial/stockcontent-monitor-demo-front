import * as React from 'react';
import styled from 'styled-components';
import SkeletonBox from '../atoms/SkeletonBox';
import BaseLayoutProps from '../types/BaseLayoutProps';
import { MainItemStyled } from './MainLayout';

export interface MainSkeletonLayoutProps extends BaseLayoutProps {}

const MainItemSkeletonStyled = styled.div``;

const SkeletonBoxWrapper = styled(SkeletonBox)`
  margin: 8px 0;
`;

const TitleWrapper = styled.div`
  display: flex;
`;

const SkeletonBoxWrap = styled(SkeletonBox)`
  margin-right: 5px;
`;

function MainItemSkeleton() {
  return (
    <MainItemSkeletonStyled>
      <SkeletonBoxWrapper width={282} height={158} borderRadius={4} />
      <TitleWrapper>
        <SkeletonBoxWrap width={40} height={22} />
        <SkeletonBoxWrap width={237} height={22} />
      </TitleWrapper>
      <SkeletonBoxWrapper width={282} height={18} borderRadius={4} />
      <SkeletonBoxWrapper width={282} height={30} borderRadius={4} />
    </MainItemSkeletonStyled>
  );
}

export default function MainSkeletonLayout() {
  return (
    <MainItemStyled>
      <MainItemSkeleton />
      <MainItemSkeleton />
      <MainItemSkeleton />
      <MainItemSkeleton />
      <MainItemSkeleton />
      <MainItemSkeleton />
      <MainItemSkeleton />
      <MainItemSkeleton />
    </MainItemStyled>
  );
}
