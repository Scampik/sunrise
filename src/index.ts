import './styles.css';
import popover from './components/popover';
import { computeCoordPlacement } from './utils/index';

const tooltip = () => {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');
    const button4 = document.getElementById('button4');
    const button5 = document.getElementById('button5');
    const button6 = document.getElementById('button6');
    const button7 = document.getElementById('button7');
    const button8 = document.getElementById('button8');
    const button9 = document.getElementById('button9');
    const button10 = document.getElementById('button10');
    const button11 = document.getElementById('button11');
    const button12 = document.getElementById('button12');
  
    const popoverNode = document.getElementById('mypopover');
    const referenceNode = document.getElementById('toggleNode');
  
    button1.addEventListener("click", () => {
        const { y, x } = computeCoordPlacement(popoverNode, referenceNode, 'top', 'left');

        popoverNode.style.transform = `translate(${x}px, ${y}px)`;
    });
    button2.addEventListener("click", () => {
        const { y, x } = computeCoordPlacement(popoverNode, referenceNode, 'top', 'mid');

        popoverNode.style.transform = `translate(${x}px, ${y}px)`;
    });
    button3.addEventListener("click", () => {
        const { y, x } = computeCoordPlacement(popoverNode, referenceNode, 'top', 'right');

        popoverNode.style.transform = `translate(${x}px, ${y}px)`;
    });
    button4.addEventListener("click", () => {
        const { y, x } = computeCoordPlacement(popoverNode, referenceNode, 'left', 'right');

        popoverNode.style.transform = `translate(${x}px, ${y}px)`;
    });
    button5.addEventListener("click", () => {
        const { y, x } = computeCoordPlacement(popoverNode, referenceNode, 'left', 'mid');

        popoverNode.style.transform = `translate(${x}px, ${y}px)`;
    });
    button6.addEventListener("click", () => {
        const { y, x } = computeCoordPlacement(popoverNode, referenceNode, 'left', 'left');

        popoverNode.style.transform = `translate(${x}px, ${y}px)`;
    });
    button7.addEventListener("click", () => {
        const { y, x } = computeCoordPlacement(popoverNode, referenceNode, 'right', 'right');

        popoverNode.style.transform = `translate(${x}px, ${y}px)`;
    });
    button8.addEventListener("click", () => {
        const { y, x } = computeCoordPlacement(popoverNode, referenceNode, 'right', 'mid');

        popoverNode.style.transform = `translate(${x}px, ${y}px)`;
    });
    button9.addEventListener("click", () => {
        const { y, x } = computeCoordPlacement(popoverNode, referenceNode, 'right', 'left');

        popoverNode.style.transform = `translate(${x}px, ${y}px)`;
    });
    button10.addEventListener("click", () => {
        const { y, x } = computeCoordPlacement(popoverNode, referenceNode, 'bottom', 'left');

        popoverNode.style.transform = `translate(${x}px, ${y}px)`;
    });
    button11.addEventListener("click", () => {
        const { y, x } = computeCoordPlacement(popoverNode, referenceNode, 'bottom', 'mid');

        popoverNode.style.transform = `translate(${x}px, ${y}px)`;
    });
    button12.addEventListener("click", () => {
        const { y, x } = computeCoordPlacement(popoverNode, referenceNode, 'bottom', 'right');

        popoverNode.style.transform = `translate(${x}px, ${y}px)`;
    });

    popover(popoverNode, referenceNode, "top", "mid");
};

tooltip();