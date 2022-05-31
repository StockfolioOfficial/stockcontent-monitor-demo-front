import styled from 'styled-components';

import DeniedLogSection from '../organisms/DeniedLogSection';
import TextBtn from '../atoms/TextBtn';
import { DeniedLogSectionProps } from '../organisms/DeniedLogSection';
import useStore from '../../stores/UseStores';
import { translateMainState } from '../../utils/SwitchStringToString';

export interface DenyLogsProps {
  data: DeniedLogSectionProps['deniedLogs'];
  contentId: string;
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

export default function DeniedLogLayout({ data, contentId }: DenyLogsProps) {
  const { modalStore, stateStore } = useStore();

  return (
    <DetailDeniedLogWrapper>
      {!translateMainState(stateStore.state) && (
        <TextButtonWrapper>
          <TextBtn
            btnType="highBtn"
            width="175px"
            btnTheme="sky"
            fontColor="blue"
            onClick={() => {
              modalStore.openModal('Approving', contentId);
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
              modalStore.openModal('WritingDeniedReason', contentId);
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
