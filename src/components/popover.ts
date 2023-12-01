import { sunrise } from '../utils/index';

function supportsPopover() {
    return Object.prototype.hasOwnProperty.call(HTMLElement.prototype, "popover");
}

export type Direction = 'top' | 'bottom' | 'left' | 'right';
export type Side = 'mid' | 'left' | 'right';

const popover = (popoverNode: HTMLElement, referenceNode: HTMLElement, direction: Direction = 'top', side: Side = 'mid') => {
  const popoverSupported = supportsPopover();

  if (!popoverSupported) {
    referenceNode.style.display = 'none';
    return; 
  }
  popoverNode.popover = "manual";

  popoverNode.style.position = 'absolute';
  sunrise(popoverNode, referenceNode, direction, side);

  referenceNode.addEventListener("mouseover", () => {
    popoverNode.togglePopover();
  });


  referenceNode.addEventListener("mouseout", () => {
    popoverNode.togglePopover();
  });
};

export default popover;