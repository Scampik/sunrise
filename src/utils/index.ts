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

  const padTop = parseFloat(stylesCSS.paddingTop);
  const padLeft = parseFloat(stylesCSS.paddingLeft);
  const padRight = parseFloat(stylesCSS.paddingRight);
  const padBase = parseFloat(stylesCSS.padding);
  const borderTop = parseFloat(stylesCSS.borderTop);
  const borderLeft = parseFloat(stylesCSS.borderLeft);
  const borderRight = parseFloat(stylesCSS.borderRight);
  const borderBase = parseFloat(stylesCSS.border);

  switch (direction) {
    case 'top':
      return {
        styleY: padBase + padTop + borderBase + borderTop,
        styleX: padLeft + padRight + borderLeft + borderRight,
      }
      case 'bottom':
        return {
          styleY: padBase + padTop + borderBase + borderTop,
          styleX: padBase + padLeft + borderBase + borderRight,
        }
        case 'left':
        return {
          styleY: padBase + padTop + borderBase + borderTop,
          styleX: padLeft + padRight + borderLeft + borderRight,
        }
      case 'right':
        return {
          styleY: padBase + padTop + borderBase + borderTop,
          styleX: padBase + padRight - padLeft + borderBase - borderLeft + borderRight,
        }
      default:
        return {
          styleY: padBase,
          styleX: padBase,
        };
  }
}

const computeCoordPlacement = (popoverNode: HTMLElement, referenceNode: HTMLElement, direction: Direction, side: Side) => {
  const referenceNodeRect = referenceNode.getBoundingClientRect();
  const { scrollTop, scrollLeft } = getScrollSize();
  const { tooltipHeight, tooltipWidth } = getSizeTooltip(popoverNode);
  const { styleY, styleX } = getParamsCSS(popoverNode, direction);

  const currentSideX = {
    left: referenceNodeRect.left + scrollLeft,
    mid: referenceNodeRect.left + scrollLeft + referenceNodeRect.width/2 - tooltipWidth/2 - styleX/2,
    right: referenceNodeRect.right + scrollLeft - tooltipWidth - styleX,
  }
  
  const currentSideY = {
    left: referenceNodeRect.bottom + scrollTop - tooltipHeight - styleY,
    mid: referenceNodeRect.bottom + scrollTop - referenceNodeRect.height/2 - tooltipHeight/2 - styleY/2,
    right: referenceNodeRect.top + scrollTop, 
  }

  const BORDER_SPACE = 5;
  switch (direction) {
    case 'top':
      return {
        y: referenceNodeRect.top + scrollTop - tooltipHeight - BORDER_SPACE - styleY,
        x: currentSideX[side],
      }
    case 'bottom':
      return {
        y: referenceNodeRect.bottom + scrollTop + BORDER_SPACE,
        x: currentSideX[side],
      }
      case 'left':
      return {
        y: currentSideY[side],
        x: referenceNodeRect.right + scrollLeft - referenceNodeRect.width - tooltipWidth - BORDER_SPACE - styleX,
      }
    case 'right':
      return {
        y: currentSideY[side],
        x: referenceNodeRect.left + scrollLeft + referenceNodeRect.width + BORDER_SPACE,
      }
    default:
      return {
        y: currentSideY[side],
        x: referenceNodeRect.right + scrollLeft - referenceNodeRect.width - tooltipWidth - BORDER_SPACE ,
      };
  }
};


export { computeCoordPlacement };