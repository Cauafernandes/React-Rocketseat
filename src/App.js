import React from 'react';
import Routes from './routes';

// COMPONENT
import Header from './components/Header/Index';
import Main from './pages/Main/Index'

// STYLE
import './styles.css';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;