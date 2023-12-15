import { Direction } from '../types';

export const offset = (
  x: number,
  y: number,
  direction: Direction,
  offset: number,
) => {
  switch (direction) {
    case 'top':
      return {
        correctedX: x,
        correctedY: y - offset,
      };
    case 'bottom':
      return {
        correctedX: x,
        correctedY: y + offset,
      };
    case 'left':
      return {
        correctedX: x - offset,
        correctedY: y,
      };
    case 'right':
      return {
        correctedX: x + offset,
        correctedY: y,
      };
    default:
      return {
        correctedX: x,
        correctedY: y + offset,
      };
  }
};