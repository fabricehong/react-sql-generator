const appState = (state = {}, action) => {
  let newState;
  switch(action.type) {
    case 'SELECT_TABLE':
      newState = {
        ...state,
        'selectedTable' : action.tableId
      };
      delete newState.selectedPath;
      return newState;
    case 'SELECT_PATH':
      return {
        ...state,
        'selectedPath' : action.path
      }
    case 'MAIN':
      newState = {...state};
      delete newState.selectedTable;
      delete newState.selectedPath;
      return newState;
    default:
      return state;
  }
};

export const getSelectedTable = (state) => {
  return state.selectedTable;
}

export const getSelectedSecondTable = (state) => {
  return state.selectedSecondTable;
}

export const getSelectedPath = (state) => {
  return state.selectedPath;
}

export default appState;
