import { computeCoordPlacement } from '../utils/index';

function supportsPopover() {
    return Object.prototype.hasOwnProperty.call(HTMLElement.prototype, "popover");
}

export type Direction = 'top' | 'bottom' | 'left' | 'right';
export type Side = 'mid' | 'left' | 'right';

const popover = (popoverNode: HTMLElement, referenceNode: HTMLElement, direction: Direction = 'top', side: Side = 'mid') => {
  console.log('ppopover', direction, side);
  const popoverSupported = supportsPopover();

    if (!popoverSupported) {
      referenceNode.style.display = 'none';
      return; 
    }
    popoverNode.popover = "auto"; //manual

    const { y, x } = computeCoordPlacement(popoverNode, referenceNode, direction, side);
    popoverNode.style.position = 'absolute';
    popoverNode.style.transform = `translate(${x}px, ${y}px)`;

    referenceNode.addEventListener("mouseover", () => {
      popoverNode.togglePopover();
    });


    referenceNode.addEventListener("mouseout", function() {
      popoverNode.togglePopover();
    });
    // popover(popoverNode, referenceNode, direction, side);
};

export default popover;