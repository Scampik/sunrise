import { Direction, Side } from '../types';
export const computeCorrectionCSS = (
  x: number,
  y: number,
  direction: Direction,
  side: Side,
) => {
  const currentSideX = {
    left: 0,
    mid: 50,
    right: 100,
  };

  const currentSideY = {
    left: 100,
    mid: 50,
    right: 0,
  };

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
