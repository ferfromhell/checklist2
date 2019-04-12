import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table, Select, Button, Input } from 'semantic-ui-react';
import { addExtraRow,deleteRow,updateRow, updateRowInput} from '../../actions/checklisActions';


class RowItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      rows: this.props.checklist.rows,
      response: '',
      input:''
    }
  }
  deleteRow = (i) => {
    var rows = this.props.checklist.rows;
    console.log(rows);
    rows.splice(i, 1);
    this.setState({rows});
    this.props.deleteRow(rows);
  }
  addExtraRow = (i) => {
    var rows = this.props.checklist.rows;
    //console.log(rows);
    rows.splice( i+1, 0, {activityInput: 'New activity', response:'' ,type:'activity'} );
    //console.log(i);
    this.setState({rows});
    this.props.addExtraRow(rows);
  }
  setResponse = (e, {value}) => {
    const i=this.props;
    e.preventDefault();
    // console.log(value);
    this.setState({response: value});
    const data = {
      value,
      i
    }
    this.props.updateRow(data); 
  }
  setInput = (e, {value}) => {
    const i=this.props;
    e.preventDefault();
    // console.log(value);
    this.setState({input: value});
    const data = {
      value,
      i
    }
    this.props.updateRowInput(data); 
  }
  render() {
    const {row,index} = this.props;
    const responseOptions= [
      {key:"CCN",value:"CCN",text:"C/CN"},
      {key:"Numero",value:"Numero",text:"Numero"},
      {key:"Date",value:"Date",text:"Fecha"},
      {key:"Text",value:"Text",text:"Texto"},
    ];
    
    // console.log( row,index);
    return (
      row.type === 'activity'?
      <Table.Row>
        <Table.Cell width={8}>
          <Input 
            defaultValue={row.activityInput}
            style={{width:"90%",padding: "1px"}}
            onChange={this.setInput.bind()}
          />  
        </Table.Cell>
        <Table.Cell width={5}>
          <Select
            placeholder="tipo de respuesta"
            options={responseOptions}
            onChange={this.setResponse.bind()}
            style={{zIndex:'100'}}
          />
        </Table.Cell>
        <Table.Cell width={3}>
          <Button 
            icon='delete'
            onClick={this.deleteRow.bind(this, index)}
          />
          <Button 
            icon='add'
            onClick={this.addExtraRow.bind(this, index)} 
          />
        </Table.Cell>
      </Table.Row>:
      <Table.Row>
        <Table.Cell>
          {row.categorySelect}
        </Table.Cell>
      </Table.Row>
    )
  }
}

RowItem.propTypes = {
  addExtraRow: PropTypes.func.isRequired,
  updateRow: PropTypes.func.isRequired,
  updateRowInput: PropTypes.func.isRequired,
  deleteRow: PropTypes.func.isRequired,
  checklist: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  checklist: state.checklist
})

export default connect (mapStateToProps,{addExtraRow,deleteRow, updateRow, updateRowInput})(RowItem);