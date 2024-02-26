import { createContext, useState } from 'react';

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

  /*The value props allows the currentState and the setUserState to be used by
  the children*/
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};