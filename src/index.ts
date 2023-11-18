import './styles.css';
import popover from './components/popover';

const popo = () => {
    // управление поповером
    const popoverNode = document.getElementById('mypopover');
    const referenceNode = document.getElementById('toggleBtn');

    popover(popoverNode, referenceNode, 'top');
};

popo();
