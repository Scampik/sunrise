/* eslint-disable @typescript-eslint/no-explicit-any */
function supportsPopover() {
    return HTMLElement.prototype.hasOwnProperty("popover");
}

const popover = (popoverTag: string, btnTag: string, direction: any) => {
    console.log(direction);
    const popover = document.getElementById(popoverTag);
    const toggleBtn = document.getElementById(btnTag);

    const popoverSupported = supportsPopover();

    if (popoverSupported) {
      (popover as any).popover = "auto";
      (toggleBtn as any).popoverTargetElement = popover;
      (toggleBtn as any).popoverTargetAction = "toggle";
    } else {
      toggleBtn.style.display = "none";
    }

    const popravka: { [key: string]: number } = {
        top: 20,
        bottom: -100,
    }

    toggleBtn.addEventListener("click", function() {
        const buttonRect = toggleBtn.getBoundingClientRect();
        const buttonTop = buttonRect.top + popravka[direction] + (640 - buttonRect.top);
        const buttonLeft = buttonRect.left;
        // console.log('button', buttonTop);
        popover.style.position = 'absolute';
        popover.style.top  = buttonTop + 'px';
        popover.style.left = buttonLeft + 'px';
      });

    window.addEventListener("scroll", function() {
        // var button = document.getElementById("myButton");
        const buttonRect = toggleBtn.getBoundingClientRect();
        // const buttonTop = buttonRect.top - popravka[direction];
        // const buttonLeft = buttonRect.left;
        // popover.style.position = 'absolute';
        // popover.style.top  = buttonTop + 'px';
        // popover.style.left = buttonLeft + 'px';
        console.log(buttonRect.bottom);
        if ((buttonRect.bottom < 130 ) 
         && (buttonRect.bottom > 120)) {
          console.log("hello world");
          const buttonTop = buttonRect.bottom - 290;
          popover.style.bottom  = buttonTop + 'px';
        }
        if ((buttonRect.bottom > 730 ) 
        && (buttonRect.bottom < 740)) {
         console.log("hello world");
         const buttonTop = buttonRect.top + popravka[direction] + (640 - buttonRect.top);
         popover.style.top  = buttonTop + 'px';
         popover.style.bottom = null;
       }
        
    });
};

export default popover;