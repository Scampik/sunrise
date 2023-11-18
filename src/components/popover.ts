function supportsPopover() {
    return Object.prototype.hasOwnProperty.call(HTMLElement.prototype, "popover");
}

type Direction = 'top' | 'bottom';

const popover = (popoverNode: HTMLElement, referenceNode: HTMLElement, direction: Direction) => {
    const popoverSupported = supportsPopover();

    if (!popoverSupported) {
      referenceNode.style.display = 'none';
      return;
    }

    popoverNode.popover = "manual";

    referenceNode.addEventListener("click", function() {
      const buttonRect = referenceNode.getBoundingClientRect();
      const buttonTop = buttonRect.top + buttonRect.height;
      const buttonLeft = buttonRect.left;

      // TODO: добавить вызов функции расчета координат

      popoverNode.style.position = 'absolute';
      popoverNode.style.top  = buttonTop + 'px';
      popoverNode.style.left = buttonLeft + 'px';

      popoverNode.togglePopover();
    });
};

export default popover;
