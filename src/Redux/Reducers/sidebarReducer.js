import { HANDLE_USER_SIDEBAR } from '../Actions/sidebarActions';

const INITIAL_STATE = {
  userSidebar: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HANDLE_USER_SIDEBAR:
      return { ...state, userSidebar: !state.userSidebar };
    default:
      return state;
  }
};

export default userReducer;
