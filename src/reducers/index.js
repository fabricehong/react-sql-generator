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
  return fromAppState.getSelectedTable(state.appState);
}

export const getSelectedSecondTable = (state) => {
  return fromAppState.getSelectedSecondTable(state.appState);
}

export const getFieldsToTables = (state) => {
  return fromTables.getFieldsToTables(state.tables);
}

export const getTableIdToTables = (state) => {
  return fromTables.getTableIdToTables(state.tables);
}

export default rootReducer;
