import styled, { css } from 'styled-components';
import * as React from 'react';
import BaseLayoutProps from '../types/BaseLayoutProps';
import Tag, { TagProps } from '../atoms/texts/Tag';
import SmallColorDateText, {
  SmallColorDateTextProps,
} from '../atoms/texts/SmallColorDateText';

export interface DetailVideoItemProps extends BaseLayoutProps {
  videoSrc: HTMLSourceElement['src'];
  videoType: HTMLSourceElement['type'];
  title: string;
  stateType: Exclude<TagProps['tagType'], 'tag'>;
  uploadDate: SmallColorDateTextProps['uploadDate'];
  descript: string;
  tagArray: Array<string>;
}

const DetailVideoItemStyled = styled.div`
  width: 800px;
`;

const VideoWrapper = styled.video`
  border-radius: 4px;
  source {
    border-radius: 4px;
  }
`;

const StateWrapper = styled(Tag)`
  margin-top: 22px;
  margin-bottom: 12px;
`;

const TitleWrapper = styled.h1`
  margin-bottom: 2px;
  ${({ theme }) => css`
    margin-bottom: 2px;
    color: ${theme.colors.black};
    font-size: ${theme.fonts.size.ml};
    font-weight: ${theme.fonts.weight.bold};
    line-height: ${theme.fonts.lineHeight.ml};
  `}
`;

const DescriptWrapper = styled.div`
  margin: 25px 0;
  ${({ theme }) => css`
    font-size: ${theme.fonts.size.ms};
    font-weight: ${theme.fonts.weight.light};
    line-height: ${theme.fonts.lineHeight.msL};
  `}
`;

const TagWrapper = styled.div`
  h2 {
    margin-bottom: 10px;
    ${({ theme }) => css`
      color: ${theme.colors.gray2};
      font-size: ${theme.fonts.size.s};
      font-weight: ${theme.fonts.weight.light};
      line-height: ${theme.fonts.lineHeight.s};
    `}
  }
`;

const TagWrap = styled.div`
  display: flex;
  * {
    margin-right: 6px;
  }
`;

export default function DetailVideoItem({
  videoSrc,
  videoType,
  stateType,
  title,
  uploadDate,
  descript,
  tagArray,
  ...rest
}: DetailVideoItemProps) {
  return (
    <DetailVideoItemStyled {...rest}>
      <VideoWrapper width="800" height="450" controls>
        <source src={videoSrc} type={videoType} />
      </VideoWrapper>
      <StateWrapper tagType={stateType} />
      <TitleWrapper>{title}</TitleWrapper>
      <SmallColorDateText uploadDate={uploadDate} color="gray2" />
      <DescriptWrapper>
        <p>{descript}</p>
      </DescriptWrapper>
      <TagWrapper>
        <h2>태그</h2>
        <TagWrap>
          {tagArray.map(el => (
            <Tag key={el} tagType="tag">
              {el}
            </Tag>
          ))}
        </TagWrap>
      </TagWrapper>
    </DetailVideoItemStyled>
  );
}
