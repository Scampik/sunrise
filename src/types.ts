export type Direction = 'top' | 'bottom' | 'left' | 'right';
export type Side = 'mid' | 'left' | 'right';

export type FluffioParams = {
  direction?: Direction;
  side?: Side;
  flip?: boolean;
};

export type Fluffio = (
  popoverNode: HTMLElement,
  referenceNode: HTMLElement,
  params?: FluffioParams,
) => void;

export type ComputePositionParams = {
  direction?: Direction;
  side?: Side;
  silent?: boolean;
};
