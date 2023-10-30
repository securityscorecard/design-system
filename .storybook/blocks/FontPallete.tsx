import type { ReactNode } from 'react';
import styled from 'styled-components';

const List = styled.div`
  font-family: 'Nunito Sans', -apple-system, '.SFNSText-Regular',
    'San Francisco', BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica,
    Arial, sans-serif;
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const ListHeading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 700;
  color: rgb(51 51 51 / 60%);
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
  color: #333;
  word-break: break;
`;
const ItemSubtitle = styled.div`
  color: rgb(51 51 51 / 80%);
`;

interface SampleTextProps {
  readonly $fontFamily?: string;
  readonly $fontWeight?: number;
  readonly $fontSize?: string;
  readonly $lineHeight?: number | string;
}

const SampleText = styled.div<SampleTextProps>`
  flex: 1;
  font-family: ${({ $fontFamily }) => $fontFamily};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  font-size: ${({ $fontSize }) => $fontSize};
  line-height: ${({ $lineHeight }) => $lineHeight};
`;

interface FontProps {
  title: string;
  subtitle: string;
  fontFamily?: string;
  fontWeight?: number;
  fontSize?: string;
  lineHeight?: number | string;
  sampleText: string;
}

export const FontItem = ({
  title,
  subtitle,
  fontFamily = 'Inter',
  fontWeight = 400,
  fontSize = '0.875rem',
  lineHeight = 1.5,
  sampleText,
}: FontProps) => {
  return (
    <Item>
      <ItemDescription>
        <ItemTitle>{title}</ItemTitle>
        <ItemSubtitle>{subtitle}</ItemSubtitle>
      </ItemDescription>
      <SampleText
        className=' sb-unstyled'
        $fontFamily={fontFamily}
        $fontWeight={fontWeight}
        $fontSize={fontSize}
        $lineHeight={lineHeight}
      >
        {sampleText}
      </SampleText>
    </Item>
  );
};

export const FontPalette = ({ children, ...props }: { children: ReactNode }) => (
  <List {...props}>
    <ListHeading>
      <ListName>Name</ListName>
      <ListSample>Sample</ListSample>
    </ListHeading>
    {children}
  </List>
);
