import type { PropsWithChildren } from 'react';
import type { StepProps } from './Stepper.types';

import { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { isNotUndefined } from 'ramda-adjunct';

import { getColor, getSpace, pxToRem } from '../../utils';
import { SpaceSizes } from '../../theme';
import { Text } from '../typographyLegacy/Text';
import { TextSizes, TextVariants } from '../typographyLegacy/Text/Text.enums';
import { Inline, Padbox, Stack } from '../layout';
import { StepperContext } from './Stepper.context';
import { StepperOrientations } from './Stepper.enums';
import StepBullet, { BulletCircle, bulletSize } from './StepBullet';

const StepLabel = styled(Text)`
  max-width: 26ch;
  line-height: ${pxToRem(bulletSize)};
`;

const StepSummary = styled(Text)`
  max-width: 30ch;
`;

const StepButton = styled.button`
  border: 0 none;
  background: transparent none;

  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: 0;
  }
  &:hover
    ${/* sc-selector */ BulletCircle},
    &:focus
    ${/* sc-selector */ BulletCircle} {
    fill: ${getColor('primary.50')};
  }
`;

const connectorSize = 2;
const connectorIndentation = pxToRem(bulletSize / 2 - connectorSize / 2);
const connectorStyled = css`
  content: '';
  display: block;
  background-color: ${getColor('neutral.500')};
`;

const StepConnector = styled.div`
  flex: 1 1 1rem;

  &::before {
    ${connectorStyled};
    height: ${`${connectorSize}px`};
    margin-top: ${connectorIndentation};
  }
`;

const StepContent = styled.div<{ $isLast?: StepProps['isLast'] }>`
  display: flex;
  align-items: stretch;
  min-height: 1rem;
  margin-top: ${getSpace(SpaceSizes.sm)};
  margin-bottom: ${getSpace(SpaceSizes.sm)};

  &::before {
    ${connectorStyled};
    width: ${`${connectorSize}px`};
    margin-left: ${connectorIndentation};
    margin-right: ${connectorIndentation};
  }

  ${({ $isLast }) =>
    $isLast &&
    `
    &::before {
      background-color: transparent;
    }
  `};
`;

const Step = forwardRef<HTMLDivElement, PropsWithChildren<StepProps>>(
  (
    { children, label, summary, index, isLast, shouldShowText, onStepClick },
    ref,
  ) => {
    const { orientation, activeStep, areStepsExpanded } =
      useContext(StepperContext);
    const stepNumber = index + 1;
    const isActive = activeStep === index;
    const isDone = activeStep > index;
    const isPending = activeStep < index;

    const isStepClickable = isDone && isNotUndefined(onStepClick);

    const handleStepClick = () => {
      onStepClick(index);
    };

    const stepLabel = (
      <Inline gap="sm">
        <StepBullet
          isActive={isActive}
          isDone={isDone}
          isPending={isPending}
          stepNumber={stepNumber}
        />
        {shouldShowText && (
          <Stack gap={SpaceSizes.xs}>
            <StepLabel isBold={isActive}>{label}</StepLabel>
            {isNotUndefined(summary) && (
              <StepSummary size={TextSizes.md} variant={TextVariants.secondary}>
                {summary}
              </StepSummary>
            )}
          </Stack>
        )}
      </Inline>
    );

    return (
      <>
        <div ref={ref}>
          {isStepClickable ? (
            <StepButton onClick={handleStepClick}>{stepLabel}</StepButton>
          ) : (
            stepLabel
          )}
          {orientation === StepperOrientations.vertical && (
            <StepContent $isLast={isLast} data-testid="step-content">
              {(isActive || areStepsExpanded) && (
                <Padbox paddingSize={SpaceSizes.sm}>{children}</Padbox>
              )}
            </StepContent>
          )}
        </div>
        {!isLast && orientation === StepperOrientations.horizontal && (
          <StepConnector />
        )}
      </>
    );
  },
);
Step.displayName = 'Step';
Step.propTypes = {
  label: PropTypes.string.isRequired,
  summary: PropTypes.string,
  index: PropTypes.number,
  shouldShowText: PropTypes.bool,
  isLast: PropTypes.bool,
  onStepClick: PropTypes.func,
};

export default Step;
