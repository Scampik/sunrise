import './styles.css';
import popover from './components/popover';

const tooltip = () => {
    const popoverNode = document.getElementById('mypopover');
    const referenceNode = document.getElementById('toggleNode');

    popover(popoverNode, referenceNode, 'top');
};

tooltip();