import { Direction, Side } from '../types';
import { getScrollSize } from './get-scroll-size';

export const computeCoordPlacement = (
  referenceNode: HTMLElement,
  direction: Direction,
  side: Side,
) => {
  const referenceNodeRect = referenceNode.getBoundingClientRect();
  const { scrollTop, scrollLeft } = getScrollSize();

  const currentSideX = {
    left: referenceNodeRect.left + scrollLeft,
    mid: referenceNodeRect.left + scrollLeft + referenceNodeRect.width / 2,
    right: referenceNodeRect.right + scrollLeft,
  };

  const currentSideY = {
    left: referenceNodeRect.bottom + scrollTop,
    mid: referenceNodeRect.bottom + scrollTop - referenceNodeRect.height / 2,
    right: referenceNodeRect.top + scrollTop,
  };

  switch (direction) {
    case 'top':
      return {
        x: currentSideX[side],
        y: referenceNodeRect.top + scrollTop,
      };
    case 'bottom':
      return {
        x: currentSideX[side],
        y: referenceNodeRect.bottom + scrollTop,
      };
    case 'left':
      return {
        x: referenceNodeRect.right + scrollLeft - referenceNodeRect.width,
        y: currentSideY[side],
      };
    case 'right':
      return {
        x: referenceNodeRect.left + scrollLeft + referenceNodeRect.width,
        y: currentSideY[side],
      };
    default:
      return {
        x: referenceNodeRect.right + scrollLeft - referenceNodeRect.width,
        y: currentSideY[side],
      };
  }
};
