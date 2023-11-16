import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Router/Router';

const App = () => {
  const rootElement = document.getElementById('root');
  ReactDOM.createRoot(rootElement).render(<AppRouter />);
};

export default App;
