## Fluffio

Meet Fluffio: a lightweight tooltip/popover library that utilizes the brand-new Popover API.

> fluffio is currently under development. Please be aware that it has limited number of features and doesn't (yet) work in browsers that don't support Popover API

Fluffio requires two things: an anchor (reference) node, and a popover (tooltip) node


## How To Install?

```shell
npm i @fluffio/core
```

## Usage

Basic usage (show tooltip on hover, positioned at the bottom):

```js
import { fluffio } from '@fluffio/core';

const tooltip = document.querySelector('.tooltip');
const button = document.querySelector('button');

fluffio(tooltip, button);
```

Different placement:
```js
fluffio(tooltip, button, { direction: 'top', side: 'left' })
```

With flipping:
```js
fluffio(tooltip, button, { flip: true })
```

If you need to re-adjust position further on, you can apply computePosition function:

```js
import { fluffio, computePosition } from '@fluffio/core';

const tooltip = document.querySelector('.tooltip');
const button = document.querySelector('button');

fluffio(tooltip, button);

button.addEventListener('click', () => {
  // set direction to top if clicked
  computePosition(tooltip, button, { direction: 'top' });
});
```

## License

MIT
