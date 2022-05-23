import { DetailDataProps } from '../../components/types/CommonDataProps';
import { MainItemProps } from '../../components/molecules/MainItem';
import { TagProps } from '../../components/atoms/texts/Tag';

type stateLabelType = DetailDataProps['stateLabel'];

export function translateMainState(stateLabel: stateLabelType) {
  let stateType: MainItemProps['stateType'];
  switch (stateLabel) {
    case 'APPROVE':
      stateType = 'approved';
      break;
    case 'CHECK':
      stateType = 'processing';
      break;
    case 'DENY':
      stateType = 'denied';
      break;
    case 'WAIT':
      break;
  }

  return stateType;
}

export function translateDetailState(stateLabel: stateLabelType) {
  let stateType: Exclude<TagProps['tagType'], 'tag'>;
  switch (stateLabel) {
    case 'APPROVE':
      stateType = 'approved';
      break;
    case 'CHECK':
      stateType = 'processing';
      break;
    case 'DENY':
      stateType = 'denied';
      break;
    case 'WAIT':
      stateType = 'processing';
      break;
  }

  return stateType;
}
