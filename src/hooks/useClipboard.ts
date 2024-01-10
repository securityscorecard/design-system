import { useState } from 'react';

import { useLogger } from './useLogger';

async function copyTextToClipboard(text: string) {
  if ('clipboard' in navigator) {
    return navigator.clipboard.writeText(text);
  }
  return document.execCommand('copy', true, text);
}

export const useClipboard = (): {
  isCopied: boolean;
  copy: (textToCopy: string) => void;
} => {
  const [isCopied, setIsCopied] = useState(false);
  const { warn } = useLogger('useClipboard');

  const copy = (textToCopy: string) => {
    copyTextToClipboard(textToCopy)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        warn(err);
      });
  };

  return {
    isCopied,
    copy,
  };
};
