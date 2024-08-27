import { forwardRef, useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import dedent from 'dedent';

import { Padbox, Surface } from '../layout';
import { Code } from '../Text';
import { ErrorBoundary } from '../ErrorBoundary';
import { useLogger } from '../../hooks/useLogger';
import { useClipboard } from '../../hooks/useClipboard';
import { pxToRem } from '../../utils';
import IconButton from '../ButtonV2/IconButton';
import Button from '../ButtonV2/Button';

const ButtonWrapper = styled.div<{ $position: 'top' | 'bottom' }>`
  position: absolute;
  right: var(--sscds-space-1x);
  ${({ $position }) =>
    $position === 'top'
      ? `top: var(--sscds-space-1x);`
      : `bottom: var(--sscds-space-1x);`};
`;
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

    useLayoutEffect(() => {
      setIsExpandable(
        codeRef.current.getBoundingClientRect().height > maxHeight,
      );
    }, [setIsExpandable, maxHeight]);

    if (!hasValidChildren) {
      error('Only string can be passed in `children` property');
      return null;
    }

    const snippetText = shouldDedent ? dedent(children) : children;

    return (
      <Surface
        ref={ref}
        background="dynamic"
        radius="md"
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
            <IconButton
              iconName={isCopied ? 'check' : 'copy'}
              label={isCopied ? 'Copied to clipboard' : 'Copy to clipboard'}
              variant="ghost"
              onClick={() => copy(snippetText)}
            />
          </ButtonWrapper>
        )}
        {isExpandable && (
          <ButtonWrapper $position="bottom">
            <Button
              iconEnd={{
                name: 'angle-down',
                rotation: isExpanded ? 180 : undefined,
              }}
              size="sm"
              variant="ghost"
              onClick={() => setIsExpanded((prev) => !prev)}
            >
              {isExpanded ? 'Show less' : 'Show more'}
            </Button>
          </ButtonWrapper>
        )}
      </Surface>
    );
  },
);

export default Snippet;
