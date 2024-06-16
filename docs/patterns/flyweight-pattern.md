# Flyweight Pattern

The Flyweight pattern is a design pattern used to reduce the memory usage of an application by sharing as much data as possible with similar objects. It is especially useful when working with a large number of objects that have many shared attributes.

## Table of Contents

- [Introduction](#introduction)
- [Example Implementation](#example-implementation)
- [Benefits of Using the Flyweight Pattern](#benefits-of-using-the-flyweight-pattern)
- [Pros and Cons](#pros-and-cons)
- [Conclusion](#conclusion)

## Introduction

In applications where we need to create many objects with similar properties, it is inefficient to create a new instance for each object. For example, in a text editor, many characters may share the same font and formatting. Creating separate instances for each character would waste memory. The Flyweight Pattern helps solve this problem by sharing common parts of object states.

## What is the Flyweight Pattern?

The Flyweight pattern is all about optimizing the performance of your application by minimizing memory usage. It does this by sharing common parts of objects between multiple instances instead of creating separate instances for each object.

### When to Use the Flyweight Pattern

You should consider using the Flyweight pattern when:

- You have a large number of objects.
- The memory cost is high due to the large number of objects.
- Most of the object's data can be shared among many objects.

### Implementing the Flyweight Pattern in JavaScript

To implement the Flyweight pattern in JavaScript, you can follow these steps:

- Create a Flyweight class to represent the shared data.
- Create a Flyweight Factory to manage and provide Flyweight instances.
- Use the Flyweight Factory to get Flyweight instances and use them in your application.

```javascript
// Flyweight class
class Character {
  constructor(font) {
    this.font = font; // Intrinsic state (shared)
  }

  display(position) {
    console.log(`Character with font ${this.font} at position ${position}.`);
  }
}

// Flyweight Factory
class CharacterFactory {
  constructor() {
    this.characters = {};
  }

  getCharacter(font) {
    if (!this.characters[font]) {
      this.characters[font] = new Character(font);
    }
    return this.characters[font];
  }

  getCount() {
    return Object.keys(this.characters).length;
  }
}

// Client code
const factory = new CharacterFactory();

// Creating characters with different fonts (shared state)
const characterA = factory.getCharacter('Arial');
characterA.display('1:1');

const characterB = factory.getCharacter('Times New Roman');
characterB.display('1:2');

const characterC = factory.getCharacter('Arial');
characterC.display('1:3');

console.log(`Number of unique character objects: ${factory.getCount()}`);
```

## Pros and Cons 

### Pros
1. **Reduced Memory Usage:** By sharing common data among multiple objects, the Flyweight pattern significantly reduces the memory footprint of an application.
2. **Improved Performance:** Lower memory usage can lead to improved performance, especially in applications that handle a large number of objects.
3. **Centralized Management:** Shared objects are managed centrally, making it easier to update or modify shared attributes.
4. **Scalability:** The pattern helps in scaling applications efficiently by minimizing resource usage.


### Cons
1. **Complexity:** Implementing the Flyweight pattern can introduce complexity in the codebase. Managing shared and unique states separately requires careful design.
2. **Runtime Overhead:** The pattern might introduce some runtime overhead due to the need to manage the extrinsic state externally.
3. **Limited Applicability:** The pattern is not suitable for all scenarios. It works best when there is a significant amount of shared data among objects.
4. **Debugging Difficulty:** Shared states can make debugging more challenging as changes to the shared state affect multiple objects.

### Conclusion

The Flyweight pattern is a useful design pattern when you need to manage a large number of objects efficiently. By sharing common data among multiple objects, you can significantly reduce memory usage and improve the performance of your application. This pattern is especially beneficial in scenarios where the memory cost is high and the objects have many shared attributes.
