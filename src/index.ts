import { computePosition } from './utils';
import { Direction, Side } from './types';

function supportsPopover() {
  return Object.prototype.hasOwnProperty.call(HTMLElement.prototype, 'popover');
}

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

export { computePosition };
export type { Direction, Side };
