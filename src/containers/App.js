import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SelectTable from '../components/SelectTable';
import TablePage from './TablePage';
import {connect} from 'react-redux';
import {getSelectedTable} from '../reducers';
import {selectTable} from '../actionCreators';

class App extends Component {
  render() {
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
    selectedTable : getSelectedTable(state)
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    selectedFirstTable : (tableId) => {dispatch(selectTable(tableId))}
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
