// функция расчета координат
import { Direction } from '../components/popover';
import { Side } from '../components/popover';

const getScrollSize = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  return {scrollTop, scrollLeft };
};

const getSizeTooltip = (popoverNode: HTMLElement) => {
  const tooltip = document.createElement("div");
  tooltip.style.visibility = "hidden";
  tooltip.innerHTML = popoverNode.textContent;

  document.body.appendChild(tooltip);

  const tooltipHeight = tooltip.offsetHeight;
  const tooltipWidth = tooltip.offsetWidth;

  document.body.removeChild(tooltip);

  return { tooltipHeight, tooltipWidth };
}

const computeCoordPlacement = (popoverNode: HTMLElement, referenceNode: HTMLElement, direction: Direction, side: Side) => {
  const referenceNodeRect = referenceNode.getBoundingClientRect();
  const {scrollTop, scrollLeft } = getScrollSize();
  const { tooltipHeight, tooltipWidth } = getSizeTooltip(popoverNode);
  
  
  const currentSideX = {
    left: referenceNodeRect.left + scrollLeft,
    right: referenceNodeRect.right + scrollLeft - tooltipWidth,
    mid: referenceNodeRect.left + scrollLeft + tooltipWidth/2,
  }
  
  const currentSideY = {
    left: referenceNodeRect.bottom + scrollTop - tooltipHeight,
    right: referenceNodeRect.top + scrollTop,
    mid: referenceNodeRect.top + scrollLeft + tooltipHeight/2,
  }
  // console.log(currentSide[side]);
  
  switch (direction) {
      case 'top':
        return {
          y: referenceNodeRect.top + scrollTop - tooltipHeight - 5,
          x: currentSideX[side],
          width: tooltipWidth,
          height: tooltipHeight,
        }
      case 'bottom':
        return {
          y: referenceNodeRect.bottom + scrollTop + 5,
          x: currentSideX[side],
          width: tooltipWidth,
          height: tooltipHeight,
        }
      case 'left':
        return {
          y: currentSideY[side],
          x: referenceNodeRect.right + scrollLeft - referenceNodeRect.width - tooltipWidth - 5,
          width: tooltipWidth,
          height: tooltipHeight,
        }
      case 'right':
        return {
          y: currentSideY[side],
          x: referenceNodeRect.left + scrollLeft + referenceNodeRect.width + 5,
          width: tooltipWidth,
          height: tooltipHeight,
        }
      default:
        return {
          y: referenceNodeRect.top + scrollTop - tooltipHeight - 5,
          x: referenceNodeRect.left + scrollLeft,
          width: tooltipWidth,
          height: tooltipHeight,
        };
  }
};


export { computeCoordPlacement };