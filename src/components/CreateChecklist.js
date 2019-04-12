import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

import PositionSelect from "./PositionSelect";
import ChecklistPuesto from './Checklist/ChecklisPuesto';

class CreateChecklist extends Component {
  render() {
    return (
      <div>
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
    )
  }
}

export default CreateChecklist;