const CHECK_STATUS = 'CHECK_STATUS';

const defaultState = [];

export const checkStatusReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'In progress..';
    default:
      return state;
  }
};

export const status = () => ({ type: CHECK_STATUS });
