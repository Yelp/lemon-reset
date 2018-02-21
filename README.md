# 🍋 Lemon Reset

[![Build Status](https://travis-ci.org/Yelp/lemon-reset.svg?branch=master)](https://travis-ci.org/Yelp/lemon-reset)

A set of React components that provide [Meyer Reset](https://meyerweb.com/eric/tools/css/reset/) styles for use with [CSS Modules](https://github.com/css-modules/css-modules).

For all the DOM tags used in Meyer Reset, Lemon Reset provides a React component with those reset styles, minimizing the effect of browser quirks.
In a React world, we prefer components that are self-contained and not reliant on global styling.

## Installation

```
yarn add lemon-reset
```

## Build

Our makefile assumes that you have virtualenv available globally, as we use a python environment for running [pre-commit](https://pre-commit.com/).

If you have virtualenv, simply run:

```bash
make build
```

Otherwise, you can do:

```bash
NODE_ENV=production ./node_modules/.bin/babel src --out-dir lib --copy-files
```

## Usage

Use these components as a drop in replacement for your existing HTML tags!

```javascript
import { P } from 'lemon-reset';

ReactDOM.render(<P>Hello World</P>, myContainer);
```

Wrap Lemon Reset components in your own custom components!

```javascript
import { Span, Div } from 'lemon-reset';
import styles from './Container.scss';

type Props = {
    display: 'inline' | 'inline-block' | 'block' | 'none',
};

const Container = ({ children, display }: Props) => {
    const Tag = display === 'inline' ? Span : Div;
    const classes = styles[`display--${display}`];

    return <Tag className={styles[`display--${display}`]}>{children}</Tag>;
};

export default Container;
```

Pass in any props! If you need to [pass in a ref](https://reactjs.org/docs/refs-and-the-dom.html#adding-a-ref-to-a-dom-element), you'll need to pass it in as a tagRef:

```javascript
<Span tagRef={span => console.log(span)}>This has a ref</Span>
```
