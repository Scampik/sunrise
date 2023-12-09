import { Direction, Side } from './types';
import { supportsPopover } from './utils/supports-popover';
import { computePosition } from './utils/compute-position';

export const fluffio = (
  popoverNode: HTMLElement,
  referenceNode: HTMLElement,
  direction: Direction = 'top',
  side: Side = 'mid',
) => {
  if (!supportsPopover()) {
    referenceNode.style.display = 'none';
    return;
  }

  popoverNode.popover = 'manual';
  popoverNode.style.position = 'absolute';
  computePosition(popoverNode, referenceNode, direction, side);

  referenceNode.addEventListener('mouseover', () => {
    popoverNode.style.display = 'block';
  });

  referenceNode.addEventListener('mouseout', () => {
    popoverNode.style.display = 'none';
  });
};
