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
    popoverNode.popover = "auto"; //manual

    referenceNode.addEventListener("click", function() { //mouseover
      const { top, left, right, bottom } = computeCoordPlacement(popoverNode, referenceNode, direction);
      const referenceNodeRect = referenceNode.getBoundingClientRect();

      popoverNode.style.position = 'absolute';
      popoverNode.style.top = top + 'px';
      popoverNode.style.left = left + 'px';
      popoverNode.style.right = right + 'px';
      popoverNode.style.bottom = bottom + 'px';
      popoverNode.style.height = '21' + 'px';
      popoverNode.style.width = (referenceNodeRect.width) + 'px';
      popoverNode.style.border = '0';
      popoverNode.style.padding = '0';
      popoverNode.style.margin = '0';

      // пока фиксированная ширина, как лучше сдделать? заранее размер поповера не расчитать

      popoverNode.togglePopover();
    });

    // referenceNode.addEventListener("mouseout", function() {
    //   popoverNode.togglePopover();
    // });
};

export default popover;