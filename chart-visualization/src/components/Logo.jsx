import React from 'react'
import { LogoImg } from '../styles/NavBar.styled'
import logo from '../assets/logo.svg';
const Logo = () => {
  return (
    <LogoImg src={logo} alt='logo' />
  )
}

export default Logo