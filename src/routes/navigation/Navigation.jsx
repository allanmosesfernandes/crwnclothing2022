import React from 'react'
import {Outlet, Link} from 'react-router-dom'
import { Fragment } from 'react'
import {ReactComponent as Logo } from '../../assets/images/crown.svg'
import '../navigation/navigation.scss'


const Navigation = () => {
  return (
    <Fragment>
        <div className='navigation'>
          <Link to='/' className='logo-container'>
            <Logo className='logo'/>
          </Link>
          <div className='nav-links-container'>
            <Link to='/shop' className='nav-link'>
              Shop
            </Link>
            <Link to='/auth' className='nav-link'>
              Sign In
            </Link>
          </div>
        </div>
        <Outlet />
    </Fragment>
  )
}

export default Navigation