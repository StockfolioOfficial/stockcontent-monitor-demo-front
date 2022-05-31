import { DetailDataProps } from '../components/types/CommonDataProps';
import { MainItemProps } from '../components/molecules/MainItem';
import { TagProps } from '../components/atoms/texts/Tag';
import { ConfirmContentsType } from '../pages/Main';

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

export function translateMainTabName(type: ConfirmContentsType) {
  let newTypeName: 'NONE' | 'DENY' | 'APPROVE';
  switch (type) {
    case '대기중':
      newTypeName = 'NONE';
      break;
    case '반려됨':
      newTypeName = 'DENY';
      break;
    case '승인':
      newTypeName = 'APPROVE';
      break;
  }
  return newTypeName;
}

export function translateTotalPostTitle(type: ConfirmContentsType) {
  let title: '승인된 컨텐츠' | '반려된 컨텐츠' | '대기중인 컨텐츠';
  switch (type) {
    case '승인':
      title = '승인된 컨텐츠';
      break;
    case '반려됨':
      title = '반려된 컨텐츠';
      break;
    case '대기중':
      title = '대기중인 컨텐츠';
      break;
  }

  return title;
}
