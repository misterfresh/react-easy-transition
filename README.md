# React Easy Transition

```
npm install react-easy-transition
```

Easy transitions in react and react-router

## Usage

For a simple fade-out fade-in effect on route change with react-router :

```jsx
import EasyTransition from 'react-easy-transition'

<EasyTransition
    path={location.pathname}
    initialStyle={{opacity: 0}}
    transition="opacity 0.3s ease-in"
    finalStyle={{opacity: 1}}
>
    {this.props.children}
</EasyTransition>
```

Multiple transitions on different properties:

```jsx
<EasyTransition
    path={location.pathname}
    initialStyle={{opacity: 0, color: 'red'}}
    transition="opacity 0.3s ease-in, color 0.5s ease-in"
    finalStyle={{opacity: 1, color: 'green'}}
>
    {this.props.children}
</EasyTransition>
```

Optionally set a leaveStyle if it is different than the initialStyle:

```jsx
<EasyTransition
    path={location.pathname}
    initialStyle={{opacity: 0, color: 'red'}}
    transition="opacity 0.3s ease-in, color 0.5s ease-in"
    finalStyle={{opacity: 1, color: 'green'}}
    leaveStyle={{opacity: 0, color: 'gray'}}
>
    {this.props.children}
</EasyTransition>
```

## Live Demo

[Live Demo here](http://misterfresh.github.io/react-easy-transition)

## Why use this

* Small : only 70 lines of code
* Lightweight : based on ReactTransitionGroup low level API
* Easy: works out of the box with React Router 2.0, no need to define CSS classes, use Javascript objects to define transition styles.
* Performance : still using native browser CSS transition under the hood
* Flexible : support for multiple transitions

## This module solves the following issues:

* The fade-in effect when component mounts is rather straightforward to do with pure CSS transitions. However, the fade-out effect is impossible to do using only CSS because the component disappears immediately when unmounted.
* The new component appears before the end of the fade-out transition of the previous component, so both are shown at the same time, one on top of the other.
* Transition on initial render when rendering on the server

## Examples

* Integration with react-router and redux in examples/basic
* Integration with server-side rendering in examples/server