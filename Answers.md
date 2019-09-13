# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a JavaScript library that caters to the needs of developing single-page web applications. It uses a virtual DOM and diffing mechanism to make surgical updates to to the real DOM, only updating the differences. This makes it fast and efficient as it avoids unnecessary DOM manipulation.

1. What does it mean to think in react?

Thinking in React means following a logical process to break your application down into components and their associated state using the one-way top-to-bottom data flow enforced by React itself.

1. Describe state.

State is simply data. The data could come from static variables, from an external API or from another source, for example user input.

1. Describe props.

Props are the way React passes state down from parent to child components. When a child component is invoked it's passed any state required to render correctly via properties on the invocation. These are packaged into a single object which is passed to the function which builds the component and can be accessed using standard object notation within the function.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A "side effect" is anything that affects something outside the scope of the function being executed. Functions that execute without side effects (e.g. rendering a static footer component) are called 'pure' functions.
