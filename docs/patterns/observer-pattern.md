# Observer Pattern

The Observer Pattern is a popular design pattern in JavaScript that facilitates a one-to-many dependency between objects. It enables one object (the observable or subject) to notify multiple other objects (observers) when its state changes. This pattern is widely used in event handling and asynchronous programming.

## Table of Contents

- [Implementing the Observer Pattern in JavaScript](#implementing-the-observer-pattern-in-javascript)
  - [EventObserver](#eventobserver)
  - [Observable Class](#observable-class)
- [Example Application: Tracking User Interactions](#example-application-tracking-user-interactions)
  - [Creating Observers (Logger and Toastify)](#creating-observers-logger-and-toastify)
  - [Implementing Observable in React Components](#implementing-observable-in-react-components)
  - [Handling User Interactions](#handling-user-interactions)
- [Case Study: RxJS and Reactive Programming](#case-study-rxjs-and-reactive-programming)
  - [Overview of RxJS](#overview-of-rxjs)
  - [Example: Monitoring User Drag Events](#example-monitoring-user-drag-events)
- [Pros and Cons of Using the Observer Pattern](#pros-and-cons-of-using-the-observer-pattern)
  - [Pros](#pros)
  - [Cons](#cons)
- [Conclusion](#conclusion)

## Implementing the Observer Pattern in JavaScript

### Event Observer

- <code>subscribe</code>: adds new observable events
- <code>unsubscribe</code>: removes observable events
- <code>broadcast</code>: executes all events with bound data

Implementation for Observable class

```javascript
// Observable Class

class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(func) {
    this.observers.push(func);
  }

  unsubscribe(func) {
    this.observers = this.observers.filter((observer) => observer !== func);
  }

  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}
```

## Example Application: Tracking User Interactions

Let's build a simple application using React where user interactions (such as button clicks and switch toggles) are observed and logged.

```javascript
import { toast } from "react-toastify";

function logger(data) {
  console.log(`${Date.now()} ${data}`);
}

function toastify(data) {
  toast(data, {
    position: toast.POSITION.BOTTOM_RIGHT,
    closeButton: false,
    autoClose: 2000,
  });
}
```

Implementing Observable in React Components

```javascript
import React from "react";
import { Button, Switch, FormControlLabel } from "@material-ui/core";
import { ToastContainer } from "react-toastify";
import Observable from "./Observable";

const observable = new Observable();

observable.subscribe(logger);
observable.subscribe(toastify);

function App() {
  function handleClick() {
    observable.notify("User clicked button!");
  }

  function handleToggle() {
    observable.notify("User toggled switch!");
  }

  return (
    <div className="App">
      <Button variant="contained" onClick={handleClick}>
        Click me!
      </Button>
      <FormControlLabel
        control={<Switch name="" onChange={handleToggle} />}
        label="Toggle me!"
      />
      <ToastContainer />
    </div>
  );
}

export default App;
```

## Case Study: RxJS and Reactive Programming

RxJS enhances the Observer Pattern with additional features for handling sequences of events and managing asynchronous data streams.

## Overview of RxJS

RxJS combines the Observer pattern with functional programming and iterators to manage sequences of events efficiently.

[RxJS](https://rxjs.dev/)

```javascript
// Example: Monitoring User Drag Events javascript

import { fromEvent, merge } from "rxjs";
import { sample, mapTo } from "rxjs/operators";

merge(
  fromEvent(document, "mousedown").pipe(mapTo(false)),
  fromEvent(document, "mousemove").pipe(mapTo(true))
)
  .pipe(sample(fromEvent(document, "mouseup")))
  .subscribe((isDragging) => {
    console.log("Were you dragging?", isDragging);
  });
```

## Pros and Cons of Using the Observer Pattern

### Pros

- **Decoupling** : Subjects and observers are loosely coupled, promoting easier maintenance and scalability.
- **Event Handling** : Ideal for managing asynchronous events and data streams.
- **Flexibility** : Observers can be added or removed dynamically.

### Cons

- **Performance Overhead**: Notifying multiple observers can impact performance, especially with complex observers.
- **Potential Memory Leaks**: Care must be taken to unsubscribe observers properly to avoid memory leaks.

## Conclusion

The Observer Pattern is a powerful tool for managing event-driven programming in JavaScript, offering flexibility and scalability in handling asynchronous events and state changes. By decoupling subjects and observers, it promotes cleaner and more maintainable code, making it a valuable pattern in both simple applications and complex systems.
