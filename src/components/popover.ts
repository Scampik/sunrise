import { computeCoordPlacement } from '../utils/index';

function supportsPopover() {
    return Object.prototype.hasOwnProperty.call(HTMLElement.prototype, "popover");
}

export type Direction = 'top' | 'bottom' | 'left' | 'right';
export type Side = 'mid' | 'left' | 'right';

const popover = (popoverNode: HTMLElement, referenceNode: HTMLElement, direction: Direction, side: Side) => {
  const popoverSupported = supportsPopover();

    if (!popoverSupported) {
      referenceNode.style.display = 'none';
      return;
    }
    popoverNode.popover = "auto"; //manual

    // referenceNode.addEventListener("mouseover", () => {
      const { y, x, width, height } = computeCoordPlacement(popoverNode, referenceNode, direction, side);
      
      popoverNode.style.position = 'absolute';
      popoverNode.style.transform = `translate(${x}px, ${y}px)`;
      popoverNode.style.height = `${height}px`;
      popoverNode.style.width = `${width}px`;
      popoverNode.style.border = '0';
      
      popoverNode.togglePopover();
    // });


    // referenceNode.addEventListener("mouseout", function() {
    //   popoverNode.togglePopover();
    // });
};

export default popover;