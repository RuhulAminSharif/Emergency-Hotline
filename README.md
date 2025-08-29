# Emergency-Hotline

## 1. Difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`

- **`getElementById(id)`** → Returns a single element with the given ID. (Always unique)
- **`getElementsByClassName(class)`** → Returns a live HTMLCollection of elements with the given class name.
- **`querySelector(selector)`** → Returns the first element matching the CSS selector.
- **`querySelectorAll(selector)`** → Returns a static NodeList of all elements matching the CSS selector.

## 2. How to create and insert a new element into the DOM

```js
// Create element
const newDiv = document.createElement("div");
// Add content
newDiv.textContent = "Hello World";
// Insert into DOM
document.body.appendChild(newDiv);
```

## 3. What is Event Bubbling and how does it work?

- Event bubbling is the process where an event starts from the **target element** and propagates **upwards through its ancestors** until it reaches the `document`.

## 4. What is Event Delegation in JavaScript? Why is it useful?

- Event delegation is attaching a **single event listener** to a parent element to handle events on its child elements using event bubbling.
- **Useful because:**
  - Improves performance (fewer listeners)
  - Handles dynamically added elements automatically

## 5. Difference between `preventDefault()` and `stopPropagation()`

- **`preventDefault()`** → Stops the **default browser action** (e.g., prevent form submission, stop link navigation).
- **`stopPropagation()`** → Stops the event from **bubbling up** the DOM tree.
