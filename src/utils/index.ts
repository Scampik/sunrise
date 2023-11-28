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
  tooltip.innerHTML = popoverNode.innerHTML;

  document.body.appendChild(tooltip);
  const styles = window.getComputedStyle(tooltip);
  const tooltipHeight = tooltip.offsetHeight;
  const tooltipWidth = tooltip.offsetWidth;

  document.body.removeChild(tooltip);

  return { tooltipHeight, tooltipWidth };
}

const getParamsCSS = (popoverNode: HTMLElement, direction: Direction) => {
  const stylesCSS = window.getComputedStyle(popoverNode);
  const top = parseFloat(stylesCSS.paddingTop);
  const left = parseFloat(stylesCSS.paddingLeft);
  const right = parseFloat(stylesCSS.paddingRight);
  const base = parseFloat(stylesCSS.padding);

  switch (direction) {
    case 'top':
      return {
        paddingY: base + top,
        paddingX: left + right,
      }
      case 'bottom':
        return {
          paddingY: base + top,
          paddingX: base + left,
        }
        case 'left':
        return {
          paddingY: base + top,
          paddingX: left + right,
        }
      case 'right':
        return {
          paddingY: base + top,
          paddingX: base + right - left,
        }
      default:
        return {
          paddingY: base,
          paddingX: base,
        };
  }
}

const computeCoordPlacement = (popoverNode: HTMLElement, referenceNode: HTMLElement, direction: Direction, side: Side) => {
  const referenceNodeRect = referenceNode.getBoundingClientRect();
  const { scrollTop, scrollLeft } = getScrollSize();
  const { tooltipHeight, tooltipWidth } = getSizeTooltip(popoverNode);
  const { paddingY, paddingX } = getParamsCSS(popoverNode, direction);

  const currentSideX = {
    left: referenceNodeRect.left + scrollLeft,
    mid: referenceNodeRect.left + scrollLeft + referenceNodeRect.width/2 - tooltipWidth/2 - paddingX/2,
    right: referenceNodeRect.right + scrollLeft - tooltipWidth - paddingX,
  }
  
  const currentSideY = {
    left: referenceNodeRect.bottom + scrollTop - tooltipHeight - paddingY,
    mid: referenceNodeRect.bottom + scrollTop - referenceNodeRect.height/2 - tooltipHeight/2 - paddingY/2,
    right: referenceNodeRect.top + scrollTop, 
  }

  const BORDER_SPACE = 5;
  switch (direction) {
    case 'top':
      return {
        y: referenceNodeRect.top + scrollTop - tooltipHeight - BORDER_SPACE - paddingY,
        x: currentSideX[side],
        width: tooltipWidth,
        height: tooltipHeight,
      }
      case 'bottom':
        return {
          y: referenceNodeRect.bottom + scrollTop + BORDER_SPACE,
          x: currentSideX[side],
          width: tooltipWidth,
          height: tooltipHeight,
        }
        case 'left':
        return {
          y: currentSideY[side],
          x: referenceNodeRect.right + scrollLeft - referenceNodeRect.width - tooltipWidth - BORDER_SPACE - paddingX,
          width: tooltipWidth,
          height: tooltipHeight,
        }
      case 'right':
        return {
          y: currentSideY[side],
          x: referenceNodeRect.left + scrollLeft + referenceNodeRect.width + BORDER_SPACE,
          width: tooltipWidth,
          height: tooltipHeight,
        }
      default:
        return {
          y: currentSideY[side],
          x: referenceNodeRect.right + scrollLeft - referenceNodeRect.width - tooltipWidth - BORDER_SPACE ,
          width: tooltipWidth,
          height: tooltipHeight,
        };
  }
};


export { computeCoordPlacement };