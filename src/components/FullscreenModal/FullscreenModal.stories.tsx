import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import { FlexContainer } from '../FlexContainer';
import { Button } from '../Button';
import { ButtonVariants } from '../Button/Button.enums';
import { Link, Paragraph } from '../typography';
import FullscreenModal from './FullscreenModal';
import { FullscreenModalLayouts } from './FullscreenModal.enums';

export default {
  title: 'components/FullscreenModal',
  component: FullscreenModal,
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 500,
      source: { type: 'code' },
    },
    screenshot: {
      viewport: {
        width: 1280,
        height: 720,
      },
    },
  },
} as Meta;

const header = 'Invite vendor to SecurityScorecard';
const Content = () => (
  <Paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat velit
    vel urna molestie, vitae sodales sem hendrerit. Nunc risus nibh, rhoncus ut
    massa id, eleifend lacinia orci. Morbi porta, urna ut tincidunt efficitur,
    lorem nulla facilisis orci, sit amet rutrum augue elit ut elit. Interdum et
    malesuada fames ac ante ipsum primis in faucibus. Suspendisse consectetur
    lectus finibus diam posuere, elementum vehicula sapien placerat. In sed
    ornare ex, quis lacinia lorem. Nunc rhoncus lorem a laoreet posuere. Nam
    cursus lorem vestibulum semper pulvinar. Nunc tempus ornare urna, sit amet
    varius nisl fringilla et. Fusce volutpat urna et aliquet dictum. In nec
    cursus elit. Vivamus congue ac elit placerat suscipit. Nulla facilisi.
    Praesent fringilla, quam sit amet blandit tempor, risus leo bibendum leo, ut
    aliquet metus leo non neque. Etiam in ante arcu.
  </Paragraph>
);
const LongContent = () => (
  <>
    <Content />
    <Content />
    <Content />
    <Content />
    <Content />
    <Content />
  </>
);
const Footer = () => (
  <FlexContainer justifyContent="space-between">
    <Button variant={ButtonVariants.outline}>Email me preview</Button>
    <FlexContainer>
      <Button margin={{ right: 0.5 }} variant={ButtonVariants.outline}>
        Cancel
      </Button>
      <Button variant={ButtonVariants.solid}>Submit</Button>
    </FlexContainer>
  </FlexContainer>
);
const Sidebar: React.FC<{
  modalRef?: HTMLElement;
}> = ({ modalRef }) => {
  useEffect(() => {
    if (modalRef === null) return;

    // eslint-disable-next-line no-console
    console.log('Modal reference in sidebar', modalRef);
  }, [modalRef]);
  return (
    <nav>
      <ul>
        <li>
          <Link href="#">Sidebar link 1</Link>
        </li>
        <li>
          <Link href="#">Sidebar link 2</Link>
        </li>
        <li>
          <Link href="#">Sidebar link 3</Link>
        </li>
        <li>
          <Link href="#">Sidebar link 4</Link>
        </li>
      </ul>
    </nav>
  );
};
Sidebar.propTypes = {
  modalRef: PropTypes.instanceOf(HTMLElement),
};

export const SingleColumn6: Story = () => (
  <FullscreenModal
    content={<Content />}
    footer={<Footer />}
    header={header}
    layout={FullscreenModalLayouts.single6}
    onClose={action('close modal')}
  />
);
SingleColumn6.storyName = 'Single Column (layout: single-6)';
SingleColumn6.argTypes = {
  header: {
    control: { disable: true },
    description: 'Content of the header wrapper',
    table: { type: { summary: 'React.node' } },
  },
  content: {
    control: { disable: true },
    description: 'Content of the content wrapper',
    table: { type: { summary: 'React.node' } },
  },
  footer: {
    control: { disable: true },
    description: 'Content of the footer wrapper',
    table: { type: { summary: 'React.node' } },
  },
  sidebar: {
    control: { disable: true },
    description: 'Content of the sidebar wrapper',
    table: { type: { summary: 'React.node' } },
  },
  scrollToTopButtonLabel: {
    control: { disable: true },
    description: 'Label of the scroll to top button',
    table: { defaultValue: { summary: '"Scroll to top"' } },
  },
  onClose: {
    control: { disable: true },
    description: 'Modal window close handler',
  },
};

export const SingleColumn8: Story = () => (
  <FullscreenModal
    content={<Content />}
    footer={<Footer />}
    header={header}
    layout={FullscreenModalLayouts.single8}
    onClose={action('close modal')}
  />
);

SingleColumn8.storyName = 'Single Column (layout: single-8)';

export const SingleColumn10: Story = () => (
  <FullscreenModal
    content={<Content />}
    footer={<Footer />}
    header={header}
    layout={FullscreenModalLayouts.single10}
    onClose={action('close modal')}
  />
);

SingleColumn10.storyName = 'Single Column (layout: single-10)';

export const Sidebar4Column6: Story = () => (
  <FullscreenModal
    content={<Content />}
    footer={<Footer />}
    header={header}
    layout={FullscreenModalLayouts.sidebar46}
    sidebar={<Sidebar />}
    onClose={action('close modal')}
  />
);
Sidebar4Column6.storyName = 'Two Columns with sidebar (layout: sidebar-4-6)';

export const Sidebar4Column8: Story = () => {
  const [modalRef, setModalRef] = useState(null);
  const getModalRef = (ref) => setModalRef(ref.current);
  const timeout = useRef(null);

  const logEvent = useCallback((event) => {
    if (timeout.current) {
      window.cancelAnimationFrame(timeout.current);
    }
    timeout.current = window.requestAnimationFrame(() => {
      // eslint-disable-next-line no-console
      console.log('debounced scroll', event);
    });
  }, []);

  useEffect(() => {
    if (modalRef !== null) {
      modalRef.addEventListener('scroll', logEvent);
    }
    return () => {
      if (modalRef !== null) {
        modalRef.removeEventListener('scroll', logEvent);
      }
    };
  }, [modalRef, logEvent]);

  return (
    <FullscreenModal
      content={<LongContent />}
      footer={<Footer />}
      getModalRef={getModalRef}
      header={header}
      layout={FullscreenModalLayouts.sidebar48}
      sidebar={<Sidebar modalRef={modalRef} />}
      onClose={action('close modal')}
    />
  );
};
Sidebar4Column8.storyName = 'Two Columns with sidebar (layout: sidebar-4-8)';

export const WithLongContent: Story = () => (
  <FullscreenModal
    content={<LongContent />}
    footer={<Footer />}
    header={header}
    layout={FullscreenModalLayouts.single6}
    onClose={action('close modal')}
  />
);
