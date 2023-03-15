import React, { useState } from 'react';
import { indexOf, sort } from 'ramda';
import { useDeepCompareEffect } from 'use-deep-compare';

import { useBanners } from './BannersProvider';
import type { BannersStackProps } from './types';

const SORT_ORDER = ['error', 'warn', 'success', 'info'];
const cmp = (a, b) => {
  return (
    indexOf(a.component.props.variant || 'info')(SORT_ORDER) -
    indexOf(b.component.props.variant || 'info')(SORT_ORDER)
  );
};

const BannersStack = ({ initialState = [] }: BannersStackProps) => {
  const { instances, removeBanner, addBanner } = useBanners();
  useDeepCompareEffect(() => {
    initialState.map(addBanner);
  }, [initialState]);

  const [index, setIndex] = useState(0);

  const sortedInstances = sort(cmp, instances);

  const moveToPrev = () => {
    setIndex((prevIndex) => prevIndex - 1);
  };
  const moveToNext = () => {
    setIndex((prevIndex) => prevIndex + 1);
  };
  const handleRemove = (originalOnClose) => () => {
    if (sortedInstances.length <= 1) {
      setIndex(0);
    } else if (index === sortedInstances.length - 1) {
      moveToPrev();
    }

    removeBanner(sortedInstances[index].id as string);
    if (originalOnClose !== undefined) {
      originalOnClose();
    }
  };

  if (sortedInstances.length === 0) {
    return null;
  }

  if (sortedInstances[index]?.component === undefined) {
    setIndex(sortedInstances.length - 1);
  }

  const currentComponent =
    sortedInstances[index]?.component ||
    sortedInstances[sortedInstances.length - 1]?.component;

  return React.cloneElement(currentComponent, {
    onClose: handleRemove(currentComponent.props.onClose),
    __hasPagination: true,
    __onNext: moveToNext,
    __onPrev: moveToPrev,
    __isFirst: index === 0,
    __isLast: index === instances.length - 1,
    __current: index + 1,
    __total: sortedInstances.length,
  });
};
BannersStack.displayName = 'BannersStack';

export default BannersStack;
