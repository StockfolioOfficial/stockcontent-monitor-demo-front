import styled from 'styled-components';
import BaseLayoutProps from '../types/BaseLayoutProps';
import * as React from 'react';
import MainItem from '../molecules/MainItem';
import { MainDataProps } from '../types/CommonDataProps';
import Pagenation from '../../components/atoms/Pagenation';
import { ConfirmContentsType } from '../../hooks/pathParams/useConfirmContentsParams';
import { useState, useEffect } from 'react';
import axios from 'axios';

export interface MainItemLayoutProps extends BaseLayoutProps {
  type: ConfirmContentsType;
}

const MainItemStyled = styled.div`
  width: 1200px;
  display: flex;
  gap: 60px 8px;
  flex-wrap: wrap;
  margin: auto;
  padding: 45px 0 86px 0;
`;

const PagenationWrapper = styled.section`
  display: flex;
  justify-content: center;
  padding-bottom: 120px;
`;

export default function MainLayout({ type }: MainItemLayoutProps) {
  const [mainItemList, setMainItemList] = useState<MainDataProps[]>([
    {
      contentId: '',
      stateLabel: undefined,
      thumb: '',
      subject: '',
      uploadedAt: '',
      latestDeniedAt: '',
      tags: [],
    },
  ]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/data/MainItemList.json')
      .then(res => setMainItemList(res.data));
  }, []);

  return (
    <>
      <MainItemStyled>
        {mainItemList.map(data => (
          <MainItem
            key={data.contentId}
            stateType={data.stateLabel}
            imgSrc={data.thumb}
            imgAlt={data.subject}
            title={data.subject}
            uploadDate={new Date(data.uploadedAt)}
            tagArray={data.tags}
            lastDeniedDate={
              data.latestDeniedAt === undefined
                ? undefined
                : new Date(data.latestDeniedAt)
            }
          />
        ))}
      </MainItemStyled>
      <PagenationWrapper>
        <Pagenation />
      </PagenationWrapper>
    </>
  );
}
