import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { ScrollView } from './ScrollView';
import { Padbox } from '../layout';
import { SpaceSizes } from '../../theme/space.enums';

export default {
  title: 'components/ScrollView',
  component: ScrollView,
} as Meta;

export const Default: Story = () => (
  <ScrollView maxHeight={200} hasBorder>
    <Padbox paddingSize={SpaceSizes.lgPlus}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      tristique nisi sit amet sem dignissim, in vestibulum risus placerat.
      Integer vestibulum porttitor luctus. In eleifend lobortis sodales. Nam vel
      quam ultricies, imperdiet risus at, rhoncus felis. Integer ultricies
      sollicitudin augue id semper. Phasellus convallis dolor ut felis viverra
      pharetra. In non velit neque. Curabitur quis turpis vitae turpis dignissim
      commodo non a enim. Morbi suscipit augue sed volutpat congue. Sed ac elit
      iaculis sapien sagittis sollicitudin. Suspendisse quis diam non ante
      gravida aliquam. Suspendisse potenti. Duis ac magna eu elit pellentesque
      blandit. Nullam ac luctus velit, sit amet aliquam arcu. Vivamus tincidunt
      neque vitae nisl mattis efficitur. Morbi semper diam eget lacus semper,
      quis luctus ligula congue. Curabitur sollicitudin luctus elit in mollis.
      Curabitur eget arcu ipsum. Fusce ultrices nunc tellus, eget molestie elit
      finibus nec. Proin quis ex feugiat, malesuada nisi eget, convallis ex.
      Maecenas accumsan nisl eget tincidunt faucibus. Nulla sodales convallis
      nisi, at rhoncus eros mollis eget. Nunc id odio placerat, rutrum elit eu,
      commodo odio. Nunc eu ipsum placerat, laoreet nibh sit amet, venenatis
      nibh. Vivamus accumsan magna sit amet imperdiet porta. Donec sit amet erat
      et nunc condimentum laoreet. Nam vitae lacus ac massa sagittis vehicula.
      Nullam dui ligula, porttitor nec sagittis in, egestas eu turpis. Cras ac
      placerat libero. Aenean eu suscipit neque. Duis accumsan lacus purus.
      Donec eu ultrices sapien. Etiam ut odio pretium, pulvinar nisi eget,
      luctus dolor. Aliquam id velit ligula. Fusce scelerisque semper tortor,
      non posuere est imperdiet sit amet. Aliquam et tortor dictum, finibus orci
      vitae, lacinia est. Curabitur mollis nec ex id tristique. Vestibulum
      convallis ligula at convallis porta. In gravida nulla a odio laoreet, in
      lobortis ligula finibus. Morbi imperdiet dictum luctus. In consectetur sed
      felis at sagittis. Aenean sed eros nec tortor ornare convallis eget
      maximus neque. Quisque quis urna imperdiet, auctor enim nec, dignissim
      nulla. Aliquam varius risus non ex bibendum aliquam facilisis sed ante. In
      nec posuere est, ut facilisis turpis. Curabitur blandit sapien id tortor
      vulputate euismod. Vivamus iaculis dictum lacinia. In varius vulputate
      nunc, at sodales dui. Proin lobortis augue et imperdiet bibendum. Duis
      dapibus sed enim vel fermentum. Praesent eget dictum lacus, a dapibus
      turpis. Morbi non nisi et lacus maximus accumsan sit amet vitae justo.
      Pellentesque non nisl mi. Aenean sed venenatis velit.
    </Padbox>
  </ScrollView>
);
