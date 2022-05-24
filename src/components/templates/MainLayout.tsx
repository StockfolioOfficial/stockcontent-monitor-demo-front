import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MainItem from '../molecules/MainItem';
import Pagenation from '../../components/atoms/Pagenation';
import BaseLayoutProps from '../types/BaseLayoutProps';
import { MainDataProps } from '../types/CommonDataProps';
import { ConfirmContentsType } from '../../hooks/pathParams/useConfirmContentsParams';
export interface MainItemLayoutProps extends BaseLayoutProps {
  type: ConfirmContentsType;
}

export const MainItemStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px 8px;
  width: 1200px;
  margin: auto;
  padding: 45px 0 86px 0;
`;

const PagenationWrapper = styled.section`
  display: flex;
  justify-content: center;
  padding-bottom: 120px;
`;

export default function MainLayout({ type }: MainItemLayoutProps) {
  const [mainItemList, setMainItemList] = useState<MainDataProps[]>([]);

  //mainItemList 데이터 fetch
  useEffect(() => {
    axios
      .get('http://localhost:3000/data/MainItemList.json')
      .then(res => setMainItemList(res.data))
      .catch(err => {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log('Error', err.message);
        }
        console.log(err.config);
      });
  }, []);

  return (
    <>
      <MainItemStyled>
        {mainItemList.length > 0 &&
          mainItemList.map(data => (
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
