import styled, { css } from 'styled-components';
import * as React from 'react';
import DetailDeniedLog from '../molecules/DetailDeniedLog';

export interface DeniedLogSectionProps {
  deniedLogs: {
    logId: number;
    reason: string;
    deniedAt: string;
    denyTags: string[];
  }[];
}

const DeniedLogStyled = styled.section`
  width: 360px;
  padding: 20px 25px;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const NonDenied = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray2};
    font-weight: ${theme.fonts.weight.bold};
    font-size: ${theme.fonts.size.m};
    line-height: ${theme.fonts.lineHeight.m};
  `}
`;

const DeniedLogSectionStyled = styled.div`
  h1 {
    ${({ theme }) => css`
      padding-bottom: 10px;
      font-size: ${theme.fonts.size.ml};
      font-weight: ${theme.fonts.weight.bold};
      line-height: ${theme.fonts.lineHeight.ml};
    `}
  }
`;

const DetailDeniedLogWrap = styled.div`
  margin-bottom: 15px;
`;

function NoDeniedLogData() {
  return (
    <DeniedLogStyled>
      <NonDenied>반려된 기록이 없습니다.</NonDenied>
    </DeniedLogStyled>
  );
}

function YesDeniedLogData({ deniedLogs }: DeniedLogSectionProps) {
  return (
    <>
      {deniedLogs.map(data => (
        <DetailDeniedLogWrap key={data.logId}>
          <DetailDeniedLog
            date={new Date(data.deniedAt)}
            tag={data.denyTags}
            reason={data.reason}
          >
            {data.reason}
          </DetailDeniedLog>
        </DetailDeniedLogWrap>
      ))}
    </>
  );
}

export default function DeniedLogSection({
  deniedLogs,
}: DeniedLogSectionProps) {
  return (
    <DeniedLogSectionStyled>
      <h1>반려기록</h1>
      {deniedLogs?.length === 0 ? (
        <NoDeniedLogData />
      ) : (
        <YesDeniedLogData deniedLogs={deniedLogs} />
      )}
    </DeniedLogSectionStyled>
  );
}
