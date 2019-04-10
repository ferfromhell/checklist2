import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Segment } from 'semantic-ui-react';

import './App.css';
import store from './store';

import PositionSelect from "./components/PositionSelect";
import ChecklistPuesto from './components/Checklist/ChecklisPuesto';
import PNCPuesto from './components/PNC/PNCPuesto';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div style={{height: '100vh', width: '100vw', background: "#cbcbcb"}}>
        <Segment.Group raised>
          <Segment>
            <PositionSelect />
          </Segment>
          <Segment>
            <h1>Checklist puesto</h1>
            <ChecklistPuesto />
          </Segment>
          {/* <Segment>
            <h1>PNC puesto</h1>
            <PNCPuesto />
          </Segment> */}
        </Segment.Group>
        </div>
      </Provider>
    );
  }
}

export default App;
