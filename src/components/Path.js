import React from 'react';
import {connect} from 'react-redux';
import {getTableIdToTables} from '../reducers'
import {selectPath} from '../actionCreators'

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
  let i = 0;
  const components = path.map((part) => {
    if (part.table) {
      return <Table key={i++} desc={part} tables={props.tableIdToTables}/>;
    } else if (part.field) {
      return <Field key={i++} desc={part}/>;
    } else {
      throw "Error with part " + part;
    }
  });

  return (
    <div onClick={props.onClick} style={{border: '5px solid red'}}>
      {components}
    </div>
  );
}

const mapStateToProps = (state) => (
  {
    tableIdToTables : getTableIdToTables(state)
  }
);

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    onClick : () => dispatch(selectPath(ownProps.path))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Path);
