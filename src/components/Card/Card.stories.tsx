import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import { SpaceSizes } from '../../theme';
import { Paragraph } from '../typography';
import { Stack } from '../layout';
import Card from './Card';
import CardHeader from './CardHeader';
import CardActions from './CardActions';
import CardContent from './CardContent';
import CardMedia from './CardMedia';
import { CardProps } from './Card.types';

const image =
  'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwMCA1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+PC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAwIiBoZWlnaHQ9IjUwMCIgc3R5bGU9ImZpbGw6IHJnYig0MiwgNDIsIDQyKTsiPjwvcmVjdD4KICA8ZyBzdHlsZT0iIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjcyNTgzNSwgMCwgMCwgMC43MjU4MzUsIDEyNi42MTk1OTgsIDY5LjM1OTYwNCkiPgogICAgPHJlY3QgeD0iNjAwLjY0NyIgeT0iMTQzLjg3MiIgd2lkdGg9IjMwMC4zNDYiIGhlaWdodD0iNTMyLjQzMiIgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNzIxMTQsIC0wLjk2MjI2NSwgMC45NjIyNjUsIDAuMjcyMTE0LCA2My41MTMzMTMsIDgxNi43ODc1MzcpIiBzdHlsZT0iZmlsbDogcmdiKDEsIDgzLCAxNTMpOyI+PC9yZWN0PgogICAgPGNpcmNsZSBjeD0iNDU1Ljk4IiBjeT0iMS4wMzEiIHI9IjQuMjQzIiBzdHlsZT0iZmlsbDogcmdiKDEyOCwgMTg2LCAyMzUpOyI+PC9jaXJjbGU+CiAgICA8Y2lyY2xlIGN4PSI0NjkuMDQ2IiBjeT0iNC43MjUiIHI9IjQuMjQzIiBzdHlsZT0iZmlsbDogcmdiKDEyOCwgMTg2LCAyMzUpOyI+PC9jaXJjbGU+CiAgICA8Y2lyY2xlIGN4PSI0ODIuMTEyIiBjeT0iOC40MiIgcj0iNC4yNDMiIHN0eWxlPSJmaWxsOiByZ2IoMTI4LCAxODYsIDIzNSk7Ij48L2NpcmNsZT4KICAgIDxwYXRoIGQ9Ik0gNzE5LjAzNSAxNzIuMzMxIEMgNzEyLjE3NiAxNzEuMDM1IDcwNS4xMjEgMTcxLjIwMSA2OTguMzMxIDE3Mi44MiBDIDcwMC4zMDggMTY2LjAzMSA3MDAuODA3IDE1OC44OTggNjk5Ljc5NCAxNTEuOSBDIDY5Mi44MDIgMTU0LjQzMSA2ODYuNDc1IDE1OC41MTQgNjgxLjI4OCAxNjMuODQzIEMgNjc5LjY2IDE1Ni41ODcgNjc2LjQwOCAxNDkuNzk1IDY3MS43NzYgMTQzLjk3NyBDIDY2Ny4yNDkgMTQ5LjQwOCA2NjMuOTM5IDE1NS43NDcgNjYyLjA2OCAxNjIuNTY1IEMgNjU3LjEzMSAxNTcuNjMxIDY1MS4yMDggMTUzLjc5NCA2NDQuNjg2IDE1MS4zMDcgQyA2NDQuNjg2IDE1MS4zMDcgNjQxLjU5NiAxNjcuMDIzIDY0OS4wMzUgMTc5LjkxOSBDIDY1NS42NTcgMTkxLjM5NyA2NjguMzc5IDE5Ni43NjggNjcxLjA5OSAxOTcuODExIEwgNjcxLjE2MiAxOTcuODg4IEwgNjcxLjE5NiAxOTcuODQ5IEMgNjcxLjQ3MiAxOTcuOTUzIDY3MS42MjcgMTk4LjAwNyA2NzEuNjI3IDE5OC4wMDcgQyA2NzEuNjI3IDE5OC4wMDcgNjcxLjY4NSAxOTcuNzA1IDY3MS43NjYgMTk3LjE2NiBDIDY3MS44MTUgMTk3LjEwNiA2NzEuODY0IDE5Ny4wNDQgNjcxLjkxOCAxOTYuOTc3IEMgNjcxLjkyOSAxOTcuMDYzIDY3MS45MzkgMTk3LjE0MSA2NzEuOTQ5IDE5Ny4yMTggQyA2NzEuNzM1IDE5Ny43MTkgNjcxLjYyNyAxOTguMDA3IDY3MS42MjcgMTk4LjAwNyBDIDY3MS42MjcgMTk4LjAwNyA2NzEuNzg3IDE5OC4wNDIgNjcyLjA3NyAxOTguMDk4IEwgNjcyLjA4NSAxOTguMTQ5IEwgNjcyLjE4IDE5OC4xMTcgQyA2NzUuMDQzIDE5OC42NTIgNjg4LjY5NCAyMDAuNzM5IDcwMC4zNDUgMTk0LjQyOCBDIDcxMy40MzcgMTg3LjMzOCA3MTkuMDM1IDE3Mi4zMzEgNzE5LjAzNSAxNzIuMzMxIFoiIHN0eWxlPSJmaWxsOiByZ2IoMTI4LCAxODYsIDIzNSk7Ij48L3BhdGg+CiAgICA8Y2lyY2xlIGN4PSI2OTMuNjQzIiBjeT0iMTIxLjE1NCIgcj0iMTEuMDMyIiBzdHlsZT0iZmlsbDogcmdiKDEyOCwgMTg2LCAyMzUpOyI+PC9jaXJjbGU+CiAgICA8cmVjdCB4PSI1ODEuNDg0IiB5PSI0MjEuNTcxIiB3aWR0aD0iMzQ0LjU0OSIgaGVpZ2h0PSI3LjQ5NiIgdHJhbnNmb3JtPSJtYXRyaXgoMC45NjIyNjUsIDAuMjcyMTE0LCAtMC4yNzIxMTQsIDAuOTYyMjY1LCA1NS43OTMyMzIsIC0zOTMuMjU2OTU4KSIgc3R5bGU9ImZpbGw6IHJnYigxMjgsIDE4NiwgMjM1KTsiPjwvcmVjdD4KICAgIDxyZWN0IHg9IjYwMC42NzIiIHk9IjQyNi41MDMiIHdpZHRoPSI1OS40MDUiIGhlaWdodD0iNTkuNDA1IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjk2MjI2NSwgMC4yNzIxMTQsIC0wLjI3MjExNCwgMC45NjIyNjUsIDU5LjU0MTc4MiwgLTM1OC41MTY5NjgpIiBzdHlsZT0iZmlsbDogcmdiKDEyOCwgMTg2LCAyMzUpOyI+PC9yZWN0PgogICAgPHJlY3QgeD0iNzA2LjgzMyIgeT0iNDU2LjUyMyIgd2lkdGg9IjU5LjQwNSIgaGVpZ2h0PSI1OS40MDUiIHRyYW5zZm9ybT0ibWF0cml4KDAuOTYyMjY1LCAwLjI3MjExNCwgLTAuMjcyMTE0LCAwLjk2MjI2NSwgNzEuNzE2Nzc0LCAtMzg2LjI3MTk0MikiIHN0eWxlPSJmaWxsOiByZ2IoMTI4LCAxODYsIDIzNSk7Ij48L3JlY3Q+CiAgICA8cmVjdCB4PSI4MTIuOTk0IiB5PSI0ODYuNTQ0IiB3aWR0aD0iNTkuNDA1IiBoZWlnaHQ9IjU5LjQwNSIgdHJhbnNmb3JtPSJtYXRyaXgoMC45NjIyNjUsIDAuMjcyMTE0LCAtMC4yNzIxMTQsIDAuOTYyMjY1LCA4My44OTE3NTQsIC00MTQuMDI2ODg2KSIgc3R5bGU9ImZpbGw6IHJnYigxMjgsIDE4NiwgMjM1KTsiPjwvcmVjdD4KICAgIDxyZWN0IHg9IjU5Ni4zMDIiIHk9IjQ5Ni4xMjQiIHdpZHRoPSI0NC4xMjkiIGhlaWdodD0iNS4wOTIiIHRyYW5zZm9ybT0ibWF0cml4KDAuOTYyMjY1LCAwLjI3MjExNCwgLTAuMjcyMTE0LCAwLjk2MjI2NSwgNzAuNjQzNzc2LCAtMzUzLjY0NzAwMykiIHN0eWxlPSJmaWxsOiByZ2IoMTI4LCAxODYsIDIzNSk7Ij48L3JlY3Q+CiAgICA8cmVjdCB4PSI3MDIuNDYzIiB5PSI1MjYuMTQ0IiB3aWR0aD0iNDQuMTI5IiBoZWlnaHQ9IjUuMDkyIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjk2MjI2NSwgMC4yNzIxMTQsIC0wLjI3MjExNCwgMC45NjIyNjUsIDgyLjgxODc1NiwgLTM4MS40MDE5NDcpIiBzdHlsZT0iZmlsbDogcmdiKDEyOCwgMTg2LCAyMzUpOyI+PC9yZWN0PgogICAgPHJlY3QgeD0iODA4LjYyMyIgeT0iNTU2LjE2NSIgd2lkdGg9IjQ0LjEyOSIgaGVpZ2h0PSI1LjA5MiIgdHJhbnNmb3JtPSJtYXRyaXgoMC45NjIyNjUsIDAuMjcyMTE0LCAtMC4yNzIxMTQsIDAuOTYyMjY1LCA5NC45OTM3NDQsIC00MDkuMTU2ODkxKSIgc3R5bGU9ImZpbGw6IHJnYigxMjgsIDE4NiwgMjM1KTsiPjwvcmVjdD4KICAgIDxlbGxpcHNlIGN4PSIyOTMuNjUxIiBjeT0iMzc5LjMwMiIgcng9IjI4NCIgcnk9IjEwLjUiIHN0eWxlPSJmaWxsOiByZ2IoOTMsIDkzLCA5Myk7Ij48L2VsbGlwc2U+CiAgICA8ZWxsaXBzZSBjeD0iNzk4LjE3OSIgY3k9IjQ5OC4zMDIiIHJ4PSIyMjEiIHJ5PSIxMC41IiBzdHlsZT0iZmlsbDogcmdiKDkzLCA5MywgOTMpOyI+PC9lbGxpcHNlPgogICAgPHBhdGggZD0iTSA2ODkuNzg3IDQxNi44MDIgTCA3NTMuNTQ1IDQxNi44MDIgTCA3NTMuNTQ1IDQ0My40NjUgTCA3MTYuNDUxIDQ0My40NjUgTCA3MTYuNDUxIDQ3MC4xMjkgTCA3NTMuNTQ4IDQ3MC4xMjkgTCA3NTMuNTQ4IDQ5Ni43OTEgTCA2ODkuNzg3IDQ5Ni43OTEgWiBNIDc2Ni4yOTggNDE2LjgwMiBMIDgzMC4wNTggNDE2LjgwMiBMIDgzMC4wNTggNDM5Ljk4NyBMIDc5Mi45NjIgNDM5Ljk4NyBMIDc5Mi45NjIgNDQ0LjYyNCBMIDgzMC4wNTggNDQ0LjYyNCBMIDgzMC4wNTggNDk3Ljk1MSBMIDc2Ni4zIDQ5Ny45NTEgTCA3NjYuMyA0NzMuNjA0IEwgODAzLjM5NiA0NzMuNjA0IEwgODAzLjM5NiA0NjguOTY3IEwgNzY2LjI5NyA0NjguOTY3IEwgNzY2LjI5NyA0MTYuODAyIFogTSA4NDIuODExIDQxNi44MDIgTCA5MDYuNTcxIDQxNi44MDIgTCA5MDYuNTcxIDQzOS45ODcgTCA4NjkuNDc1IDQzOS45ODcgTCA4NjkuNDc1IDQ0NC42MjQgTCA5MDYuNTcxIDQ0NC42MjQgTCA5MDYuNTcxIDQ5Ny45NTEgTCA4NDIuODExIDQ5Ny45NTEgTCA4NDIuODExIDQ3My42MDQgTCA4NzkuOTA3IDQ3My42MDQgTCA4NzkuOTA3IDQ2OC45NjcgTCA4NDIuODEzIDQ2OC45NjcgTCA4NDIuODEzIDQxNi44MDIgWiIgc3R5bGU9ImZpbGw6IHJnYigyNDksIDI0OSwgMjQ5KTsiPjwvcGF0aD4KICAgIDxwYXRoIGQ9Ik0gMTMyLjU0MSAyOTQuODAyIEwgMTU4Ljg0MyAyOTQuODAyIEwgMTU4Ljg0MyAzMjAuNzg4IEwgMTgyLjkwNCAzMjAuNzg4IEwgMTgyLjkwNCAyOTQuODAyIEwgMjA5LjIwOCAyOTQuODAyIEwgMjA5LjIwOCAzNzMuNDk1IEwgMTgyLjkwNiAzNzMuNDk1IEwgMTgyLjkwNiAzNDcuMTQ0IEwgMTU4Ljg0NSAzNDcuMTQ0IEwgMTU4Ljg0NSAzNzMuNDk1IEwgMTMyLjU0MyAzNzMuNDk1IEwgMTMyLjU0MyAyOTQuODAyIFogTSAyNDMuNzk1IDMyMC44OTggTCAyMjAuNjQzIDMyMC44OTggTCAyMjAuNjQzIDI5NC44MDIgTCAyOTMuMjY5IDI5NC44MDIgTCAyOTMuMjY5IDMyMC44OTggTCAyNzAuMTAyIDMyMC44OTggTCAyNzAuMTAyIDM3My40OTUgTCAyNDMuOCAzNzMuNDk1IEwgMjQzLjggMzIwLjg5OCBMIDI0My43OTUgMzIwLjg5OCBaIE0gMzA0Ljc5NCAyOTQuODAyIEwgMzMyLjIyIDI5NC44MDIgTCAzNDkuMDkgMzIyLjQ1MiBMIDM2NS45NDQgMjk0LjgwMiBMIDM5My4zODEgMjk0LjgwMiBMIDM5My4zODEgMzczLjQ5NSBMIDM2Ny4xODYgMzczLjQ5NSBMIDM2Ny4xODYgMzM0LjQ5IEwgMzQ5LjA5IDM2Mi40NyBMIDM0OC42MzYgMzYyLjQ3IEwgMzMwLjUyOSAzMzQuNDkgTCAzMzAuNTI5IDM3My40OTUgTCAzMDQuNzk0IDM3My40OTUgWiBNIDQwNi40NyAyOTQuODAyIEwgNDMyLjc4MSAyOTQuODAyIEwgNDMyLjc4MSAzNDcuNDg0IEwgNDY5Ljc2OSAzNDcuNDg0IEwgNDY5Ljc2OSAzNzMuNDk1IEwgNDA2LjQ2OSAzNzMuNDk1IEwgNDA2LjQ2OSAyOTQuODAyIFoiIHN0eWxlPSJmaWxsOiByZ2IoMjQ5LCAyNDksIDI0OSk7Ij48L3BhdGg+CiAgPC9nPgo8L3N2Zz4=';

const actions = [
  {
    label: 'View details',
    name: 'view-details',
    onClick: action('click-view-details'),
  },
  {
    label: 'Share with friend',
    name: 'share-button',
    onClick: action('click-share-button'),
  },
];

export default {
  title: 'components/Card',
  component: Card,
  subcomponents: { CardHeader, CardContent, CardMedia, CardActions },
  decorators: [(storyFn) => <div>{storyFn()}</div>],
  argTypes: {
    children: { control: { disabled: true } },
  },
} as Meta;

const CardHeaderTemplate = () => (
  <CardHeader actions={actions} subtitle="Card subtitle" title="Card title" />
);

const CardContentTemplate = () => (
  <CardContent>
    <Paragraph margin="none">
      Etiam id laoreet tellus. Pellentesque interdum porttitor iaculis. Ut leo
      urna, lobortis ac fermentum at, efficitur vel lorem. Cras viverra tempor
      augue, sed rutrum neque vestibulum at.
    </Paragraph>
  </CardContent>
);

const CardActionsTemplate = () => <CardActions actions={actions} />;

const CardMediaTemplate = ({
  width,
  height = '15rem',
}: {
  width?: string;
  height?: string;
}) => <CardMedia alt="test" mediaSrc={image} style={{ height, width }} />;

const CardTemplate: Story<CardProps> = ({ direction, ...args }) => (
  <div style={{ width: direction === 'vertical' ? '400px' : 'auto' }}>
    <Card direction={direction} {...args} />
  </div>
);

export const Playground = CardTemplate.bind({});
Playground.args = {
  direction: 'vertical',
  children: (
    <>
      <CardMediaTemplate />
      <Stack gap={SpaceSizes.md}>
        <CardHeaderTemplate />
        <CardContentTemplate />
        <CardActionsTemplate />
      </Stack>
    </>
  ),
};

export const WithCardMediaOnTop = CardTemplate.bind({});
WithCardMediaOnTop.args = {
  ...Playground.args,
  children: (
    <>
      <CardMediaTemplate />
      <CardHeaderTemplate />
      <CardContentTemplate />
    </>
  ),
};
export const WithCardMediaInMiddle = CardTemplate.bind({});
WithCardMediaInMiddle.args = {
  ...Playground.args,
  children: (
    <>
      <CardHeaderTemplate />
      <CardMediaTemplate />
      <CardContentTemplate />
    </>
  ),
};

export const WithCardMediaOnBottom = CardTemplate.bind({});
WithCardMediaOnBottom.args = {
  ...Playground.args,
  children: (
    <>
      <CardHeaderTemplate />
      <CardContentTemplate />
      <CardMediaTemplate />
    </>
  ),
};
export const WithCardMediaOnLeft = CardTemplate.bind({});
WithCardMediaOnLeft.args = {
  direction: 'horizontal',
  children: (
    <>
      <CardMediaTemplate height="auto" width="400px" />
      <Stack align="space-between" gap={SpaceSizes.md}>
        <Stack gap={SpaceSizes.md}>
          <CardHeaderTemplate />
          <CardContentTemplate />
        </Stack>
        <CardActionsTemplate />
      </Stack>
    </>
  ),
};
export const WithCardMediaOnRight = CardTemplate.bind({});
WithCardMediaOnRight.args = {
  direction: 'horizontal',
  children: (
    <>
      <Stack align="space-between" gap={SpaceSizes.md}>
        <Stack gap={SpaceSizes.md}>
          <CardHeaderTemplate />
          <CardContentTemplate />
        </Stack>
        <CardActionsTemplate />
      </Stack>
      <CardMediaTemplate height="auto" width="400px" />
    </>
  ),
};

export const CardMediaWithImageElement = CardTemplate.bind({});
CardMediaWithImageElement.args = {
  ...Playground.args,
  children: (
    <>
      <CardMedia<HTMLImageElement> alt="image" as="img" mediaSrc={image} />
      <CardHeaderTemplate />
      <CardContentTemplate />
    </>
  ),
};

export const CardMediaWithBackgroundImage = CardTemplate.bind({});
CardMediaWithBackgroundImage.args = {
  ...Playground.args,
  children: (
    <>
      <CardMedia mediaSrc={image} style={{ height: '15rem' }} />
      <CardHeaderTemplate />
      <CardContentTemplate />
    </>
  ),
};

export const CardMediaWithNonMediaElement = CardTemplate.bind({});
CardMediaWithNonMediaElement.args = {
  ...Playground.args,
  children: (
    <>
      <CardMedia>
        <svg
          id="chart"
          style={{ width: '100%', display: 'block' }}
          viewBox="0 0 1000 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0,494.7182855624581 C 10.6,493.07393923821587 31.8,491.2396227332362 53,486.4965539412469 C 74.2,481.75348514925753 84.8,478.16260688438416 106,471.00294160251144 C 127.2,463.8432763206387 137.8,461.44684576509195 159,450.69822753188316 C 180.2,439.9496092986744 190.8,424.2420977301355 212,417.2598504364676 C 233.2,410.2776031427997 243.8,423.7977728718481 265,415.7869910635437 C 286.2,407.7762092552394 296.8,381.7911971107782 318,377.20594139494585 C 339.2,372.6206856791135 349.8,395.53249792603594 371,392.8607124843818 C 392.2,390.18892704272764 402.8,376.6154601777914 424,363.8470141866752 C 445.2,351.078568195559 455.8,332.9789293427127 477,329.01848252880063 C 498.2,325.05803571488855 508.8,342.5612880605207 530,344.0447801171149 C 551.2,345.52827217370907 561.8,337.2505431220925 583,336.4359428117715 C 604.2,335.6213425014505 614.8,370.69619829198535 636,339.9717785655099 C 657.2,309.24735883903446 667.8,195.12162254313537 689,182.81384417939415 C 710.2,170.50606581565293 720.8,258.7192174181375 742,278.4328867468038 C 763.2,298.1465560754701 773.8,287.0545036393037 795,281.3821908227257 C 816.2,275.7098780061478 826.8,258.7899997487605 848,250.0713226639141 C 869.2,241.35264557906763 879.8,259.6940720686397 901,237.78880539849342 C 922.2,215.8835387283472 932.8,171.5299055784654 954,140.5449893131829 C 975.2,109.5600730479004 996.4,94.40037712030139 1007,82.864224072081,L 1000 500,L 0 500Z"
            fill="#0275d81a"
          />
          <path
            d="M 0,494.7182855624581 C 10.6,493.07393923821587 31.8,491.2396227332362 53,486.4965539412469 C 74.2,481.75348514925753 84.8,478.16260688438416 106,471.00294160251144 C 127.2,463.8432763206387 137.8,461.44684576509195 159,450.69822753188316 C 180.2,439.9496092986744 190.8,424.2420977301355 212,417.2598504364676 C 233.2,410.2776031427997 243.8,423.7977728718481 265,415.7869910635437 C 286.2,407.7762092552394 296.8,381.7911971107782 318,377.20594139494585 C 339.2,372.6206856791135 349.8,395.53249792603594 371,392.8607124843818 C 392.2,390.18892704272764 402.8,376.6154601777914 424,363.8470141866752 C 445.2,351.078568195559 455.8,332.9789293427127 477,329.01848252880063 C 498.2,325.05803571488855 508.8,342.5612880605207 530,344.0447801171149 C 551.2,345.52827217370907 561.8,337.2505431220925 583,336.4359428117715 C 604.2,335.6213425014505 614.8,370.69619829198535 636,339.9717785655099 C 657.2,309.24735883903446 667.8,195.12162254313537 689,182.81384417939415 C 710.2,170.50606581565293 720.8,258.7192174181375 742,278.4328867468038 C 763.2,298.1465560754701 773.8,287.0545036393037 795,281.3821908227257 C 816.2,275.7098780061478 826.8,258.7899997487605 848,250.0713226639141 C 869.2,241.35264557906763 879.8,259.6940720686397 901,237.78880539849342 C 922.2,215.8835387283472 932.8,171.5299055784654 954,140.5449893131829 C 975.2,109.5600730479004 996.4,94.40037712030139 1007,82.864224072081"
            fill="none"
            stroke="#0275d8"
            strokeWidth="4px"
          />
        </svg>
      </CardMedia>
      <CardHeaderTemplate />
      <CardContentTemplate />
    </>
  ),
};

export const CardMediaWithVideo = CardTemplate.bind({});
CardMediaWithVideo.args = {
  ...Playground.args,
  children: (
    <>
      <CardMedia<HTMLVideoElement>
        as="video"
        mediaSrc="https://vod-progressive.akamaized.net/exp=1645198892~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F365%2F27%2F676828330%2F3118616272.mp4~hmac=acd6dc57f710956af000af6fc01f8f629d6b6b611bd6581d157bb38cdec202a7/vimeo-prod-skyfire-std-us/01/365/27/676828330/3118616272.mp4"
        style={{ height: '14rem' }}
        type="video/mp4"
        controls
      />
      <CardHeaderTemplate />
      <CardContentTemplate />
    </>
  ),
};
CardMediaWithVideo.parameters = {
  screenshot: { skip: true },
};
