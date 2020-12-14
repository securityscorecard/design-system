import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { FlexContainer } from '../FlexContainer';
import { Button } from '../Button';
import { ButtonVariants } from '../Button/Button.enums';
import { Paragraph } from '../typography';
import FullscreenModal from './FullscreenModal';

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

export const SmallSize: Story = () => (
  <FullscreenModal size="sm">
    <FullscreenModal.Header>
      Small - Invite vendor to SecurityScorecard
    </FullscreenModal.Header>
    <FullscreenModal.Content>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat
        velit vel urna molestie, vitae sodales sem hendrerit. Nunc risus nibh,
        rhoncus ut massa id, eleifend lacinia orci. Morbi porta, urna ut
        tincidunt efficitur, lorem nulla facilisis orci, sit amet rutrum augue
        elit ut elit. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Suspendisse consectetur lectus finibus diam posuere, elementum
        vehicula sapien placerat. In sed ornare ex, quis lacinia lorem. Nunc
        rhoncus lorem a laoreet posuere. Nam cursus lorem vestibulum semper
        pulvinar. Nunc tempus ornare urna, sit amet varius nisl fringilla et.
        Fusce volutpat urna et aliquet dictum. In nec cursus elit. Vivamus
        congue ac elit placerat suscipit. Nulla facilisi. Praesent fringilla,
        quam sit amet blandit tempor, risus leo bibendum leo, ut aliquet metus
        leo non neque. Etiam in ante arcu.
      </Paragraph>
      <Paragraph>
        Aliquam sit amet odio eros. Phasellus in porttitor lacus. Nulla et
        aliquam ligula. Cras elementum nisl finibus, rutrum enim interdum,
        finibus felis. Duis varius efficitur leo, sed luctus urna pellentesque
        et. Morbi eget lorem mollis, lobortis dolor aliquet, molestie massa.
        Morbi at interdum dui, a aliquet magna. Morbi eu lacus tortor. Sed
        faucibus odio sapien, sit amet sollicitudin nulla semper et. Etiam vel
        eros in tortor bibendum porttitor non id augue. Mauris ut leo at nisi
        porta mattis. Aliquam quis neque nisi. Pellentesque interdum bibendum
        velit nec cursus. Vivamus ac accumsan ipsum, nec pharetra eros.
      </Paragraph>
      <Paragraph>
        Duis tempor dolor ac diam maximus feugiat. Nulla feugiat eget mauris a
        convallis. Proin non mollis ante. Phasellus blandit accumsan lectus,
        eget gravida lacus consectetur et. Donec dictum arcu eget urna porta,
        eget suscipit turpis tristique. Nullam facilisis tristique arcu. Aenean
        ultrices eros est, a consequat erat lobortis a. Pellentesque justo
        metus, sollicitudin eget rutrum vitae, placerat ac velit.
      </Paragraph>
      <Paragraph>
        Ut volutpat vestibulum tristique. Sed ornare aliquam eros, vel feugiat
        ligula convallis at. Quisque ornare aliquet eros nec efficitur. Integer
        vulputate eros et metus pharetra, eu ultricies odio laoreet. Sed sit
        amet augue sollicitudin, luctus magna a, hendrerit arcu. Integer quis
        nulla sollicitudin leo malesuada egestas. Vestibulum euismod dolor ac
        tortor fringilla, et auctor ante egestas. Morbi arcu odio, semper in
        faucibus in, posuere quis mauris. Morbi vehicula ante vel nisl mollis,
        eget porttitor lorem vulputate.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat
        velit vel urna molestie, vitae sodales sem hendrerit. Nunc risus nibh,
        rhoncus ut massa id, eleifend lacinia orci. Morbi porta, urna ut
        tincidunt efficitur, lorem nulla facilisis orci, sit amet rutrum augue
        elit ut elit. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Suspendisse consectetur lectus finibus diam posuere, elementum
        vehicula sapien placerat. In sed ornare ex, quis lacinia lorem. Nunc
        rhoncus lorem a laoreet posuere. Nam cursus lorem vestibulum semper
        pulvinar. Nunc tempus ornare urna, sit amet varius nisl fringilla et.
        Fusce volutpat urna et aliquet dictum. In nec cursus elit. Vivamus
        congue ac elit placerat suscipit. Nulla facilisi. Praesent fringilla,
        quam sit amet blandit tempor, risus leo bibendum leo, ut aliquet metus
        leo non neque. Etiam in ante arcu.
      </Paragraph>
      <Paragraph>
        Aliquam sit amet odio eros. Phasellus in porttitor lacus. Nulla et
        aliquam ligula. Cras elementum nisl finibus, rutrum enim interdum,
        finibus felis. Duis varius efficitur leo, sed luctus urna pellentesque
        et. Morbi eget lorem mollis, lobortis dolor aliquet, molestie massa.
        Morbi at interdum dui, a aliquet magna. Morbi eu lacus tortor. Sed
        faucibus odio sapien, sit amet sollicitudin nulla semper et. Etiam vel
        eros in tortor bibendum porttitor non id augue. Mauris ut leo at nisi
        porta mattis. Aliquam quis neque nisi. Pellentesque interdum bibendum
        velit nec cursus. Vivamus ac accumsan ipsum, nec pharetra eros.
      </Paragraph>
      <Paragraph>
        Duis tempor dolor ac diam maximus feugiat. Nulla feugiat eget mauris a
        convallis. Proin non mollis ante. Phasellus blandit accumsan lectus,
        eget gravida lacus consectetur et. Donec dictum arcu eget urna porta,
        eget suscipit turpis tristique. Nullam facilisis tristique arcu. Aenean
        ultrices eros est, a consequat erat lobortis a. Pellentesque justo
        metus, sollicitudin eget rutrum vitae, placerat ac velit.
      </Paragraph>
      <Paragraph>
        Ut volutpat vestibulum tristique. Sed ornare aliquam eros, vel feugiat
        ligula convallis at. Quisque ornare aliquet eros nec efficitur. Integer
        vulputate eros et metus pharetra, eu ultricies odio laoreet. Sed sit
        amet augue sollicitudin, luctus magna a, hendrerit arcu. Integer quis
        nulla sollicitudin leo malesuada egestas. Vestibulum euismod dolor ac
        tortor fringilla, et auctor ante egestas. Morbi arcu odio, semper in
        faucibus in, posuere quis mauris. Morbi vehicula ante vel nisl mollis,
        eget porttitor lorem vulputate.
      </Paragraph>
    </FullscreenModal.Content>
    <FullscreenModal.Footer>
      <FlexContainer justifyContent="space-between">
        <Button variant={ButtonVariants.outline}>Email me preview</Button>
        <FlexContainer>
          <Button margin={{ right: 0.5 }} variant={ButtonVariants.outline}>
            Cancel
          </Button>
          <Button variant={ButtonVariants.solid}>Submit</Button>
        </FlexContainer>
      </FlexContainer>
    </FullscreenModal.Footer>
  </FullscreenModal>
);

export const MediumSize: Story = () => (
  <FullscreenModal size="md">
    <FullscreenModal.Header>
      Medium - Invite vendor to SecurityScorecard
    </FullscreenModal.Header>
    <FullscreenModal.Content>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat
        velit vel urna molestie, vitae sodales sem hendrerit. Nunc risus nibh,
        rhoncus ut massa id, eleifend lacinia orci. Morbi porta, urna ut
        tincidunt efficitur, lorem nulla facilisis orci, sit amet rutrum augue
        elit ut elit. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Suspendisse consectetur lectus finibus diam posuere, elementum
        vehicula sapien placerat. In sed ornare ex, quis lacinia lorem. Nunc
        rhoncus lorem a laoreet posuere. Nam cursus lorem vestibulum semper
        pulvinar. Nunc tempus ornare urna, sit amet varius nisl fringilla et.
        Fusce volutpat urna et aliquet dictum. In nec cursus elit. Vivamus
        congue ac elit placerat suscipit. Nulla facilisi. Praesent fringilla,
        quam sit amet blandit tempor, risus leo bibendum leo, ut aliquet metus
        leo non neque. Etiam in ante arcu.
      </Paragraph>
      <Paragraph>
        Aliquam sit amet odio eros. Phasellus in porttitor lacus. Nulla et
        aliquam ligula. Cras elementum nisl finibus, rutrum enim interdum,
        finibus felis. Duis varius efficitur leo, sed luctus urna pellentesque
        et. Morbi eget lorem mollis, lobortis dolor aliquet, molestie massa.
        Morbi at interdum dui, a aliquet magna. Morbi eu lacus tortor. Sed
        faucibus odio sapien, sit amet sollicitudin nulla semper et. Etiam vel
        eros in tortor bibendum porttitor non id augue. Mauris ut leo at nisi
        porta mattis. Aliquam quis neque nisi. Pellentesque interdum bibendum
        velit nec cursus. Vivamus ac accumsan ipsum, nec pharetra eros.
      </Paragraph>
    </FullscreenModal.Content>
    <FullscreenModal.Footer>
      <FlexContainer justifyContent="space-between">
        <Button variant={ButtonVariants.outline}>Email me preview</Button>
        <FlexContainer>
          <Button margin={{ right: 0.5 }} variant={ButtonVariants.outline}>
            Cancel
          </Button>
          <Button variant={ButtonVariants.solid}>Submit</Button>
        </FlexContainer>
      </FlexContainer>
    </FullscreenModal.Footer>
  </FullscreenModal>
);

export const LargeSize: Story = () => (
  <FullscreenModal size="lg">
    <FullscreenModal.Header>
      Large - Invite vendor to SecurityScorecard
    </FullscreenModal.Header>
    <FlexContainer>
      <FullscreenModal.Sidebar>SIDEBAR NAV</FullscreenModal.Sidebar>
      <FlexContainer flexDirection="column">
        <FullscreenModal.Content>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            volutpat velit vel urna molestie, vitae sodales sem hendrerit. Nunc
            risus nibh, rhoncus ut massa id, eleifend lacinia orci. Morbi porta,
            urna ut tincidunt efficitur, lorem nulla facilisis orci, sit amet
            rutrum augue elit ut elit. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Suspendisse consectetur lectus finibus diam
            posuere, elementum vehicula sapien placerat. In sed ornare ex, quis
            lacinia lorem. Nunc rhoncus lorem a laoreet posuere. Nam cursus
            lorem vestibulum semper pulvinar. Nunc tempus ornare urna, sit amet
            varius nisl fringilla et. Fusce volutpat urna et aliquet dictum. In
            nec cursus elit. Vivamus congue ac elit placerat suscipit. Nulla
            facilisi. Praesent fringilla, quam sit amet blandit tempor, risus
            leo bibendum leo, ut aliquet metus leo non neque. Etiam in ante
            arcu.
          </Paragraph>
          <Paragraph>
            Aliquam sit amet odio eros. Phasellus in porttitor lacus. Nulla et
            aliquam ligula. Cras elementum nisl finibus, rutrum enim interdum,
            finibus felis. Duis varius efficitur leo, sed luctus urna
            pellentesque et. Morbi eget lorem mollis, lobortis dolor aliquet,
            molestie massa. Morbi at interdum dui, a aliquet magna. Morbi eu
            lacus tortor. Sed faucibus odio sapien, sit amet sollicitudin nulla
            semper et. Etiam vel eros in tortor bibendum porttitor non id augue.
            Mauris ut leo at nisi porta mattis. Aliquam quis neque nisi.
            Pellentesque interdum bibendum velit nec cursus. Vivamus ac accumsan
            ipsum, nec pharetra eros.
          </Paragraph>
          <Paragraph>
            Duis tempor dolor ac diam maximus feugiat. Nulla feugiat eget mauris
            a convallis. Proin non mollis ante. Phasellus blandit accumsan
            lectus, eget gravida lacus consectetur et. Donec dictum arcu eget
            urna porta, eget suscipit turpis tristique. Nullam facilisis
            tristique arcu. Aenean ultrices eros est, a consequat erat lobortis
            a. Pellentesque justo metus, sollicitudin eget rutrum vitae,
            placerat ac velit.
          </Paragraph>
          <Paragraph>
            Ut volutpat vestibulum tristique. Sed ornare aliquam eros, vel
            feugiat ligula convallis at. Quisque ornare aliquet eros nec
            efficitur. Integer vulputate eros et metus pharetra, eu ultricies
            odio laoreet. Sed sit amet augue sollicitudin, luctus magna a,
            hendrerit arcu. Integer quis nulla sollicitudin leo malesuada
            egestas. Vestibulum euismod dolor ac tortor fringilla, et auctor
            ante egestas. Morbi arcu odio, semper in faucibus in, posuere quis
            mauris. Morbi vehicula ante vel nisl mollis, eget porttitor lorem
            vulputate.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            volutpat velit vel urna molestie, vitae sodales sem hendrerit. Nunc
            risus nibh, rhoncus ut massa id, eleifend lacinia orci. Morbi porta,
            urna ut tincidunt efficitur, lorem nulla facilisis orci, sit amet
            rutrum augue elit ut elit. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Suspendisse consectetur lectus finibus diam
            posuere, elementum vehicula sapien placerat. In sed ornare ex, quis
            lacinia lorem. Nunc rhoncus lorem a laoreet posuere. Nam cursus
            lorem vestibulum semper pulvinar. Nunc tempus ornare urna, sit amet
            varius nisl fringilla et. Fusce volutpat urna et aliquet dictum. In
            nec cursus elit. Vivamus congue ac elit placerat suscipit. Nulla
            facilisi. Praesent fringilla, quam sit amet blandit tempor, risus
            leo bibendum leo, ut aliquet metus leo non neque. Etiam in ante
            arcu.
          </Paragraph>
          <Paragraph>
            Aliquam sit amet odio eros. Phasellus in porttitor lacus. Nulla et
            aliquam ligula. Cras elementum nisl finibus, rutrum enim interdum,
            finibus felis. Duis varius efficitur leo, sed luctus urna
            pellentesque et. Morbi eget lorem mollis, lobortis dolor aliquet,
            molestie massa. Morbi at interdum dui, a aliquet magna. Morbi eu
            lacus tortor. Sed faucibus odio sapien, sit amet sollicitudin nulla
            semper et. Etiam vel eros in tortor bibendum porttitor non id augue.
            Mauris ut leo at nisi porta mattis. Aliquam quis neque nisi.
            Pellentesque interdum bibendum velit nec cursus. Vivamus ac accumsan
            ipsum, nec pharetra eros.
          </Paragraph>
          <Paragraph>
            Duis tempor dolor ac diam maximus feugiat. Nulla feugiat eget mauris
            a convallis. Proin non mollis ante. Phasellus blandit accumsan
            lectus, eget gravida lacus consectetur et. Donec dictum arcu eget
            urna porta, eget suscipit turpis tristique. Nullam facilisis
            tristique arcu. Aenean ultrices eros est, a consequat erat lobortis
            a. Pellentesque justo metus, sollicitudin eget rutrum vitae,
            placerat ac velit.
          </Paragraph>
          <Paragraph>
            Ut volutpat vestibulum tristique. Sed ornare aliquam eros, vel
            feugiat ligula convallis at. Quisque ornare aliquet eros nec
            efficitur. Integer vulputate eros et metus pharetra, eu ultricies
            odio laoreet. Sed sit amet augue sollicitudin, luctus magna a,
            hendrerit arcu. Integer quis nulla sollicitudin leo malesuada
            egestas. Vestibulum euismod dolor ac tortor fringilla, et auctor
            ante egestas. Morbi arcu odio, semper in faucibus in, posuere quis
            mauris. Morbi vehicula ante vel nisl mollis, eget porttitor lorem
            vulputate.
          </Paragraph>
        </FullscreenModal.Content>
        <FullscreenModal.Footer>
          <FlexContainer justifyContent="space-between">
            <Button variant={ButtonVariants.outline}>Email me preview</Button>
            <FlexContainer>
              <Button margin={{ right: 0.5 }} variant={ButtonVariants.outline}>
                Cancel
              </Button>
              <Button variant={ButtonVariants.solid}>Submit</Button>
            </FlexContainer>
          </FlexContainer>
        </FullscreenModal.Footer>
      </FlexContainer>
    </FlexContainer>
  </FullscreenModal>
);
