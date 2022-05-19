import BaseLayoutProps from './BaseLayoutProps';
import { TagProps } from '../atoms/texts/Tag';

export interface DetailDataProps extends BaseLayoutProps {
  contentId: string;
  stateLabel: Exclude<TagProps['tagType'], 'tag'>;
  sampleContent: string;
  subject: string;
  description: string;
  uploadedAt: string;
  tags: string[];
  denyLogs?: DenyLogsType[];
}

interface DenyLogsType {
  logId: number;
  reason: string;
  deniedAt: string;
  denyTags: string[];
}
