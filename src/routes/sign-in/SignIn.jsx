import {React, useEffect } from 'react'
import { 
  signInWithGooglePopup, 
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'
import SignUpForm from '../../components/sign-up-form/SignUpForm'
const SignIn = () => {


  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   console.log(response)
  // }, [])


  // useEffect(() => {
  //   async function storeResponse() {
  //     const response = await getRedirectResult(auth);
  //     if(response) {
  //           const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   }
  //   storeResponse();
  // }, [])
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   console.log(response);
  // }, [])

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }


  return (
    <>
    <div>SignIn</div>
    <SignUpForm />
    <button onClick={logGoogleUser}>Sign in with Google</button>
    {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
    </>

  )
}

export default SignIn