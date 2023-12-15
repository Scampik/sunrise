import { Direction, Side } from '../types';
import { computePosition } from '../utils/compute-position';
import { fluffioEventTarget } from '../event-target';
import { EVENTS } from '../constants';

const clonePopover = (popover: HTMLElement) => {
  const popoverClone = popover.cloneNode(true) as HTMLElement;
  popover.after(popoverClone);
  popoverClone.style.display = 'block';
  popoverClone.style.visibility = 'hidden';

  return popoverClone;
};

export const flip = (
  popoverNode: HTMLElement,
  referenceNode: HTMLElement,
  direction: Direction,
  side: Side,
  offset: number,
) => {
  const popoverClone = clonePopover(popoverNode);

  const recomputePosition = (newDirection: Direction, newSide: Side) => {
    computePosition(popoverNode, referenceNode, {
      direction: newDirection,
      side: newSide,
      silent: true,
      offset,
    });
  };

  let currentSide = side;
  let currentDirection = direction;

  function handleIntersect(entries: IntersectionObserverEntry[]) {
    if (!entries[0].isIntersecting) {
      const newDirection = currentDirection === 'top' ? 'bottom' : 'top';
      recomputePosition(newDirection, currentSide);
      return;
    }

    recomputePosition(currentDirection, currentSide);
  }

  const io = new IntersectionObserver(handleIntersect, {
    threshold: 1,
  });

  fluffioEventTarget.addEventListener(EVENTS.beforePlace, (event: Event) => {
    io.unobserve(popoverClone);

    const { detail } = event as CustomEvent;

    currentSide = detail.side;
    currentDirection = detail.direction;

    computePosition(popoverClone, referenceNode, {
      direction: detail.direction,
      side: detail.side,
      silent: true,
      offset,
    });

    io.observe(popoverClone);
  });
};
