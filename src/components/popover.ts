import { computeCoordPlacement } from '../utils/index';

function supportsPopover() {
    return Object.prototype.hasOwnProperty.call(HTMLElement.prototype, "popover");
}

export type Direction = 'top' | 'bottom' | 'left' | 'right';

const popover = (popoverNode: HTMLElement, referenceNode: HTMLElement, direction: Direction) => {
    const popoverSupported = supportsPopover();

    if (!popoverSupported) {
      referenceNode.style.display = 'none';
      return;
    }
    popoverNode.popover = "manual";

    referenceNode.addEventListener("mouseover", function() {
      const { top, left, right, bottom } = computeCoordPlacement(popoverNode, referenceNode, direction);

      popoverNode.style.position = 'absolute';
      popoverNode.style.top = top + 'px';
      popoverNode.style.left = left + 'px';
      popoverNode.style.right = right + 'px';
      popoverNode.style.bottom = bottom + 'px';
      popoverNode.style.width = (referenceNode.offsetWidth+14) + 'px';
      // пока фиксированная ширина, как лучше сдделать? заранее размер поповера не расчитать

      popoverNode.togglePopover();
    });

    referenceNode.addEventListener("mouseout", function() {
      popoverNode.togglePopover();
    });
};

export default popover;