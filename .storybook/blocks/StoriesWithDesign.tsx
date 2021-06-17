import React, { useContext, Fragment } from 'react';
import {
  DocsContext,
  DocsStory,
  Heading,
  DocsStoryProps,
  DocsContextProps,
  StoryData,
  Anchor,
  Subheading,
  Description,
  Canvas,
  Story,
} from '@storybook/addon-docs';
import { TabsState } from '@storybook/components'
import { Design } from 'storybook-addon-designs/blocks';
import { isNonEmptyString } from 'ramda-adjunct'
import styled from 'styled-components';

const ImplementationBlock = styled.div`
  padding-top: 25px;
`;

interface StoriesProps {
  title?: JSX.Element | string;
  includePrimary?: boolean;
}

const getDocsStories = (context: DocsContextProps): StoryData[] => {
  const { storyStore, kind } = context;

  if (!storyStore) {
    return [];
  }

  return storyStore
    .getStoriesForKind(kind)
    .filter((s: any) => !(s.parameters?.docs?.disable));
};

export const StoriesWithDesign: React.FC<StoriesProps> = ({ title, includePrimary = false }) => {
  const context = useContext(DocsContext);
  const componentStories = getDocsStories(context);

  let stories: DocsStoryProps[] = componentStories;
  if (!includePrimary) stories = stories.slice(1);

  if (!stories || stories.length === 0) {
    return null;
  }
  return (
    <>
      <Heading>{title}</Heading>
      {stories.map((story) => {
        if (story)  {
          const { id, name, withToolbar, parameters: { docs, design } } = story;
          const description = docs.description?.story;

          return isNonEmptyString(design?.url) ? (
            <Anchor storyId={id} key={id}>
              {name && <Subheading>{name}</Subheading>}
              {description && <Description markdown={description} />}
              <TabsState initial="implementation">
                <div id="implementation" title="Implementation">
                    <Canvas withToolbar={withToolbar}>
                      <Story id={id} />
                    </Canvas>
                </div>
                <div id="design" title="Design">
                  <Design storyId={id} />
                </div>
              </TabsState>
            </Anchor>
          ) : <DocsStory key={story.id} {...story} expanded />;
        }

        return null;
      })}
    </>
  );
};

StoriesWithDesign.defaultProps = {
  title: 'Stories',
};