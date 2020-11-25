import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import typography from '../../src/theme/typography'

const List = styled.div`
  font-family: "Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif;
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  flex-direction: column;
`;
const ListHeading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 20px;
  font-weight: 700;
  color: rgba(51,51,51,0.6);
`;

const ListName = styled.div`
  flex: 0 0 35%;
`;

const ListSample = styled.div`
  flex: 1;
`;

const Item = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
`;
const ItemDescription = styled.div`
  flex: 0 0 35%;
  line-height: 20px;
`;
const ItemTitle = styled.div`
  font-weight: 700;
  color: #333333;
  word-break: break;
`;
const ItemSubtitle = styled.div`
  color: rgba(51,51,51,0.8);
`;

interface SampleTextProps {
  readonly fontFamily?: string;
  readonly fontWeight?: number;
  readonly fontSize?: string;
  readonly lineHeight?: string;
};

const SampleText = styled.div<SampleTextProps>`
  flex: 1;
  font-family: ${({fontFamily}) => fontFamily};
  font-weight: ${({fontWeight}) => fontWeight};
  font-size: ${({fontSize}) => fontSize};
  line-height: ${({lineHeight}) => lineHeight};
`;

interface FontProps {
  title: string;
  subtitle: string;
  fontFamily?: string;
  fontWeight?: number;
  fontSize?: string;
  lineHeight?: string;
  sampleText: string;
};

export const FontItem: FunctionComponent<FontProps> = ({
  title,
  subtitle,
  fontFamily = typography.family.base,
  fontWeight = typography.weight.regular,
  fontSize = typography.size.lg,
  lineHeight = typography.lineHeight.lg,
  sampleText
}) => {
  return (
    <Item>
      <ItemDescription>
        <ItemTitle>{title}</ItemTitle>
        <ItemSubtitle>{subtitle}</ItemSubtitle>
      </ItemDescription>
      <SampleText
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        fontSize={fontSize}
        lineHeight={lineHeight}
      >
        {sampleText}
      </SampleText>
    </Item>
  );
};

export const FontPalette: FunctionComponent = ({children, ...props}) => (
  <List {...props}>
    <ListHeading>
      <ListName>Name</ListName>
      <ListSample>Sample</ListSample>
    </ListHeading>
    {children}
  </List>
)
