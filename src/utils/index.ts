import { Direction } from '../components/popover';
import { Side } from '../components/popover';

const getScrollSize = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  return {scrollTop, scrollLeft };
};

const computeCoordPlacement = (popoverNode: HTMLElement, referenceNode: HTMLElement, direction: Direction, side: Side) => {
  const referenceNodeRect = referenceNode.getBoundingClientRect();
  const { scrollTop, scrollLeft } = getScrollSize();

  const currentSideX = {
    left: referenceNodeRect.left + scrollLeft,
    mid: referenceNodeRect.left + scrollLeft + referenceNodeRect.width/2,
    right: referenceNodeRect.right + scrollLeft,
  }
  
  const currentSideY = {
    left: referenceNodeRect.bottom + scrollTop,
    mid: referenceNodeRect.bottom + scrollTop - referenceNodeRect.height/2,
    right: referenceNodeRect.top + scrollTop,
  }

  const BORDER_SPACE = 5;

  switch (direction) {
    case 'top':
      return {
        x: currentSideX[side],
        y: referenceNodeRect.top + scrollTop - BORDER_SPACE,
      }
    case 'bottom':
      return {
        x: currentSideX[side],
        y: referenceNodeRect.bottom + scrollTop + BORDER_SPACE,
      }
    case 'left':
      return {
        x: referenceNodeRect.right + scrollLeft - referenceNodeRect.width - BORDER_SPACE,
        y: currentSideY[side],
      }
    case 'right':
      return {
        x: referenceNodeRect.left + scrollLeft + referenceNodeRect.width + BORDER_SPACE,
        y: currentSideY[side],
      }
    default:
      return {
        x: referenceNodeRect.right + scrollLeft - referenceNodeRect.width - BORDER_SPACE ,
        y: currentSideY[side],
      };
  }
};

const computeCorrectionCSS = (x: number,y: number, direction: Direction, side: Side) => {
  const currentSideX = {
    left: 0,
    mid: 50,
    right: 100,
  }
  
  const currentSideY = {
    left: 100,
    mid: 50,
    right: 0,
  }

  switch (direction) {
    case 'top':
      return `translate(calc(${x}px - ${currentSideX[side]}%), calc(${y}px - 100%))`;
    case 'bottom':
      return `translate(calc(${x}px - ${currentSideX[side]}%), calc(${y}px))`;
    case 'left':
      return `translate(calc(${x}px - 100%), calc(${y}px - ${currentSideY[side]}%))`;
    case 'right':
      return `translate(calc(${x}px), calc(${y}px - ${currentSideY[side]}%))`;
    default:
      return `translate(calc(${x}px - ${currentSideX[side]}%), calc(${y}px - 100%))`;
  }
};

const sunrise = (popoverNode: HTMLElement, referenceNode: HTMLElement, direction: Direction, side: Side) => {
  const { x, y } = computeCoordPlacement(popoverNode, referenceNode, direction, side);
  const result = computeCorrectionCSS( x, y, direction, side);
  popoverNode.style.transform = result;
};

export { computeCoordPlacement, computeCorrectionCSS, sunrise };