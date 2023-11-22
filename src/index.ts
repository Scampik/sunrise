import './styles.css';
import popover from './components/popover';

const tooltip = () => {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');
    const button4 = document.getElementById('button4');
    const popoverNode = document.getElementById('mypopover');
    const referenceNode = document.getElementById('toggleNode');
      
    button1.addEventListener('click', () => {
        popover(popoverNode, referenceNode, 'top');
    });
    button2.addEventListener('click', () => {
        popover(popoverNode, referenceNode, 'bottom');
    });
    button3.addEventListener('click', () => {
        popover(popoverNode, referenceNode, 'left');
    });
    button4.addEventListener('click', () => {
        popover(popoverNode, referenceNode, 'right');
    });

    popover(popoverNode, referenceNode, 'top');
};

tooltip();