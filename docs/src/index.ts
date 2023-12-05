import sunrise from '@fluffio/core';
import { Direction, Side } from '@fluffio/core/types';

const directions: Direction[] = ['top', 'left', 'right', 'bottom'];
const sides: Side[] = ['left', 'mid', 'right'];

const buttons: Array<[Direction, Side]> = directions.flatMap(
  (direction): Array<[Direction, Side]> => {
    return sides.map((side): [Direction, Side] => [direction, side]);
  },
);

const tooltip = () => {
  const popoverNode = document.getElementById('mypopover');
  const referenceNode = document.getElementById('toggleNode');

  if (!popoverNode || !referenceNode) {
    return;
  }

  buttons.forEach(([direction, side], index) => {
    const node = document.getElementById(`button${index + 1}`);

    if (!node) {
      return;
    }

    node.addEventListener('click', () => {
      sunrise(popoverNode, referenceNode, direction, side);
    });
  });

  popover(popoverNode, referenceNode);
};

tooltip();
