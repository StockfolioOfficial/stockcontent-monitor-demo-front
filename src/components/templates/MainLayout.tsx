import { useState, useEffect } from 'react';
import styled from 'styled-components';
import MainItem from '../molecules/MainItem';
import Pagenation from '../../components/atoms/Pagenation';
import BaseLayoutProps from '../types/BaseLayoutProps';
import { MainDataProps } from '../types/CommonDataProps';
import { ConfirmContentsType } from '../../pages/Main';
import { translateMainState } from '../../utils/SwitchStringToString';
import { translateMainTabName } from '../../utils/SwitchStringToString';
import { NoData } from '../atoms/NoData';
import MainSkeletonLayout from './MainSkeletonLayout';
import apiClient from '../../libs/apis/apiClient';
export interface MainItemLayoutProps extends BaseLayoutProps {
  type: ConfirmContentsType;
  pageNum: string;
  setPageNum: React.Dispatch<React.SetStateAction<string>>;
  setPostCount: React.Dispatch<React.SetStateAction<number>>;
}

export const MainItemListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px 8px;
  width: 1200px;
  margin: 0 auto;
  padding: 45px 0 86px 0;
`;

const PagenationWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 120px;
`;

export default function MainLayout({
  type,
  pageNum,
  setPageNum,
  setPostCount,
  ...rest
}: MainItemLayoutProps) {
  const [isSkeletonOpen, setIsSkeletonOpen] = useState(true);
  const [mainItemList, setMainItemList] = useState<MainDataProps>({
    items: [],
    totalItems: 0,
  });

  //mainItemList API fetch 부분
  const itemLimit = 20;

  useEffect(() => {
    const mainItemFetch = async () => {
      try {
        const res = await apiClient.get<MainDataProps>(
          `/content/?lim=${itemLimit}&state=${translateMainTabName(
            type
          )}&start=${(Number(pageNum) - 1) * itemLimit}`
        );

        if (!res.data) throw Error('ERROR: NO DATA');

        setMainItemList(res.data);
        setPostCount(res.data.totalItems);
        setIsSkeletonOpen(false);
      } catch (err: any) {
        throw new Error(err.message);
      }
    };
    mainItemFetch();
  }, [type, pageNum]);

  return isSkeletonOpen ? (
    <MainSkeletonLayout />
  ) : mainItemList.items.length === 0 ? (
    <NoData type={type} />
  ) : (
    <>
      <MainItemListWrapper>
        {mainItemList.items.map(data => (
          <MainItem
            key={data.contentId}
            id={data.contentId}
            stateType={translateMainState(data.stateLabel)}
            imgSrc={data.thumb}
            imgAlt={data.subject}
            title={data.subject}
            uploadDate={new Date(data.uploadedAt)}
            tagArray={data.tags}
            lastDeniedDate={
              data.latestDeniedAt ? new Date(data.latestDeniedAt) : undefined
            }
            mainTabType={translateMainTabName(type)}
          />
        ))}
      </MainItemListWrapper>
      <PagenationWrapper>
        <Pagenation
          pageNum={pageNum}
          setPageNum={setPageNum}
          totalItems={mainItemList.totalItems}
        />
      </PagenationWrapper>
    </>
  );
}
