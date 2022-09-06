# 🦄 unis-icons

> A set of SVG icons for UI development.
> Available as basic SVG icons and via first-party React and Vue libraries.

[![version](https://img.shields.io/npm/v/unis-icons)](https://www.npmjs.com/package/unis-icons) [![build workflow](https://github.com/unicorn-84/unis-icons/actions/workflows/build.yml/badge.svg)](https://github.com/unicorn-84/unis-icons/actions/workflows/build.yml) [![MIT license](https://img.shields.io/github/license/unicorn-84/unis-icons)](https://github.com/unicorn-84/unis-icons/blob/master/LICENSE) [![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

## What it is

SVG icons.
Based on [🧜‍♀️ Moja UI - FREE Top UI Kit & Design system.](https://www.figma.com/community/file/1108679668074690379)

## Basic usage

The quickest way to use these icons is to simply copy the source for the icon you need from `website` and inline it directly into your HTML:

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  stroke="currentColor"
  aria-hidden="true"
  viewBox="0 0 32 32"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M11.512 18.512h-8v-8"
  />
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M28 23a12 12 0 0 0-20.488-8.488l-4 4"
  />
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
