import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Directory from './components/DirectoryComponent';
import { CAMPSITES } from './shared/campsites';
import Main from './components/MainComponent';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
  }
    render() {
        return (
          <BrowserRouter>
            <div className="App">
                <Main />
            </div>
          </BrowserRouter>
        );
    }
}

export default App;