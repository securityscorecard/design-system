import React, { useContext, Fragment } from 'react';
import {
  DocsContext,
  DocsStory,
  Heading,
  DocsStoryProps,
  DocsContextProps,
  StoryData,
} from '@storybook/addon-docs/blocks';
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
    .filter((s: any) => !(s.parameters && s.parameters.docs && s.parameters.docs.disable));
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
          return isNonEmptyString(story.parameters.design.url) ? (
            <TabsState key={story.id} initial="implementation">
              <div id="implementation" title="Implementation">
                <ImplementationBlock>
                  <DocsStory {...story} expanded />
                </ImplementationBlock>
              </div>
              <div id="design" title="Design">
                <Design storyId={story.id} />
              </div>
            </TabsState>
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