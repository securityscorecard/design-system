import React, { useEffect, useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import { useDeepCompareEffect } from 'use-deep-compare';
import { pluck } from 'ramda';

import { BannersProvider, useBanners } from './BannersProvider';
import {
  addBanner as addBannerEvent,
  removeBanner as removeBannerEvent,
} from './events';
import BannersStack from './BannersStack';
import {
  Banner,
  Button,
  Error,
  Inline,
  Input,
  Label,
  Padbox,
  Select,
  Stack,
  Strong,
  Text,
} from '../../components';
import type { BannerProps } from '../../components/Banner/Banner.types';
import type { BannersStackProps } from './types';
import { BannerVariants } from '../../components/Banner/Banner.enums';

export default {
  title: 'managers/BannersManager/BannersStack',
  component: BannersStack,
  decorators: [(storyFn) => <BannersProvider>{storyFn()}</BannersProvider>],
  parameters: { screenshot: { skip: true } },
} as Meta;

const BannerTemplate = ({
  id,
  variant = 'info',
  ...props
}: {
  id: string;
  variant?: BannerProps['variant'];
}) => (
  <Banner variant={variant} {...props}>
    <Strong>ID: {id}</Strong> - Hi, I&apos;m a cool stacked {variant} banner!
  </Banner>
);

const BannersStackTemplate: Story<BannersStackProps> = (args) => (
  <BannersStack {...args} />
);

const validateId = (id, usedIds) => usedIds.indexOf(id) !== -1;

const Controls = () => {
  const [id, setId] = useState('');
  const [variant, setVariant] = useState(null);
  const [usedIds, setUsedIds] = useState([]);

  const { instances, addBanner, removeBanner } = useBanners();

  useDeepCompareEffect(() => {
    setUsedIds(pluck('id', instances));
  }, [instances]);

  const composeBanner = () => ({
    id: id || undefined,
    component: (
      <BannerTemplate id={id || 'dynamic id'} variant={variant?.value} />
    ),
  });
  const isIdUsed = validateId(id, usedIds);
  return (
    <Stack gap="md">
      <Inline gap="md">
        <div>
          <Label htmlFor="bannerId">Banner ID</Label>
          <Input
            id="bannerId"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          {isIdUsed && <Error>⚠️ ID is already used</Error>}
        </div>
        <div style={{ width: '10rem' }}>
          <Label htmlFor="variant">Banner variant</Label>
          <Select
            id="variant"
            options={[
              { label: 'Info', value: BannerVariants.info },
              { label: 'Success', value: BannerVariants.success },
              { label: 'Warn', value: BannerVariants.warn },
              { label: 'Error', value: BannerVariants.error },
            ]}
            value={variant}
            onChange={setVariant}
          />
        </div>
      </Inline>
      <Inline align="center" gap="md">
        <Text>Trigger from hook:</Text>
        <Button
          isDisabled={isIdUsed}
          onClick={() => {
            if (!isIdUsed) {
              addBanner(composeBanner());
              setId('');
            }
          }}
        >
          Add banner
        </Button>
        <Button
          isDisabled={!isIdUsed}
          onClick={() => {
            if (isIdUsed) {
              removeBanner(id);
              setId('');
            }
          }}
        >
          Remove banner
        </Button>
      </Inline>
      <Inline align="center" gap="md">
        <Text>Trigger via event:</Text>
        <Button
          isDisabled={isIdUsed}
          onClick={() => {
            if (!isIdUsed) {
              addBannerEvent(composeBanner());
              setId('');
            }
          }}
        >
          Add banner
        </Button>
        <Button
          isDisabled={!isIdUsed}
          onClick={() => {
            if (isIdUsed) {
              removeBannerEvent(id);
              setId('');
            }
          }}
        >
          Remove banner
        </Button>
      </Inline>
    </Stack>
  );
};

export const Playground: Story<BannersStackProps> = (args) => (
  <Stack gap="md">
    <Controls />
    <Padbox
      paddingSize="md"
      style={{ border: '1px solid deepskyblue', backgroundColor: 'aliceblue' }}
    >
      <Stack gap="md">
        <Text as="div" isBold>
          BannersStack area
        </Text>
        <BannersStack {...args} />
        <BannersStack {...args} />
      </Stack>
    </Padbox>
  </Stack>
);

export const DefaultStory: Story<BannersStackProps> = (args) => {
  useEffect(() => {
    addBannerEvent({
      id: 'test1',
      component: <BannerTemplate id="test1" />,
    });
  }, []);

  return <BannersStack {...args} />;
};

export const WithInitialState = BannersStackTemplate.bind({});
WithInitialState.args = {
  initialState: [
    { id: 'init-1', component: <BannerTemplate id="init-1" /> },
    { id: 'init-2', component: <BannerTemplate id="init-2" variant="warn" /> },
  ],
};

export const OrderedBanners = BannersStackTemplate.bind({});
OrderedBanners.args = {
  initialState: [
    { id: 'info', component: <BannerTemplate id="info" variant="info" /> },
    {
      id: 'success',
      component: <BannerTemplate id="success" variant="success" />,
    },
    { id: 'warn', component: <BannerTemplate id="warn" variant="warn" /> },
    { id: 'error', component: <BannerTemplate id="error" variant="error" /> },
  ],
};
