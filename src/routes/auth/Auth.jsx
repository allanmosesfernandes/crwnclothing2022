import React from 'react'
import './auth.scss'
import SignInForm from '../../components/sign-in-form/SignInForm'
import SignUpForm from '../../components/sign-up-form/SignUpForm'

const Auth = () => {
  return (
    <div className='authentication-container'>
        <SignInForm />
        <SignUpForm />
    </div>
  )
}

export default Auth