import styled from 'styled-components';

import DeniedLogSection from '../organisms/DeniedLogSection';
import TextBtn from '../atoms/TextBtn';
import { DeniedLogSectionProps } from '../organisms/DeniedLogSection';

import modalStore from '../../stores/ModalStore';
export interface DenyLogs {
  state?: 'denied' | 'processing' | 'approved';
  data: DeniedLogSectionProps['deniedLogs'];
}

export const DetailDeniedLogWrapper = styled.div`
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
  return (
    <DetailDeniedLogWrapper>
      {state && (
        <TextButtonWrapper>
          <TextBtn
            btnType="highBtn"
            width="175px"
            btnTheme="sky"
            fontColor="blue"
            onClick={() => {
              modalStore.openModal('Approving');
            }}
          >
            승인
          </TextBtn>
          <TextBtn
            btnType="highBtn"
            width="175px"
            btnTheme="red"
            fontColor="pink"
            onClick={() => {
              modalStore.openModal('WritingDeniedReason');
            }}
          >
            반려사유 작성
          </TextBtn>
        </TextButtonWrapper>
      )}
      <DeniedLogSection deniedLogs={data} />
    </DetailDeniedLogWrapper>
  );
}
