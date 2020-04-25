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
