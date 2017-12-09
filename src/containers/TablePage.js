import React, { Component } from 'react';
import {getSelectedTable, getSelectedSecondTable} from '../reducers';
import {selectSecondTable} from '../actionCreators';
import {connect} from 'react-redux';
import PathsToWord from '../components/PathsToWord';

class TablePage extends Component {

  render() {
    return (
      <div>
        <div>{this.props.selectedTable}</div>
        <PathsToWord fromTableId={this.props.selectedTable}/>
      </div>
    );
  }
}


const mapStateToProps = (state) => (
  {
    selectedTable : getSelectedTable(state),
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onSelectSecondTable : (tableId) => {dispatch(selectSecondTable(tableId))}
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(TablePage);
