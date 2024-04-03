import React, { forwardRef, useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import dedent from 'dedent';

import { Button } from '../Button';
import { Padbox, Surface } from '../layout';
import { Code } from '../typographyLegacy';
import { ErrorBoundary } from '../ErrorBoundary';
import { useLogger } from '../../hooks/useLogger';
import { useClipboard } from '../../hooks/useClipboard';
import { getColor, pxToRem } from '../../utils';
import { Icon } from '../Icon';

const ButtonWrapper = styled.div<{ $position: 'top' | 'bottom' }>`
  position: absolute;
  right: 0rem;
  ${({ $position }) =>
    $position === 'top'
      ? `top: 0rem;border-radius: 0 var(--sscds-radius);`
      : `bottom: 0rem;border-radius: var(--sscds-radius) 0;`};
  background-color: ${getColor('neutral.100')};
`;
const SnippetRoot = styled(Surface)``;
const SnippetContent = styled(Padbox)`
  ${({ $shouldWrapText }) =>
    $shouldWrapText
      ? `
  white-space: break-spaces;
  word-wrap: break-word;
  `
      : undefined};
  overflow: auto;
`;

const Snippet = forwardRef<
  HTMLDivElement,
  {
    children: string;
    canCopy?: boolean;
    shouldDedent?: boolean;
    shouldWrapText?: boolean;
    maxHeight?: number;
    isExpanded?: boolean;
  }
>(
  (
    {
      children,
      canCopy = true,
      shouldDedent = true,
      shouldWrapText = false,
      maxHeight = 200,
      isExpanded: isExpandedFromProps = false,
    },
    ref,
  ) => {
    const { error } = useLogger('Snippet');
    const codeRef = useRef<HTMLDivElement>(null);
    const [isExpandable, setIsExpandable] = useState(true);
    const [isExpanded, setIsExpanded] = useState(isExpandedFromProps);
    const { copy, isCopied } = useClipboard();
    const hasValidChildren = typeof children === 'string';
    const snippetText = shouldDedent ? dedent(children) : children;

    if (!hasValidChildren) {
      error('Only string can be passed in `children` property');
    }
    useLayoutEffect(() => {
      setIsExpandable(
        codeRef.current.getBoundingClientRect().height > maxHeight,
      );
    }, [setIsExpandable, maxHeight]);

    return (
      <SnippetRoot
        ref={ref}
        background="dynamic"
        style={{
          position: 'relative',
        }}
        hasBorder
      >
        <SnippetContent
          $shouldWrapText={shouldWrapText}
          aria-multiline="true"
          aria-readonly="true"
          as="pre"
          paddingSize="md"
          role="textbox"
          style={{
            maxHeight: isExpanded ? 'none' : pxToRem(maxHeight),
          }}
          tabIndex={0}
        >
          {!hasValidChildren ? (
            <ErrorBoundary size="xs" />
          ) : (
            <Code ref={codeRef} size="sm">
              {snippetText}
            </Code>
          )}
        </SnippetContent>
        {hasValidChildren && canCopy && (
          <ButtonWrapper $position="top">
            <Button
              aria-label={
                isCopied ? 'Copied to clipboard' : 'Copy to clipboard'
              }
              iconStart={{ name: isCopied ? 'check' : 'copy' }}
              variant="ghost"
              onClick={() => copy(snippetText)}
            >
              {isCopied ? 'Copied' : undefined}
            </Button>
          </ButtonWrapper>
        )}
        {isExpandable && (
          <ButtonWrapper $position="bottom">
            <Button
              variant="ghost"
              onClick={() => setIsExpanded((prev) => !prev)}
            >
              <span>{isExpanded ? 'Show less' : 'Show more'}</span>
              <Icon name={isExpanded ? 'angle-up' : 'angle-down'} />
            </Button>
          </ButtonWrapper>
        )}
      </SnippetRoot>
    );
  },
);

export default Snippet;
