import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MainItem from '../molecules/MainItem';
import Pagenation from '../../components/atoms/Pagenation';
import BaseLayoutProps from '../types/BaseLayoutProps';
import { MainDataProps } from '../types/CommonDataProps';
import { ConfirmContentsType } from '../../hooks/pathParams/useConfirmContentsParams';
import { translateMainState } from '../../utils/SwitchStringToString';
import { translateMainTabName } from '../../utils/SwitchStringToString';
import { NoData } from '../atoms/NoData';
import MainSkeletonLayout from './MainSkeletonLayout';
export interface MainItemLayoutProps extends BaseLayoutProps {
  type: ConfirmContentsType;
  pageNum: string;
  setPageNum: React.Dispatch<React.SetStateAction<string>>;
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
  ...rest
}: MainItemLayoutProps) {
  const [isSkeletonOpen, setisSkeletonOpen] = useState(true);
  const [mainItemList, setMainItemList] = useState<MainDataProps>({
    totalPages: '',
    itemList: [],
  });

  //mainItemList 목데이터 fetch
  useEffect(() => {
    axios
      .get<MainDataProps>(
        `http://localhost:3000/data/MainItemList${pageNum}.json`
      )
      .then(res => {
        let data: MainDataProps;
        switch (type) {
          case '대기중':
            data = { ...res.data, itemList: res.data.itemList };
            break;
          case '반려됨':
            data = { ...res.data, itemList: res.data.itemList.slice(2) };
            break;
          default:
            data = { ...res.data, itemList: [] };
        }

        setisSkeletonOpen(false);
        setMainItemList(data);
      });

    // setMainItemList({ ...data, itemList: [] });
    // })
    // .catch(err => {
    //   if (err.response) {
    //     console.log(err.response.data);
    //     console.log(err.response.status);
    //     console.log(err.response.headers);
    //   } else if (err.request) {
    //     console.log(err.request);
    //   } else {
    //     console.log('Error', err.message);
    //   }
    //   console.log(err.config);
    // });
  }, [type, pageNum]);

  //mainItemList API fetch 부분
  // const itemLimit = 20;
  // const [pageNumber, setPageNumber] = useState(1);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `http://localhost:3000/content?state=${translateMainTabName(
  //         type
  //       )}&start=${pageNum}&lim=${itemLimit}`
  //     )
  // .then(res => {
  //   setMainItemList(res.data);
  //   setIsSkeletonOpen(false);
  // }))
  //     .catch(err => {
  //       if (err.response) {
  //         console.log(err.response.data);
  //         console.log(err.response.status);
  //         console.log(err.response.headers);
  //       } else if (err.request) {
  //         console.log(err.request);
  //       } else {
  //         console.log('Error', err.message);
  //       }
  //       console.log(err.config);
  //     });
  // }, [type, pageNumber]);

  return isSkeletonOpen ? (
    <MainSkeletonLayout />
  ) : mainItemList.itemList.length === 0 ? (
    <NoData type={type} />
  ) : (
    <>
      <MainItemListWrapper>
        {mainItemList.itemList.map(data => (
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
          />
        ))}
      </MainItemListWrapper>
      <PagenationWrapper>
        <Pagenation
          pageNum={pageNum}
          setPageNum={setPageNum}
          totalPages={mainItemList.totalPages}
        />
      </PagenationWrapper>
    </>
  );
}
