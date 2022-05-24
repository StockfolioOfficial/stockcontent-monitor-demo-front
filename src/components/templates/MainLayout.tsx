import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MainItem from '../molecules/MainItem';
import Pagenation from '../../components/atoms/Pagenation';
import BaseLayoutProps from '../types/BaseLayoutProps';
import { MainDataProps } from '../types/CommonDataProps';
import { ConfirmContentsType } from '../../hooks/pathParams/useConfirmContentsParams';
import { translateMainState } from '../../utils/translateStateLabel';
import { translateMainTabName } from '../../utils/translateStateLabel';
import { NoData } from '../atoms/NoData';
export interface MainItemLayoutProps extends BaseLayoutProps {
  type: ConfirmContentsType;
}

export const MainItemListWrapper = styled.div`
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
  const [mainItemList, setMainItemList] = useState<MainDataProps>({
    totalPages: '',
    itemList: [],
  });

  //mainItemList 목데이터 fetch
  const itemLimit = 20;
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    axios
      .get<MainDataProps>('http://localhost:3000/data/MainItemList.json')
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
  }, [type, pageNumber]);

  useEffect(() => {
    setPageNumber(1);
  }, [type]);

  //mainItemList API fetch 부분
  // const itemLimit = 20;
  // const [pageNumber, setPageNumber] = useState(1);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `http://localhost:3000/content?state=${translateMainTabName(
  //         type
  //       )}&start=${pageNumber}&lim=${itemLimit}`
  //     )
  //     .then(res => setMainItemList(res.data))
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

  return (
    <>
      <MainItemListWrapper>
        {mainItemList.itemList.length === 0 ? (
          <NoData type={type} />
        ) : (
          mainItemList.itemList.map(data => (
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
          ))
        )}
      </MainItemListWrapper>
      {mainItemList.itemList.length === 0 ? null : (
        <PagenationWrapper>
          <Pagenation
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            totalPages={mainItemList.totalPages}
          />
        </PagenationWrapper>
      )}
    </>
  );
}
