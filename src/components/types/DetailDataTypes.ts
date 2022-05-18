import { DetailVideoItemProps } from '../molecules/DetailVideoItem';

export const detailMockData = {
  contentId: '1',
  stateLabel: 'processing',
  subject: '제목입니다',
  description: '설명입니다',
  uploadedAt: '2022-02-02 11:11:11',
  tags: ['강아지', '동물', '귀여움', '자연'],
  denyLogs: [
    {
      logId: 1,
      reason:
        '이것은 반려이유입니다. 이것은 반려이유입니다. 이것은 반려이유입니다. 이것은 반려이유입니다. 이것은 반려이유입니다.',
      deniedAt: '2022.04.08 16:14:12',
      denyTags: ['흔들린 영상', '타기업 로고 노출', '필터를 씌운 영상'],
    },
    {
      logId: 2,
      reason:
        '이것은 반려이유입니다. 이것은 반려이유입니다. 이것은 반려이유입니다. 이것은 반려이유입니다. 이것은 반려이유입니다.',
      deniedAt: '2022.04.08 16:14:12',
      denyTags: ['흔들린 영상', '타기업 로고 노출', '필터를 씌운 영상'],
    },
  ],
};

export interface DetailDeniedLogLayoutProps extends DetailVideoItemProps {
  deniedLog: typeof detailMockData.denyLogs;
}
