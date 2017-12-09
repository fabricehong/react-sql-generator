import React, { Component } from 'react';
import {getSelectedTable, getSelectedSecondTable} from '../reducers';
import {connect} from 'react-redux';
import PathsToWord from '../components/PathsToWord';

class TablePage extends Component {

  render() {
    return (
      <div>
        <div>{this.props.selectedTable.label}</div>
        <PathsToWord fromTableId={this.props.selectedTable.id}/>
      </div>
    );
  }
}


const mapStateToProps = (state) => (
  {
    selectedTable : getSelectedTable(state),
  }
);

export default connect(mapStateToProps)(TablePage);
