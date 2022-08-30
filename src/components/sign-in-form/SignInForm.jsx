import {React, useState} from 'react'
import { createUserDocumentFromAuth, signInExistingUserWithEmailAndPassword,signInWithGooglePopup} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/FormInput';
import Button from '../Button/Button';
const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {

/* 
    Set States and default form fields
*/    
const [formFields, setFormFields] = useState(defaultFormFields);
const {email,password} = formFields;

/* 
    Resest Form Fields on Submit
*/
const resetFormFields = () => {
    setFormFields(defaultFormFields)
}

/* 
    Change Handler for input
*/
const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]:value})
}
const signInWithGPopUp =  async () => {
const {user} = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user)
}
/* 
    Handle Submit
*/

const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await signInExistingUserWithEmailAndPassword(email,password);
        resetFormFields();
    }

    catch(error) {

        switch(error.code) {
            case 'auth/wrong-password':
            alert('Wrong password for email');
            break;

            case 'auth/user-not-found':
            alert('User does not exist');
            break;

            default:
        }
    }
}


  return (
    <div className='sign-up-container'>
        <h2>Already have an account?</h2>
        <span>Sign in with your email & password.</span>
        <form onSubmit={handleSubmit}>

            <FormInput 
            label='Email'
            required 
            type='email' 
            onChange={handleChange} 
            name='email' 
            value={email}
            />
            <FormInput 
            label='Password'
            required 
            type='password' 
            onChange={handleChange} 
            name='password' 
            value={password}
            />

            <div className='buttons-container'>
                <Button type='submit' buttonClassName='default'>Sign In</Button> 
                <Button 
                onClick={signInWithGPopUp} 
                type='button' 
                buttonClassName='google-sign-in'>Google sign in
                </Button> 
            </div>
        </form>
    </div>

  )
}

export default SignInForm