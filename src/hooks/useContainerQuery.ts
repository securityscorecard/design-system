import { useContainerQuery as useRCQ } from 'react-container-query';

interface ContainerQueries {
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
}
interface Query {
  [key: string]: ContainerQueries;
}

export const useContainerQuery = (cq: Query) => {
  const [query, containerRef] = useRCQ(cq, undefined);

  // RCQ is unstable in visual tests, so we need to disable it to avoid false positives
  // eslint-disable-next-line no-underscore-dangle
  if (window?.__STORYBOOK_PREVIEW__) {
    return [{}, containerRef];
  }

  return [query, containerRef];
};
