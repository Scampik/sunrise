import './styles.css';
import popover from './components/popover';
import { sunrise } from './utils/index';

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
        sunrise(popoverNode, referenceNode, 'top', 'left');
    });

    button2.addEventListener("click", () => {
        sunrise(popoverNode, referenceNode, 'top', 'mid');
    });

    button3.addEventListener("click", () => {
        sunrise(popoverNode, referenceNode, 'top', 'right');
    });

    button4.addEventListener("click", () => {
        sunrise(popoverNode, referenceNode, 'left', 'right');
    });

    button5.addEventListener("click", () => {
        sunrise(popoverNode, referenceNode, 'left', 'mid');
    });

    button6.addEventListener("click", () => {
        sunrise(popoverNode, referenceNode, 'left', 'left');
    });

    button7.addEventListener("click", () => {
        sunrise(popoverNode, referenceNode, 'right', 'right');
    });

    button8.addEventListener("click", () => {
        sunrise(popoverNode, referenceNode, 'right', 'mid');
    });

    button9.addEventListener("click", () => {
        sunrise(popoverNode, referenceNode, 'right', 'left');
    });

    button10.addEventListener("click", () => {
        sunrise(popoverNode, referenceNode, 'bottom', 'left');
    });

    button11.addEventListener("click", () => {
        sunrise(popoverNode, referenceNode, 'bottom', 'mid');
    });

    button12.addEventListener("click", () => {
        sunrise(popoverNode, referenceNode, 'bottom', 'right');
    });

    popover(popoverNode, referenceNode);
};

tooltip();