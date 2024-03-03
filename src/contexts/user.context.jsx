import { createContext, useEffect, useState } from 'react';
import {
  createUserDocumentFromAuth,
  onAuthStateChangeListener,
} from '../utils/firebase/firebase.utils';

//Here is where the actual data is stored
export const UserContext = createContext({
  currentUser: null,
  setUserState: () => null,
});

/*The contex providers are components used to indicate what others components
  and their children are allow to get the context*/
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
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
