import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Segment,Table, Select } from 'semantic-ui-react';

import PositionSelectDisplay from './displayChecklist/PositionSelect';
import {getChecklist} from '../actions/displayActions';

const InputItem= (type) => {
  const tipeI = type.type;
  const responseOptions= [
    {key:"C",value:"C",text:"C"},
    {key:"NC",value:"NC",text:"NC"},
  ];
  let typeC;
  switch(tipeI){
    case 'Numero':
      typeC="Number";
      break;
    case 'Date':
      typeC="Number";
      break;
    case 'Text':
      typeC="Number";
      break;
    case 'CCN':
      typeC="Radio";
      break;
  }
  console.log('type:C',typeC);
  return (
    typeC!=='Radio'?
      <input type={typeC} name="inputVal"/>:
      <Select 
        placeholder="Selecciona respuesta" 
        options={responseOptions} 
        // onChange={this.onChangePuesto}
        style={{width:"100%",margin:"1em auto"}}
      />
  )
}


const TableItem = (dataCL) => {
  const {data}= dataCL;
  let rowsCL;
  console.log(data);
  if(data !== undefined){
    if(data !== null){
      rowsCL = JSON.parse(data.rows);
    }
    // console.log(Array.isArray (rowsCL));
  } 
  return(
    data !==undefined?
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>
            {data.puesto}
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {rowsCL.map((r,index) =>{
            if(r.type === "category"){
              return (
                <Table.Row key={index}>
                  <Table.HeaderCell colSpan='16'>{r.categorySelect}</Table.HeaderCell>
                </Table.Row>
              )
            }else{
              return (
                <Table.Row key={index}>
                    <Table.Cell colSpan='5'>
                      {r.activityInput}
                    </Table.Cell>
                    <Table.Cell colSpan='5'>
                      <InputItem type={r.response} />
                    </Table.Cell>
                    <Table.Cell colSpan='3'>
                    </Table.Cell>
                </Table.Row>
              )
            }
        })}
      </Table.Body>
    </Table>:
    null
  )
}



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
    const { puestoSelect,checklist } = this.props.display;
    const dataCL=checklist !== ''?checklist.Data:null;
    console.log(dataCL);
    return (
      <div>
        <Segment.Group raised>
          <Segment>
            <PositionSelectDisplay />
          </Segment>
          <Segment>
            <h1>Checklist puesto</h1>
            <TableItem data={dataCL}/>
          </Segment>
        </Segment.Group>
      </div>
    )
  }
}

DisplayChecklist.propTypes = {
  getChecklist: PropTypes.func.isRequired,
  // checklist: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  display: state.display
})

export default connect(mapStateToProps,{getChecklist})(DisplayChecklist);