import tables, * as fromTables from './tables'
import appState, * as fromAppState from './appState'
import {combineReducers} from 'redux'

const rootReducer = combineReducers(
    {
      tables,
      appState
    }
);

export const getTables = (state) => {
  return fromTables.getTables(state.tables);
}

export const getSelectedTable = (state) => {
  return getTable(state, fromAppState.getSelectedTable(state.appState));
}

export const getSelectedSecondTable = (state) => {
  const path = getSelectedPath(state);
  if (!path) {
    return undefined;
  }
  const part = path[path.length-1];
  return getTable(state, part.table);
}

export const getSelectedPath = (state) => {
  return fromAppState.getSelectedPath(state.appState);
}

export const getFieldsToTables = (state) => {
  return fromTables.getFieldsToTables(state.tables);
}

export const getTableIdToTables = (state) => {
  return fromTables.getTableIdToTables(state.tables);
}

export const getTable = (state, id) => {
  return fromTables.getTable(state.tables, id);
}




export default rootReducer;
