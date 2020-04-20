import React, { Component } from 'react';
import { render } from 'react-dom';

import './style.scss';

function App () {
  
    return (
      <div>
        <h1> Pokemon Game </h1>
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
