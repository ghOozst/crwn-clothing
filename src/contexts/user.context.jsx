import { createContext, useEffect, useReducer } from 'react';
import {
  createUserDocumentFromAuth,
  onAuthStateChangeListener,
} from '../utils/firebase/firebase.utils';
import { createAction } from '../utils/reducer/reducer.utils';

//Here is where the actual data is stored
export const UserContext = createContext({
  currentUser: null,
  setUserState: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

/*The contex providers are components used to indicate what others components
  and their children are allow to get the context*/
export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  };
  //const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  //This only runs one time when the component is mounted
  useEffect(() => {
    /*onAuthStateChangeListener passes the code we want to run  every time the 
    user changes */
    const unsubscribe = onAuthStateChangeListener((user) => {
      //If the there is a user logged in create a document in the database
      if (user) createUserDocumentFromAuth(user);
      setCurrentUser(user);
    });
  }, []);
  /*The value props allows the currentState and the setUserState to be used by
  the children*/
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
