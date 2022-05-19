import { TagProps } from '../atoms/texts/Tag';
import { DetailVideoItemProps } from '../molecules/DetailVideoItem';

export type deniedLogType = {
  logId: number;
  reason: string;
  deniedAt: string;
  denyTags: string[];
}[];
export interface DetailDeniedLogDataType {
  contentId: string;
  stateLabel: Exclude<TagProps['tagType'], 'tag'>;
  subject: string;
  description: string;
  uploadedAt: string;
  tags: string[];
  denyLogs: deniedLogType;
}

export interface DeniedLogLayoutProps {
  data: DetailDeniedLogDataType;
}
