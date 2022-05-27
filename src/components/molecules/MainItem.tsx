import { useNavigate } from 'react-router';
import styled, { css, keyframes } from 'styled-components';
import BaseLayoutProps from '../types/BaseLayoutProps';
import Tag, { TagProps } from '../atoms/texts/Tag';
import SmallColorDateText, {
  SmallColorDateTextProps,
} from '../atoms/texts/SmallColorDateText';
import apiClient from '../../libs/apis/apiClient';
import { useState } from 'react';
import useStore from '../../stores/UseStores';
export interface MainItemProps extends BaseLayoutProps {
  id: string;
  imgSrc: HTMLImageElement['src'];
  imgAlt: HTMLImageElement['alt'];
  stateType?: Exclude<TagProps['tagType'], 'tag'>;
  title: string;
  uploadDate: SmallColorDateTextProps['uploadDate'];
  lastDeniedDate?: SmallColorDateTextProps['lastDeniedDate'];
  tagArray: Array<string>;
  mainTabType: 'APPROVE' | 'DENY' | 'NONE';
  onClick?: React.MouseEventHandler<'div'> | undefined;
}

const mainItemAnimation = keyframes`
  0%{
    transform: translateY(0);
  }
  100%{
    transform: translateY(-6px);
  }
`;

const MainItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 294px;
  padding: 6px 6px;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  :hover {
    animation: ${mainItemAnimation} 0.2s linear;
    transform: translateY(-6px);
    ${({ theme }) => css`
      border-radius: 10px;
      box-shadow: ${theme.hoverShadow.item};
    `};
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  align-self: center;
  width: 282px;
  height: 158px;
  object-fit: cover;

  img {
    border-radius: 4px;
    width: 100%;
    height: 100%;
  }
`;

const PurpleImgCoverStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  color: white;
  background-color: rgba(98, 83, 234, 0.5);
`;

const TitleWrapper = styled.div<MainItemProps>`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 5px;
  div {
    margin-right: 4px;
  }
  h1 {
    ${({ theme, stateType }) => css`
      color: ${stateType === 'approved'
        ? theme.colors.gray2
        : theme.colors.black};
      font-size: ${theme.fonts.size.ms};
      font-weight: ${theme.fonts.weight.bold};
      line-height: ${theme.fonts.lineHeight.ms};
    `}
  }
`;

const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  * {
    margin-right: 6px;
    margin-bottom: 5px;
  }
`;

function PurpleImgCover() {
  return <PurpleImgCoverStyled>검수중</PurpleImgCoverStyled>;
}

export default function MainItem(props: MainItemProps) {
  const navigate = useNavigate();
  const {
    id,
    imgSrc,
    imgAlt,
    stateType,
    title,
    uploadDate,
    lastDeniedDate,
    tagArray,
    mainTabType,
    onClick,
    ...rest
  } = props;
  const [checkState, setCheckState] = useState<
    'CHECK' | 'APPROVE' | 'DENY' | 'WAIT' | ''
  >('');
  const { modalStore } = useStore();

  const knock = async () => {
    try {
      await apiClient
        .get(`/content/${id}/monitoring`)
        .then(res => setCheckState(res.data.stateLabel));
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  const monitoringMark = async () => {
    try {
      await apiClient
        .put(`/content/${id}/monitoring`)
        .then(res => console.log(res));
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  console.log('함수밖 라벨', checkState);

  return (
    <MainItemStyled
      {...rest}
      onClick={async () => {
        if (mainTabType === 'NONE') {
          await knock();
          console.log('너는 라벨', checkState);
          if (checkState === 'CHECK') {
            modalStore.openModal('SomeoneConfirming');
          } else {
            await monitoringMark();
            navigate(`/confirm-contents/${id}`);
          }
        }
        navigate(`/confirm-contents/${id}`);
      }}
    >
      <ImgWrapper>
        {stateType === 'processing' && <PurpleImgCover />}
        <img src={imgSrc} alt={imgAlt} />
      </ImgWrapper>
      <TitleWrapper {...props}>
        {stateType && <Tag tagType={stateType} />}
        <h1>{title}</h1>
      </TitleWrapper>
      <SmallColorDateText
        color={stateType === 'approved' ? 'gray2' : 'black'}
        uploadDate={uploadDate}
        lastDeniedDate={lastDeniedDate}
      />
      <TagWrapper>
        {tagArray.map(el => (
          <Tag key={el} tagType="tag">
            {el}
          </Tag>
        ))}
      </TagWrapper>
    </MainItemStyled>
  );
}
