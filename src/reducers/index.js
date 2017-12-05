import tables from './tables'
import appState, * as fromAppState from './appState'
import {combineReducers} from 'redux'

const rootReducer = combineReducers(
    {
      tables,
      appState
    }
);

export const getTables = (state) => {
  return state.tables;
}

export const getSelectedTable = (state) => {
  return fromAppState.getSelectedTable(state.appState);
}

export const getSelectedSecondTable = (state) => {
  return fromAppState.getSelectedSecondTable(state.appState);
}

export default rootReducer;
