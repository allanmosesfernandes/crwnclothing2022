import {React, useState} from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/FormInput';
import Button from '../Button/Button';
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

/* 
    Set States and default form fields
*/    
const [formFields, setFormFields] = useState(defaultFormFields);
const {displayName,email,password,confirmPassword} = formFields;

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

/* 
    Handle Submit
*/

const handleSubmit = async (event) => {
    event.preventDefault();
    if(password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    try {
        const {user} = await createAuthUserWithEmailAndPassword(email,password);
        await createUserDocumentFromAuth(user,{displayName});
        resetFormFields();
    }

    catch(error) {
        if(error.code === 'auth/email-already-in-use')
            {
                alert('Cannot create user, email already in use')
            }
    }
}
  return (
    <div className='sign-up-container'>
        <h2>Don't have an account?</h2>
        <span>Sign Up with your email & password.</span>
        <form onSubmit={handleSubmit}>
            <FormInput 
            label='Display Name'
            required 
            type='text' 
            onChange={handleChange} 
            name='displayName' 
            value={displayName}
            />
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
            <FormInput 
            label='Confirm Password'
            required 
            type='password' 
            onChange={handleChange} 
            name='confirmPassword' 
            value={confirmPassword}
            />

            <Button type='submit' buttonClassName='default'>Sign Up</Button> 
        </form>
    </div>

  )
}

export default SignUpForm