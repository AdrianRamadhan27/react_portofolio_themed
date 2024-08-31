import './App.css';
import ThemeProvider from './context/ThemeContext';

import Component from './Component';
function App() {

  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );
}

export default App;
