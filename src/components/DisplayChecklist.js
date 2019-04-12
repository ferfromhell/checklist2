import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';

import PositionSelectDisplay from './displayChecklist/PositionSelect';

import {getChecklist} from '../actions/displayActions';

class DisplayChecklist extends Component {
  constructor(props){
    super(props);
    this.state = {
      puesto: ''
    }
  }
  shouldComponentUpdate= () =>{
    const newPuesto = this.props.display.puestoSelect;
    let res;
    res=this.state.puesto===newPuesto?false:true;
    return res;
  }
  // getChecklist = () => {
  //   const puesto = this.props.checklist.puestoSelect;
  //   console.log(puesto)
  //   const res=this.props.getChecklist(puesto);
  //   console.log(res);
  // }
  render() {
    const { puestoSelect } = this.props.display;
    // const cl = this.getChecklist(puestoSelect);
    return (
      <div>
        <Segment.Group raised>
          <Segment>
            <PositionSelectDisplay />
          </Segment>
          <Segment>
            <h1>Checklist puesto</h1>
            {puestoSelect}
            {/* {cl} */}
          </Segment>
        </Segment.Group>
      </div>
    )
  }
}

DisplayChecklist.propTypes = {
  getChecklist: PropTypes.func.isRequired,
  checklist: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  display: state.display
})

export default connect(mapStateToProps,{getChecklist})(DisplayChecklist);