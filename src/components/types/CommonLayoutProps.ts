import { DetailVideoItemProps } from '../molecules/DetailVideoItem';
import { DeniedLogSectionProps } from '../organisms/DeniedLogSection';

export interface DetailDeniedLayoutProps {
  data: {
    contentId: string;
    stateLabel: 'WAIT' | 'DENY' | 'APPROVE' | 'CHECK';
    subject: DetailVideoItemProps['title'];
    description: DetailVideoItemProps['descript'];
    uploadedAt: string;
    sampleContent: DetailVideoItemProps['videoSrc'];
    tags: DetailVideoItemProps['tagArray'];
    denyLogs: DeniedLogSectionProps['deniedLogs'];
  };
}
