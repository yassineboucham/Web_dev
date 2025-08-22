import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const ExampleComponent = () => {
    return (
        <div>
            <h1>Hello from ExampleComponent!</h1>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default ExampleComponent;

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>