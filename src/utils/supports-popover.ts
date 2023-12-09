export const supportsPopover = () => {
  return Object.prototype.hasOwnProperty.call(HTMLElement.prototype, 'popover');
};
