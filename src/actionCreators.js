

export const selectTable = (tableId) => {
  return {
    'type' : 'SELECT_TABLE',
    'tableId' : tableId
  }
};

export const selectPath = (path) => {
  return {
    'type' : 'SELECT_PATH',
    'path' : path
  }
};

export const navMain = () => {
  return {
    'type' : 'MAIN'
  }
};
