import { Property } from 'csstype';

import { SpacingProps } from '../../types/spacing.types';

export interface FlexContainerProps extends SpacingProps {
  alignItems?: Property.AlignItems;
  justifyContent?: Property.JustifyContent;
  flexDirection?: Property.FlexDirection;
  flexGrow?: Property.FlexGrow;
  flexShrink?: Property.FlexShrink;
  flexWrap?: Property.FlexWrap;
}
