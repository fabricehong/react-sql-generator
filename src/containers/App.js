import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SelectTable from '../components/SelectTable';
import DisplayJoin from '../components/DisplayJoin';
import TablePage from './TablePage';
import {connect} from 'react-redux';
import {getSelectedTable, getSelectedPath, getSelectedSecondTable} from '../reducers';
import {selectTable, navMain} from '../actionCreators';
import {PageHeader, Navbar, Nav, NavItem, Breadcrumb, Grid, Col, Row, Panel} from 'react-bootstrap';

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
      <Grid style={{marginTop:20}}>
        <Row className="show-grid">
          <Col md={2}/>
          <Col md={8}>
            <Navbar inverse collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="#">SQL Generator</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav activeKey={1}>
                  <NavItem eventKey={1} href="#">Generate SQL</NavItem>
                  <NavItem eventKey={2} href="#">Tables</NavItem>
                </Nav>
                {/*<Nav pullRight>
                  <NavItem eventKey={1} href="#">About</NavItem>
                </Nav>*/}
              </Navbar.Collapse>
            </Navbar>
            <Breadcrumb>
              {breadcrumbs}
            </Breadcrumb>
            <Panel>
              {content}
            </Panel>
          </Col>
          <Col md={2}/>
        </Row>
      </Grid>
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
