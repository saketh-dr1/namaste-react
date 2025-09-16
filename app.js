import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element

// const heading = React.createElement('h1', { id: 'heading' }, 'Namaste React');

// React Element
// JSX - HTML or XML like syntax

const elem = <span>React Element</span>;

const Title = () => (
  <h1 className="head" tabIndex="5">
    {elem}
    Namaste React using JSX
  </h1>
);

// React Component
// Class based component - old
// Functional component - new

const amount = 10000;
const HeadingComponent = () => (
  <div className="container">
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />);
