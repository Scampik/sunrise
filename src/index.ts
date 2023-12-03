import { sunrise } from './utils';
import { Direction, Side } from './types';

function supportsPopover() {
  return Object.prototype.hasOwnProperty.call(HTMLElement.prototype, 'popover');
}

const index = (
  popoverNode: HTMLElement,
  referenceNode: HTMLElement,
  direction: Direction = 'top',
  side: Side = 'mid',
) => {
  const popoverSupported = supportsPopover();

  if (!popoverSupported) {
    referenceNode.style.display = 'none';
    return;
  }
  popoverNode.popover = 'manual';

  popoverNode.style.position = 'absolute';
  sunrise(popoverNode, referenceNode, direction, side);

  referenceNode.addEventListener('mouseover', () => {
    popoverNode.togglePopover();
  });

  referenceNode.addEventListener('mouseout', () => {
    popoverNode.togglePopover();
  });
};

export default index;
