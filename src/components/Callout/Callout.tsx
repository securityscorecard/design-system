import styled from 'styled-components';
import { ComponentProps, ReactNode, useMemo } from 'react';

import { Inline, Padbox } from '../layout';
import { Text } from '../Text';
import { CLX_COMPONENT } from '../../theme/constants';
import { IconWrapper } from '../IconWrapper';
import { IconNames, RegularIconTypes } from '../Icon';

export type CalloutProps = {
  children: ReactNode;
  icon?:
    | IconNames
    | {
        name: IconNames;
        type?: RegularIconTypes;
        size?: Exclude<ComponentProps<typeof IconWrapper>['size'], 'lg' | 'xl'>;
      };
  color?: 'neutral' | 'info';
};
const Container = styled(Padbox)`
  border-radius: var(--sscds-radii-surface-md);
  background-color: var(--sscds-callout-color-background);
`;

const Callout = ({
  children,
  icon = 'lightbulb',
  color = 'info',
}: CalloutProps) => {
  const iconWrapperVariant: ComponentProps<typeof IconWrapper>['variant'] =
    color === 'neutral' ? 'subtle' : 'strong';
  const styles = useMemo(
    () => ({
      '--sscds-callout-color-background':
        color === 'neutral'
          ? 'var(--sscds-color-background-surface-dynamic)'
          : 'var(--sscds-color-info-050)',
    }),
    [color],
  );

  return (
    <Container className={CLX_COMPONENT} paddingSize="md" style={styles}>
      <Inline gap="md">
        {typeof icon === 'string' ? (
          <IconWrapper name={icon} size="md" variant={iconWrapperVariant} />
        ) : (
          <IconWrapper
            name={icon.name}
            size={icon?.size ?? 'md'}
            type={icon?.type ?? 'ssc'}
            variant={iconWrapperVariant}
          />
        )}
        <Text style={{ alignSelf: 'center' }}>{children}</Text>
      </Inline>
    </Container>
  );
};

export default Callout;
