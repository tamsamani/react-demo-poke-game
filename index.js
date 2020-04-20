import React from 'react';
import { render } from 'react-dom';

import Scene from "./components/Scene"

import './styles/index.scss';

function App () {
  
    return (
      <div>
        <h1> Pokemon Game </h1>
        <p>
          Start editing to make a magic game :)
        </p>
        <Scene />
      </div>
    );

}

render(<App />, document.getElementById('root'));
