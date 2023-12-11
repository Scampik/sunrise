import { Fluffio } from './types';
import { supportsPopover } from './utils/supports-popover';
import { computePosition } from './utils/compute-position';
import { flip as flipFn } from './middlewares/flip';

export const fluffio: Fluffio = (
  popoverNode: HTMLElement,
  referenceNode: HTMLElement,
  params = {},
) => {
  if (!supportsPopover()) {
    referenceNode.style.display = 'none';
    return;
  }

  const { direction = 'bottom', side = 'mid', flip = true } = params;

  popoverNode.popover = 'manual';
  popoverNode.style.position = 'absolute';

  if (flip) {
    flipFn(popoverNode, referenceNode, direction, side);
  }

  computePosition(popoverNode, referenceNode, { direction, side });

  referenceNode.addEventListener('mouseover', () => {
    popoverNode.style.display = 'block';
  });

  referenceNode.addEventListener('mouseout', () => {
    popoverNode.style.display = 'none';
  });
};
