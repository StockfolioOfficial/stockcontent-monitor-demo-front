import BaseLayoutProps from './BaseLayoutProps';
import { DetailVideoItemProps } from '../molecules/DetailVideoItem';
import { DeniedLogSectionProps } from '../organisms/DeniedLogSection';
import { TagProps } from '../atoms/texts/Tag';

export interface DetailDataProps extends BaseLayoutProps {
  contentId: string;
  stateLabel: 'WAIT' | 'DENY' | 'APPROVE' | 'CHECK';
  subject: DetailVideoItemProps['title'];
  description: DetailVideoItemProps['descript'];
  uploadedAt: string;
  sampleContent: DetailVideoItemProps['videoSrc'];
  tags: DetailVideoItemProps['tagArray'];
  denyLogs: DeniedLogSectionProps['deniedLogs'];
}

export interface MainDataProps extends BaseLayoutProps {
  contentId: string;
  // 여기 수정 필요??
  stateLabel?: Exclude<TagProps['tagType'], 'tag'>;
  thumb: string;
  subject: string;
  uploadedAt: string;
  latestDeniedAt?: string;
  tags: string[];
}
