import USER_ACTION_TYPES from './user.types';

export const USER_INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};

/**Using redux all reducers recieve the action even though the action is meant to
 * be recieved by just one reducer. then the default value has to be the exact same
 * state to not cause any errors
 */
