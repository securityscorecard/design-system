import { KeyboardEvent, useEffect, useRef } from 'react';

interface HorizontalScrollbarProps {
  isVisible: boolean;
  onScrollLeft: () => void;
  onScrollRight: () => void;
  onScrollToStart: () => void;
  onScrollToEnd: () => void;
}

const HorizontalScrollbar = ({
  isVisible,
  onScrollLeft,
  onScrollRight,
  onScrollToStart,
  onScrollToEnd,
}: HorizontalScrollbarProps) => {
  const scrollbarRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const { key } = event;

    switch (key) {
      case 'ArrowLeft':
        event.preventDefault();
        onScrollLeft();
        break;
      case 'ArrowRight':
        event.preventDefault();
        onScrollRight();
        break;
      case 'Home':
        event.preventDefault();
        onScrollToStart();
        break;
      case 'End':
        event.preventDefault();
        onScrollToEnd();
        break;
      case 'PageUp':
        event.preventDefault();
        // Scroll left by a larger amount (e.g., 50% of viewport)
        for (let i = 0; i < 5; i++) {
          onScrollLeft();
        }
        break;
      case 'PageDown':
        event.preventDefault();
        // Scroll right by a larger amount (e.g., 50% of viewport)
        for (let i = 0; i < 5; i++) {
          onScrollRight();
        }
        break;
      default:
        break;
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickPercentage = clickX / rect.width;

    // Determine scroll direction based on click position
    if (clickPercentage < 0.5) {
      onScrollLeft();
    } else {
      onScrollRight();
    }
  };

  // Focus management - ensure scrollbar is focusable when visible
  useEffect(() => {
    if (isVisible && scrollbarRef.current) {
      // Make sure the scrollbar is in the tab order
      scrollbarRef.current.tabIndex = 0;
    }
  }, [isVisible]);

  // Don't render if not visible
  if (!isVisible) {
    return null;
  }

  return (
    <button
      ref={scrollbarRef}
      aria-controls="datatable-content"
      aria-label="Horizontal scrollbar. Use arrow keys to scroll left or right, Home to scroll to start, End to scroll to end, Page Up/Down for larger scroll increments."
      className="ds-table-horizontal-scrollbar"
      tabIndex={0}
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    />
  );
};

export default HorizontalScrollbar;
