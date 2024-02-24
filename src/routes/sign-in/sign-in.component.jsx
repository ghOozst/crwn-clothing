import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1> Sign In</h1>
      <button onClick={logGoogleUser}>Sing In With Google Popup</button>
      <SignUpForm />
    </div>
  );
};
export default SignIn;
