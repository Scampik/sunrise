import { computeCorrectionCSS } from './compute-correction-css';
import { computeCoordPlacement } from './compute-coord-placement';
import { Direction, Side } from '../types';

export const computePosition = (
  popoverNode: HTMLElement,
  referenceNode: HTMLElement,
  direction: Direction = 'bottom',
  side: Side = 'mid',
) => {
  const { x, y } = computeCoordPlacement(referenceNode, direction, side);
  popoverNode.style.transform = computeCorrectionCSS(x, y, direction, side);
};
