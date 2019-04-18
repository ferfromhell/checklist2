import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Segment,Table, Button, Modal, Icon} from 'semantic-ui-react';

import PositionSelectDisplay from './displayChecklist/PositionSelect';
import {getChecklist, saveTableDisplay} from '../actions/displayActions';

import RowItem from './displayChecklist/RowItem';


class DisplayChecklist extends Component {
  constructor(props){
    super(props);
    this.state = {
      puesto: '',
      open: false
    }
  }
  shouldComponentUpdate= () =>{
    const newPuesto = this.props.display.puestoSelect;
    let res;
    res=this.state.puesto===newPuesto?false:true;
    return res;
  }
  saveTable = async() => {
    var rows = this.props.display.rows;
    //console.log(rows);
    const newTable= {
      puesto: this.props.display.puestoSelect,
      rows
    }
    console.log(newTable);
    await this.props.saveTableDisplay(newTable);
    console.log(this.props.display.saved);
  }
  close = () => this.setState({ open: false })
  render() {
    const { rows } = this.props.display;
    const {open} = this.state;
    return (
      <div>
        <Modal
          open={open}
          onClose={this.close}
        >
          <Modal.Header>Checklist guardado en BD!</Modal.Header>
          <Modal.Content>El checklist a sido salvado exitosamente.</Modal.Content>
          <Button color='green' onClick={this.close}>
            <Icon name='checkmark'/> Ok
          </Button>
        </Modal>
        <Segment.Group raised>
          <Segment>
            <PositionSelectDisplay />
          </Segment>
          <Segment>
            <h1>Checklist puesto</h1>
            <Table celled striped fixed color="blue">
              <Table.Body>
                {rows.map((row,i) => <RowItem key={i} row={row} index={i}/>)}    
              </Table.Body>
            </Table>
            {rows.length >0?
              <Button 
                icon='save' 
                onClick={this.saveTable}
                positive
              />:null}
          </Segment>
        </Segment.Group>
      </div>
    )
  }
}

DisplayChecklist.propTypes = {
  getChecklist: PropTypes.func.isRequired,
  saveTableDisplay: PropTypes.func.isRequired
  // checklist: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  display: state.display
})

export default connect(mapStateToProps,{getChecklist, saveTableDisplay})(DisplayChecklist);