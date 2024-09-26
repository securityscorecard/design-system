import type { HTMLProps, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';
import { includes } from 'ramda';
import { isNotUndefined } from 'ramda-adjunct';

import { getSpace } from '../../utils';
import { SpaceSizes } from '../../theme';
import { CardMediaProps, CardMediaWrapperProps } from './Card.types';

const CardMediaWrapper = styled.div<CardMediaWrapperProps>`
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  ${({ $isMediaComponent }) =>
    $isMediaComponent &&
    css`
      /* compensate for negative margins */
      width: calc(100% + ${getSpace(SpaceSizes.mdPlus)} * 2);
    `};

  ${({ $isImageComponent }) => $isImageComponent && 'object-fit: cover'};
`;

const MEDIA_COMPONENTS = ['video', 'audio', 'picture', 'iframe', 'img'];
const IMAGE_COMPONENTS = ['picture', 'img'];

function CardMedia<El extends HTMLElement = HTMLDivElement>({
  children,
  mediaSrc,
  as,
  style,
  alt,
  ...props
}: PropsWithChildren<CardMediaProps & HTMLProps<El>>) {
  const isMediaComponent = includes(as, MEDIA_COMPONENTS);
  const isImageComponent = includes(as, IMAGE_COMPONENTS);
  const hasMediaSrc = isNotUndefined(mediaSrc);

  const composedStyle =
    !isMediaComponent && hasMediaSrc
      ? { backgroundImage: `url("${mediaSrc}")`, ...style }
      : style;

  return (
    <CardMediaWrapper
      $isImageComponent={isImageComponent}
      $isMediaComponent={isMediaComponent}
      alt={as === 'img' && hasMediaSrc ? alt : undefined}
      aria-label={!isMediaComponent && hasMediaSrc ? alt : undefined}
      as={as}
      role={!isMediaComponent && hasMediaSrc ? 'img' : undefined}
      src={isMediaComponent ? mediaSrc : undefined}
      style={composedStyle}
      {...props}
    >
      {!isMediaComponent && !hasMediaSrc ? children : null}
    </CardMediaWrapper>
  );
}

CardMedia.displayName = 'CardMedia';

export default CardMedia;
