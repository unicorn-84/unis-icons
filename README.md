# 🦄 unis-icons

> A set of SVG icons for UI development.

[![version](https://img.shields.io/npm/v/unis-icons)](https://www.npmjs.com/package/unis-icons) [![build workflow](https://github.com/unicorn-84/unis-icons/actions/workflows/build.yml/badge.svg)](https://github.com/unicorn-84/unis-icons/actions/workflows/build.yml) [![MIT license](https://img.shields.io/github/license/unicorn-84/unis-icons)](https://github.com/unicorn-84/unis-icons/blob/master/LICENSE) [![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

## What it is

SVG icons.

Available as basic SVG icons and via a first-party React library.

Based on [🧜‍♀️ Moja UI - FREE Top UI Kit & Design system.](https://www.figma.com/community/file/1108679668074690379)

## Basic usage

The quickest way to use these icons is to simply copy the source for the icon you need from [unis-icons.vercel.app](https://unis-icons.vercel.app) and inline it directly into your HTML:

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  aria-hidden="true"
  viewBox="0 0 48 48"
>
  <g fill="#161514">
    <path
      d="M24 0C10.747 0 0 11.017 0 24.608c0 10.872 6.877 20.096 16.413 23.35 1.2.227 1.64-.534 1.64-1.184 0-.587-.023-2.525-.033-4.581-6.677 1.488-8.086-2.904-8.086-2.904-1.092-2.844-2.665-3.6-2.665-3.6-2.177-1.528.165-1.496.165-1.496 2.41.173 3.679 2.535 3.679 2.535 2.14 3.762 5.614 2.675 6.984 2.046.215-1.59.837-2.676 1.523-3.29-5.33-.623-10.934-2.733-10.934-12.162 0-2.686.937-4.881 2.473-6.605-.25-.62-1.071-3.122.232-6.512 0 0 2.016-.661 6.602 2.523 1.914-.546 3.968-.82 6.007-.828 2.04.009 4.095.282 6.013.828 4.58-3.184 6.593-2.523 6.593-2.523 1.306 3.39.484 5.893.235 6.512 1.54 1.724 2.47 3.919 2.47 6.605 0 9.452-5.614 11.533-10.959 12.142.861.764 1.628 2.261 1.628 4.557 0 3.292-.027 5.942-.027 6.753 0 .655.432 1.422 1.648 1.18C41.132 44.697 48 35.476 48 24.608 48 11.017 37.255 0 24 0"
    />
    <path
      d="M9.161 35.162c-.053.121-.24.158-.41.075-.174-.08-.272-.245-.215-.366.051-.125.239-.16.412-.076.174.08.273.246.213.367Zm.97 1.101c-.114.108-.337.058-.489-.113-.156-.17-.186-.397-.07-.506.118-.108.334-.057.492.113.156.172.187.397.067.506Zm.945 1.403c-.147.104-.387.007-.535-.21-.147-.217-.147-.477.003-.58.149-.105.385-.011.535.204.147.22.147.48-.003.586Zm1.294 1.356c-.131.147-.411.108-.616-.093-.21-.197-.268-.476-.136-.623.133-.148.414-.106.62.093.209.197.272.477.132.623Zm1.785.788c-.058.19-.327.277-.598.196-.271-.084-.449-.307-.394-.5.056-.192.327-.283.6-.196.27.083.448.305.392.5Zm1.961.145c.006.201-.224.368-.509.371-.286.007-.518-.156-.52-.354 0-.202.224-.367.51-.372.285-.006.519.155.519.355Zm1.824-.315c.034.195-.164.397-.447.45-.278.052-.535-.07-.57-.264-.035-.2.166-.402.444-.454.283-.05.537.068.573.267Z"
    />
  </g>
</svg>
```

### React

First, install `unis-icons-react` from npm or yarn:

```bash
npm i unis-icons-react
```

```bash
yarn add unis-icons-react
```

Now each icon can be imported individually as a React component:

```js
import { ArrowArcLeft } from 'unis-icons-react';

const App = () => {
  return <ArrowArcLeft />;
};
```

## License

[MIT](https://github.com/unicorn-84/unis-icons/blob/master/LICENSE)
