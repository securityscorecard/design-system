import { Meta, StoryObj } from '@storybook/react';
import { HttpResponse, delay, http } from 'msw';

import CompanyLogo from './CompanyLogo';
import Inline from '../layout/Inline/Inline';

const meta: Meta<typeof CompanyLogo> = {
  component: CompanyLogo,
  args: {
    alt: 'Company Logo',
    size: 'xl',
  },
  tags: ['!autodocs', 'new'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: '/store/companies/logo.jpg',
  },
  parameters: {
    msw: {
      handlers: {
        imageSuccess: [
          http.get('/store/companies/logo.jpg', async () => {
            const buffer = await fetch('./images/logo.jpg').then((response) =>
              response.arrayBuffer(),
            );

            return HttpResponse.arrayBuffer(buffer, {
              headers: {
                'Content-Type': 'image/jpg',
              },
            });
          }),
        ],
      },
    },
    screenshot: { skip: true },
  },
};

export const Loading: Story = {
  args: {
    src: '/store/companies/loading.jpg',
  },
  parameters: {
    msw: {
      handlers: {
        imageLoading: [
          http.get('/store/companies/loading.jpg', async () => {
            await delay('infinite');

            return HttpResponse.json();
          }),
        ],
      },
    },
  },
};

export const Error: Story = {
  args: {
    src: '/store/companies/error.jpg',
  },
  parameters: {
    msw: {
      handlers: {
        imageError: [
          http.get('/store/companies/error.jpg', async () => {
            return new HttpResponse(null, { status: 404 });
          }),
        ],
      },
    },
  },
};

export const Sizes: Story = {
  args: {
    src: '/store/companies/logo.jpg',
  },
  parameters: {
    msw: {
      handlers: {
        imageSuccess: [
          http.get('/store/companies/logo.jpg', async () => {
            const buffer = await fetch('./images/logo.jpg').then((response) =>
              response.arrayBuffer(),
            );

            return HttpResponse.arrayBuffer(buffer, {
              headers: {
                'Content-Type': 'image/jpg',
              },
            });
          }),
        ],
      },
    },
    screenshot: { skip: true },
  },
  render: (args) => (
    <Inline align="flex-start" gap="8x" justify="center">
      <CompanyLogo {...args} size="sm" />
      <CompanyLogo {...args} size="md" />
      <CompanyLogo {...args} size="lg" />
      <CompanyLogo {...args} size="xl" />
    </Inline>
  ),
};
