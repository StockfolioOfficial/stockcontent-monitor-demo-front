import BaseLayoutProps from './BaseLayoutProps';
import { DetailVideoItemProps } from '../molecules/DetailVideoItem';
import { DeniedLogSectionProps } from '../organisms/DeniedLogSection';

export interface DetailDataProps extends BaseLayoutProps {
  contentId: string;
  stateLabel: 'WAIT' | 'DENY' | 'APPROVE' | 'CHECK';
  monitorExp: number;
  subject: DetailVideoItemProps['title'];
  description: DetailVideoItemProps['descript'];
  uploadedAt: string;
  sampleContent: DetailVideoItemProps['videoSrc'];
  tags: DetailVideoItemProps['tagArray'];
  denyLogs: DeniedLogSectionProps['deniedLogs'];
}

export interface MainDataProps {
  items: MainItemList[];
  totalPages: number;
}
interface MainItemList {
  contentId: string;
  stateLabel: 'WAIT' | 'DENY' | 'APPROVE' | 'CHECK';
  monitorExp: number;
  thumb: string;
  subject: string;
  uploadedAt: string;
  latestDeniedAt?: string;
  tags: string[];
}
