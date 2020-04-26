# LinkedIn Learning Course

Based on the LinkedIn Learning course: [Building Modern Projects with React](https://www.linkedin.com/learning/building-modern-projects-with-react/)

## Libraries/Frameworks Used

### Redux
Used to separate concerns related to state management for the components.

More info in [Redux.js](https://redux.js.org/introduction/getting-started)

#### Redux Best Practices
1. Your tests shouldn't care whether your component is connected or not to the store. Test should care about whether the JS component has been correctly rendered based on the property.
2. Keep Redux actions and async operations out of your reducers. Fetching data from the network should NOT be on the reducers.
3. Think carefully about connecting components. A component connected to the store makes it less reusable to other parts of the application so need to make sure that you're connecting only when necessary. Avoid connecting components to the store which we plan to re-use.

### Redux-Thunk
Side-effect Library used to handle side-effects (e.g. network calls, data loading)

More info in [Redux Thunk](https://github.com/reduxjs/redux-thunk)

### Reselect
Simple `selector` library for Redux to help with combining or adding selectors. More information [here](https://github.com/reduxjs/reselect).

## Components

### Reducers
Manages States

### Actions
Extracts out the data in the payload we care about to get passed to reducers

### Thunks
Side-effect logic

### Selectors
Abstracts the state's format, and transforms the state data

### Styled Components
This enabled us to write plain css into the components without worrying that it will leak onto other elements of the page.

How to organise this? This depends on your preference. It can be a separated JS file or with the component. It falls under your prerogative.

## Additional Notes
* Best to remember the lifecycle because that will clear up where the change should be happening:

component -> thunk (if there's side-effect) -> action -> reducer -> component

* Selector is part of something bigger. This gives us a place to put logic for combining, filtering, transforming storing
