import React, { Component } from 'react';
import {getSelectedTable, getSelectedSecondTable} from '../reducers';
import {selectSecondTable} from '../actionCreators';
import {connect} from 'react-redux';
import SelectTable from '../components/SelectTable';

class TablePage extends Component {
  render() {
    let selectedTable = null;
    if (this.props.secondTable) {
      selectedTable = (
        <div>{this.props.secondTable}</div>
      );
    } else {
      const {onSelectSecondTable} = this.props;
      selectedTable = <SelectTable onSelect={onSelectSecondTable}/>
    };
    return (
      <div>
        <div>{this.props.selectedTable}</div>
        {selectedTable}
      </div>
    );
  }
}


const mapStateToProps = (state) => (
  {
    selectedTable : getSelectedTable(state),
    secondTable : getSelectedSecondTable(state),
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onSelectSecondTable : (tableId) => {dispatch(selectSecondTable(tableId))}
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(TablePage);
