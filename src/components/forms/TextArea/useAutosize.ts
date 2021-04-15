import React, { useEffect, useState } from 'react';
import { isNotUndefined } from 'ramda-adjunct';
import { path } from 'ramda';

const getHeight = (ref) => {
  const scrollHeight = path(['current', 'scrollHeight'])(ref);
  return isNotUndefined(scrollHeight) ? `${scrollHeight + 2}px` : 'auto';
};

export default (
  ref: React.MutableRefObject<HTMLTextAreaElement>,
  value: string,
): {
  text: string;
  parentHeight: string;
  textAreaHeight: string;
  autosize: () => void;
} => {
  const [text, setText] = useState(value);
  const [textAreaHeight, setTextAreaHeight] = useState('auto');
  const [parentHeight, setParentHeight] = useState('auto');
  const [cursorPosition, setCursorPosition] = useState(0);

  useEffect(() => {
    ref.current.setSelectionRange(cursorPosition, cursorPosition);
    const height = getHeight(ref);

    setParentHeight(height);
    setTextAreaHeight(height);
  }, [ref, text, cursorPosition]);

  const autosize = () => {
    setCursorPosition(ref.current.selectionStart);

    const height = getHeight(ref);
    setTextAreaHeight('auto');
    setParentHeight(height);
    setText(ref.current.value);
  };

  return { text, parentHeight, textAreaHeight, autosize };
};
