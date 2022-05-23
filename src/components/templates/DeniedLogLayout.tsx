import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import DeniedLogSection from '../organisms/DeniedLogSection';
import TextBtn from '../atoms/TextBtn';
import { DeniedLogSectionProps } from '../organisms/DeniedLogSection';

export interface DenyLogs {
  state?: 'denied' | 'processing' | 'approved';
  data: DeniedLogSectionProps['deniedLogs'];
}

const DetailDeniedLogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const TextButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
`;

export default function DeniedLogLayout({ state, data }: DenyLogs) {
  const navigate = useNavigate();

  //임시 네비게이트
  const goto = () => {
    navigate('report');
  };

  return (
    <DetailDeniedLogWrapper>
      {state && (
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
            //임시 이벤트
            onClick={goto}
          >
            반려사유 작성
          </TextBtn>
        </TextButtonWrapper>
      )}
      <DeniedLogSection deniedLogs={data} />
    </DetailDeniedLogWrapper>
  );
}
