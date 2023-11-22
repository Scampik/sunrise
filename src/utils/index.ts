// функция расчета координат
import { Direction } from '../components/popover';
import { ClientRectObject } from './types';


const getCoordsReferenceNode = (referenceNode: HTMLElement) => {
    return referenceNode.getBoundingClientRect();
};

// const getWindowSize = ():{ windowHeight: number, windowWidth: number } => {
//     const windowHeight = window.document.documentElement.clientHeight;
//     const windowWidth = window.document.documentElement.clientWidth;
//     return { windowHeight, windowWidth };
// };

const getScrollSize = ():{ scrollTop: number, scrollLeft: number } => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    return {scrollTop, scrollLeft };
};

const computeCoordPlacement = (popoverNode: HTMLElement, referenceNode: HTMLElement, direction: Direction): ClientRectObject => {
    const referenceNodeRect = getCoordsReferenceNode(referenceNode);
    // const popoverNodeRect = getCoordsReferenceNode(popoverNode);
    const {scrollTop, scrollLeft } = getScrollSize();
    // const { windowHeight, windowWidth } = getWindowSize();
    //window.devicePixelRatio надо как то учесть масштабирование браузера ( ниже 50% съезжает)

    console.log(referenceNodeRect)

    let top;
    let left;
    let right;
    let bottom;
    switch (direction) {
        case 'top':
            top = referenceNodeRect.top + scrollTop - referenceNodeRect.height - 5;
            bottom = referenceNodeRect.bottom + scrollTop;
            left = referenceNodeRect.left + scrollLeft;
            right = referenceNodeRect.right + scrollLeft;
            break;
          case 'bottom':
            top = referenceNodeRect.bottom + scrollTop + 5;
            bottom = referenceNodeRect.top + scrollTop;
            left = referenceNodeRect.left + scrollLeft;
            right = referenceNodeRect.right + scrollLeft;
            break;
          case 'left':
            top = referenceNodeRect.bottom + scrollTop - referenceNodeRect.height;
            bottom = referenceNodeRect.top + scrollTop;
            left = referenceNodeRect.left + scrollLeft - referenceNodeRect.width - 5;
            right = referenceNodeRect.right + scrollLeft;
            break;
          case 'right':
            top = referenceNodeRect.bottom + scrollTop - referenceNodeRect.height;
            bottom = referenceNodeRect.top + scrollTop;
            left = referenceNodeRect.left + scrollLeft + referenceNodeRect.width + 5;
            right = referenceNodeRect.right + scrollLeft;
            break;
          default:
            top = referenceNodeRect.top + scrollTop - referenceNodeRect.height;
            bottom = referenceNodeRect.bottom + scrollTop;
            left = referenceNodeRect.left + scrollLeft;
    }

    return { top, left, right, bottom};
};


export { getCoordsReferenceNode, computeCoordPlacement };