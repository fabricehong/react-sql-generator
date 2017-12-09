import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SelectTable from '../components/SelectTable';
import DisplayJoin from '../components/DisplayJoin';
import TablePage from './TablePage';
import {connect} from 'react-redux';
import {getSelectedTable, getSelectedPath} from '../reducers';
import {selectTable} from '../actionCreators';

class App extends Component {
  render() {
    if (this.props.selectedPath) {
      return (
        <DisplayJoin/>
      );
    }
    if (this.props.selectedTable) {
      return (
        <TablePage/>
      );
    }
    return (
      <div className="App">
        <SelectTable onSelect={this.props.selectedFirstTable}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    selectedTable : getSelectedTable(state),
    selectedPath : getSelectedPath(state),
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    selectedFirstTable : (tableId) => {dispatch(selectTable(tableId))}
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
