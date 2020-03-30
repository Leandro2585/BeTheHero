import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Dracula from './styles/themes/dracula';
import Light from './styles/themes/light';
import Switch from 'react-switch';
// import './App.css';

import Global from './styles/global.js';

import Routes from './routes'

function App() {
  const [theme, setTheme] = useState(Light)

  function handleTheme(){
    if(theme == Light){
      setTheme(Dracula)
    }else{
      setTheme(Light)
    }
  }
  return (
    <ThemeProvider theme={theme}>
      
      <Switch
        className="switch"
        onChange={handleTheme}
        checked={false}
        checkedIcon={false}
        uncheckedIcon={false}
        width={40}
        height={25}
        handleDiameter={30}
        onColor="#7159c1"
        offColor="#e0554a"
        onClick={false}
      />
    <div className="App">
      <Global/>
      <Routes/>
    </div>
    </ThemeProvider>
  );
}

export default App;
