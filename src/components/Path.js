import React from 'react';
import {connect} from 'react-redux';
import {getTableIdToTables} from '../reducers'

const Table = (props) => {
  const {tables} = props;
  const tableId = props.desc.table;
  const table = tables[tableId];
  return (
    <div>{table.label}</div>
  );
};

const Field = (props) => {
  const fieldId = props.desc.field;
  return (
    <div>{fieldId}</div>
  );
};

const Path = (props) => {
  const {path} = props;
  const components = path.map((part) => {
    if (part.table) {
      return <Table desc={part} tables={props.tableIdToTables}/>;
    } else if (part.field) {
      return <Field desc={part}/>;
    } else {
      throw "Error with part " + part;
    }
  });

  return (
    <div style={{border: '5px solid red'}}>
      {components}
    </div>
  );
}

const mapStateToProps = (state) => (
  {
    tableIdToTables : getTableIdToTables(state)
  }
);

export default connect(mapStateToProps)(Path);
