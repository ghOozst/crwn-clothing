import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import { useEffect } from 'react';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1> Sign In</h1>
      <button onClick={logGoogleUser}>Sing In With Google Popup</button>
    </div>
  );
};
export default SignIn;
