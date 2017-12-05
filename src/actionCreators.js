

export const selectTable = (tableId) => {
  return {
    'type' : 'SELECT_TABLE',
    'tableId' : tableId
  }
};

export const selectSecondTable = (tableId) => {
  return {
    'type' : 'SELECT_SECOND_TABLE',
    'tableId' : tableId
  }
};
