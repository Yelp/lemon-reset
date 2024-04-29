# 🍋 Lemon Reset

[![npm](https://img.shields.io/npm/v/lemon-reset.svg)](https://yarn.pm/lemon-reset)
[![gzip size](http://img.badgesize.io/https://unpkg.com/lemon-reset/dist/lemon-reset.js?compression=gzip)](https://unpkg.com/lemon-reset/dist/lemon-reset.js)
[![install size](https://packagephobia.now.sh/badge?p=lemon-reset)](https://packagephobia.now.sh/result?p=lemon-reset)

A set of React components that provide [Meyer Reset](https://meyerweb.com/eric/tools/css/reset/) styles for use with [CSS Modules](https://github.com/css-modules/css-modules).

For all the DOM tags used in Meyer Reset, Lemon Reset provides a React component with those reset styles, minimizing the effect of browser quirks.
In a React world, we prefer components that are self-contained and not reliant on global styling.

Read more about the motivation behind Lemon Reset [in our blog post](https://engineeringblog.yelp.com/2018/03/css-in-the-age-of-react.html)!

## Installation

```
yarn add lemon-reset
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
import styles from './Container.css';

type Props = {
    display: 'inline' | 'inline-block' | 'block' | 'none',
};

const Container = ({ children, display }: Props) => {
    const Tag = display === 'inline' ? Span : Div;
    const classes = styles[`display--${display}`];

    return <Tag className={classes}>{children}</Tag>;
};

export default Container;
```

Pass in any props! If you need to [pass in a ref](https://reactjs.org/docs/refs-and-the-dom.html#adding-a-ref-to-a-dom-element), you'll need to pass it in as a tagRef:

```javascript
<Span tagRef={(span) => console.log(span)}>This has a ref</Span>
```

## Build

Our makefile assumes that you have virtualenv available globally, as we use a python environment for running [pre-commit](https://pre-commit.com/).

If you have virtualenv, simply run:

```bash
make build
```

Otherwise, you can do:

```bash
NODE_ENV=production yarn babel src --out-dir lib --copy-files
```
