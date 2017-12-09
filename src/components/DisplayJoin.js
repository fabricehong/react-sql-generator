import React from 'react';
import {connect} from 'react-redux';
import {getSelectedPath, getTableIdToTables} from '../reducers';

const DisplayJoin = (props) => {
  const {tableIdToTables} = props;
  const path = [...props.path];
  let first = path.shift();
  let currentTable = tableIdToTables[first.table];
  let index = 0;
  let query = [<div key={index++}>select * from {currentTable.label} </div>];
  let currentField;
  path.forEach((part) => {
    if (part.field) {
      currentField = part.field;
    } else if (part.table) {
      currentTable = tableIdToTables[part.table];
      query.push(<div key={index++}>inner join {currentTable.label} on {currentField} </div>);
    }
  });
  return (
    <div>
      {query}
    </div>
  );
};
const mapStateToProps = (state) => (
  {
    path : getSelectedPath(state),
    tableIdToTables : getTableIdToTables(state),
  }
);
export default connect(mapStateToProps)(DisplayJoin);
