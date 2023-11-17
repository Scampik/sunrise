import './styles.css';
import popover from './components/popover';

const popo = () => {
    // Создаем элементы
    const divElement = document.createElement('div');
    const divHead = document.createElement('div');
    const h1Element = document.createElement('h1');
    const mainElement = document.createElement('main');
    const footerElement = document.createElement('footer');
    const sectionElement = document.createElement('section');
    const buttonElement = document.createElement('button');
    const divPopover = document.createElement('div');
    const h1Popover = document.createElement('h3');
    const inputElement = document.createElement('input');
    
    // атрибуты текст
    h1Element.textContent = 'Test popover';
    footerElement.textContent = 'Test popover';
    buttonElement.textContent = 'Toggle the popover';
    h1Popover.textContent = 'Input name';
    inputElement.setAttribute('id', 'name-input');
    inputElement.setAttribute('autofocus', '');
    inputElement.setAttribute('required', '');
    inputElement.setAttribute('name', 'name');
    inputElement.setAttribute('placeholder', 'Name');
    
    // Классы айди
    divElement.classList.add('my-div');
    divHead.classList.add('divHead');
    sectionElement.classList.add('container');
    buttonElement.classList.add('testbox');
    buttonElement.id = 'toggleBtn';
    divPopover.id = 'mypopover';
    
    // собирааем
    document.body.appendChild(divHead);
    divHead.appendChild(h1Element);
    divElement.appendChild(mainElement);
    mainElement.appendChild(sectionElement);
    document.body.appendChild(divElement);
    document.body.appendChild(footerElement);
    sectionElement.appendChild(buttonElement);
    divPopover.appendChild(h1Popover);
    divPopover.appendChild(inputElement);
    sectionElement.appendChild(divPopover);

    // управление поповером
    popover('mypopover', 'toggleBtn', 'top');
};

popo();