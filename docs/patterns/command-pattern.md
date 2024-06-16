# Command Pattern

The Command pattern in JavaScript is a behavioral design pattern that encapsulates a request as an object, thereby decoupling the sender from the receiver. This pattern involves using functions or closures to represent commands, promoting separation of concerns and enhancing flexibility.

## Table of Contents

- [Implementation Steps](#implementation-steps)
- [Example Implementation](#example-implementation)
- [Benefits of Using the Command Pattern](#benefits-of-using-the-command-pattern)
- [Pros and Cons](#pros-and-cons)
- [Comparison with Direct Function Calls](#comparison-with-direct-function-calls)
- [Conclusion](#conclusion)
- [Get Started](#get-started)
- [Contribute](#contribute)

## Implementation Steps

1. **Define Command Functions:**

   - Create functions that represent commands. Each function should encapsulate a specific action.

2. **Invoker Function:**
   - Create a function that takes a command function as an argument and executes it.

## Example Implementation

```javascript
// Command functions
function lightOn() {
  console.log("Light is on");
}

function lightOff() {
  console.log("Light is off");
}

// Invoker function
function switchCommand(command) {
  command();
}

// Usage
switchCommand(lightOn);  // Output: Light is on
switchCommand(lightOff); // Output: Light is off
```

## Benefits of Using the Command Pattern

1. **Separation of Concerns:** Command functions encapsulate actions, separating them from the code that invokes them.

2. **Flexibility:** New commands can be added easily without modifying existing code.
3. **Modularity:** Commands can be reused and composed to create complex behaviors.

## Pros and Cons

### Pros:

1. **Decoupling:** Encapsulates the request as an object, decoupling the sender from the receiver.
2. **Flexibility:** Easily add new commands without changing existing code.
3. **Undo Operations:** Supports undoable operations by storing state.

### Cons:

1. **Complexity:** Can introduce extra layers of abstraction.
2. **Overhead:** Requires more code and classes compared to simple procedural code.

## Conclusion

The Command pattern in JavaScript promotes separation of concerns and enhances flexibility by encapsulating requests as objects. It is particularly useful in scenarios where commands need to be queued, logged, or undone.
