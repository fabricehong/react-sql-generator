import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SelectTable from '../components/SelectTable';
import DisplayJoin from '../components/DisplayJoin';
import TablePage from './TablePage';
import {connect} from 'react-redux';
import {getSelectedTable, getSelectedPath, getSelectedSecondTable} from '../reducers';
import {selectTable, navMain} from '../actionCreators';
import {Breadcrumb} from 'react-bootstrap';

class App extends Component {
  render() {
    let index = 0;
    let content;
    const breadcrumbs = [];
    content = <SelectTable onSelect={this.props.selectedFirstTable}/>;
    breadcrumbs.push(
      <Breadcrumb.Item key={index++} onClick={this.props.navMain} href="#">
        Select table
      </Breadcrumb.Item>
    );
    if (this.props.selectedTable) {
      content = <TablePage/>;
      breadcrumbs.push(
        <Breadcrumb.Item onClick={() => this.props.selectedFirstTable(this.props.selectedTable.id)} key={index++} href="#">
          {this.props.selectedTable.label}
        </Breadcrumb.Item>
      );
    }
    if (this.props.selectedPath) {
      content = <DisplayJoin/>;
      breadcrumbs.push(
        <Breadcrumb.Item key={index++} href="#">
          to {this.props.selectedSecondTable.label}
        </Breadcrumb.Item>
      );
    }
    return (
      <div className="App">
        <Breadcrumb>
          {breadcrumbs}
        </Breadcrumb>
        {content}
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    selectedTable : getSelectedTable(state),
    selectedPath : getSelectedPath(state),
    selectedSecondTable : getSelectedSecondTable(state)
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    selectedFirstTable : (tableId) => {dispatch(selectTable(tableId))},
    navMain : () => {dispatch(navMain())}
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
