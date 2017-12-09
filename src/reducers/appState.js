const appState = (state = {}, action) => {
  switch(action.type) {
    case 'SELECT_TABLE':
      return {
        ...state,
        'selectedTable' : action.tableId
      }
      case 'SELECT_SECOND_TABLE':
        return {
          ...state,
          'selectedSecondTable' : action.tableId
        }
      case 'SELECT_PATH':
        return {
          ...state,
          'selectedPath' : action.path
        }
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
