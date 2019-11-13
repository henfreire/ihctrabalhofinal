import React from 'react';
import logo from './logo.svg';
import './App.css';
import "styles/bootstrap.scss";
import Home from 'components/Home';
import defaultTheme from "./themes/defaultTheme";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const applyTheme = createMuiTheme(defaultTheme);
function App() {
  return (
    <div className="App">
        <MuiThemeProvider theme={applyTheme}>
       <Home />
       </MuiThemeProvider>
    </div>
  );
}

export default App;
