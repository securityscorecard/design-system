import type { ReactNode } from 'react';
import type { BannerProps } from '../../components/Banner/Banner.types';

import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import BannersStack from './BannersStack';
import { addBanner, removeBanner } from './events';
import { BannersProvider } from './BannersProvider';
import { Banner } from '../../components';
import { renderWithProviders } from '../../utils/tests/renderWithProviders';

const wrapper = ({ children }: { children: ReactNode }) => (
  <BannersProvider>{children}</BannersProvider>
);
const getBanner = (id: string, variant: BannerProps['variant'] = 'info') => ({
  id,
  component: <Banner variant={variant}>{id}</Banner>,
});

describe('BannersManager/BannersStack', () => {
  it('should create banners from initialState', () => {
    renderWithProviders(
      <BannersStack initialState={[getBanner('test'), getBanner('test 2')]} />,
      { wrapper },
    );

    expect(screen.getByText('1 of 2')).toBeInTheDocument();
  });
  it('should correctly order banners by severity', () => {
    renderWithProviders(<BannersStack />, { wrapper });

    act(() => {
      addBanner(getBanner('error', 'error'));
      addBanner(getBanner('info', 'info'));
      addBanner(getBanner('success', 'success'));
      addBanner(getBanner('warn', 'warn'));
    });

    expect(screen.getByText('error')).toBeInTheDocument();
    userEvent.click(screen.getByRole('button', { name: /Show next banner/i }));
    expect(screen.getByText('warn')).toBeInTheDocument();
    userEvent.click(screen.getByRole('button', { name: /Show next banner/i }));
    expect(screen.getByText('success')).toBeInTheDocument();
    userEvent.click(screen.getByRole('button', { name: /Show next banner/i }));
    expect(screen.getByText('info')).toBeInTheDocument();
  });

  describe('pagination', () => {
    it('should navigate between banners', () => {
      renderWithProviders(
        <BannersStack
          initialState={[getBanner('test 2'), getBanner('test')]}
        />,
        { wrapper },
      );

      expect(screen.getByText('1 of 2')).toBeInTheDocument();
      expect(screen.getByText('test')).toBeInTheDocument();
      userEvent.click(
        screen.getByRole('button', { name: /Show next banner/i }),
      );
      expect(screen.getByText('2 of 2')).toBeInTheDocument();
      expect(screen.getByText('test 2')).toBeInTheDocument();
      userEvent.click(
        screen.getByRole('button', { name: /Show previous banner/i }),
      );
      expect(screen.getByText('1 of 2')).toBeInTheDocument();
      expect(screen.getByText('test')).toBeInTheDocument();
    });
    it('should navigate to the previous banner when last banner in stack is removed', () => {
      renderWithProviders(
        <BannersStack
          initialState={[
            getBanner('test 3'),
            getBanner('test 2'),
            getBanner('test'),
          ]}
        />,
        { wrapper },
      );
      userEvent.click(
        screen.getByRole('button', { name: /Show next banner/i }),
      );
      userEvent.click(
        screen.getByRole('button', { name: /Show next banner/i }),
      );
      expect(screen.getByText('3 of 3')).toBeInTheDocument();
      expect(screen.getByText('test 3')).toBeInTheDocument();

      userEvent.click(screen.getByRole('button', { name: /Close/i }));
      expect(screen.getByText('2 of 2')).toBeInTheDocument();
      expect(screen.getByText('test 2')).toBeInTheDocument();
    });
    it('should navigate to the next banner when first banner in stack is removed', () => {
      renderWithProviders(
        <BannersStack
          initialState={[
            getBanner('test 3'),
            getBanner('test 2'),
            getBanner('test'),
          ]}
        />,
        { wrapper },
      );

      expect(screen.getByText('1 of 3')).toBeInTheDocument();
      expect(screen.getByText('test')).toBeInTheDocument();

      userEvent.click(screen.getByRole('button', { name: /Close/i }));
      expect(screen.getByText('1 of 2')).toBeInTheDocument();
      expect(screen.getByText('test 2')).toBeInTheDocument();
    });
  });

  describe('stack manipulation', () => {
    it('should show newly created banner', () => {
      renderWithProviders(<BannersStack />, { wrapper });

      expect(screen.queryByText('test')).not.toBeInTheDocument();

      act(() => {
        addBanner(getBanner('test'));
      });
      expect(screen.getByText('1 of 1')).toBeInTheDocument();
      expect(screen.getByText('test')).toBeInTheDocument();

      act(() => {
        addBanner(getBanner('test 2'));
      });
      expect(screen.getByText('1 of 2')).toBeInTheDocument();
      expect(screen.getByText('test 2')).toBeInTheDocument();
    });
    it('should hide removed banner', () => {
      renderWithProviders(<BannersStack />, { wrapper });

      expect(
        screen.queryByRole('button', { name: /Close/i }),
      ).not.toBeInTheDocument();

      act(() => {
        addBanner(getBanner('test 2'));
        addBanner(getBanner('test'));
      });
      expect(screen.getByText('1 of 2')).toBeInTheDocument();
      expect(screen.getByText('test')).toBeInTheDocument();

      act(() => {
        removeBanner('test');
      });
      expect(screen.getByText('1 of 1')).toBeInTheDocument();
      expect(screen.getByText('test 2')).toBeInTheDocument();

      act(() => {
        removeBanner('test 2');
      });
      expect(
        screen.queryByRole('button', { name: /Close/i }),
      ).not.toBeInTheDocument();
    });
    it('should remove banner when close button is clicked', () => {
      renderWithProviders(
        <BannersStack
          initialState={[
            getBanner('test 3'),
            getBanner('test 2'),
            getBanner('test'),
          ]}
        />,
        { wrapper },
      );

      expect(screen.getByText('1 of 3')).toBeInTheDocument();
      act(() => {
        removeBanner('test');
      });
      expect(screen.getByText('1 of 2')).toBeInTheDocument();
      act(() => {
        removeBanner('test 2');
      });
      expect(screen.getByText('1 of 1')).toBeInTheDocument();
      act(() => {
        removeBanner('test 3');
      });
      expect(
        screen.queryByRole('button', { name: /Close/i }),
      ).not.toBeInTheDocument();
    });
  });
});
