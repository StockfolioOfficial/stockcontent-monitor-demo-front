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

export interface StyledProps {
  noData: boolean;
}

const DeniedLogStyled = styled.div<StyledProps>`
  ${({ theme, noData }) =>
    noData &&
    css`
      width: 360px;
      padding: 20px 25px;
      border: 1px solid #eeeeee;
      border-radius: 10px;
      background-color: ${theme.colors.white};
    `}
`;

const NonDenied = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray2};
    font-weight: ${theme.fonts.weight.bold};
    font-size: ${theme.fonts.size.m};
    line-height: ${theme.fonts.lineHeight.m};
  `}
`;

const DeniedLogSectionStyled = styled.section`
  h3 {
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

function ChildrenNoData() {
  return (
    <DeniedLogStyled noData={true}>
      <NonDenied>반려된 기록이 없습니다.</NonDenied>
    </DeniedLogStyled>
  );
}

function ChildrenYesData({ deniedLogs }: DeniedLogSectionProps) {
  return (
    <DeniedLogStyled noData={false}>
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
    </DeniedLogStyled>
  );
}

export default function DeniedLogSection({
  deniedLogs,
}: DeniedLogSectionProps) {
  return (
    <DeniedLogSectionStyled>
      <h3>반려기록</h3>
      {deniedLogs?.length === 0 ? (
        <ChildrenNoData />
      ) : (
        <ChildrenYesData deniedLogs={deniedLogs} />
      )}
    </DeniedLogSectionStyled>
  );
}
