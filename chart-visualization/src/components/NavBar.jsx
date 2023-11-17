import React from 'react'
import Logo from './Logo'
import { DropDownProfile, NavLinkWrapper, NavbarWrapper, StyledFontAwesomeIcon, StyledNavLink } from '../styles/NavBar.styled';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [active, setActive] = useState("");
    const [openProfile, setOpenProfile] = useState(false);

    const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('username'));

    const handleLogout = () => {
        console.log("Logout Successfully")
        localStorage.removeItem('username'); 
        setLoggedIn(false);
        setOpenProfile(false);
    };

    

    const link = [
        {
            page: 'Home',
            href: "/",
        },
        {
            page: 'School',
            href: '/School'
        },
        {
            page: 'College',
            href: '/College'
        },
        {
            page: 'DynamicList',
            href: '/DynamicList'
        },
        {
            page: 'Singup',
            href: '/Signup'
        },
        {
            page: 'Login',
            href: '/Login'
        },
    ]

    return (
        <NavbarWrapper className='bg-dark'>
            <Logo />
            <StyledFontAwesomeIcon icon={faBars} onClick={() => setActive(!active)} />
            <NavLinkWrapper active={active}>
                {link.map((link) => (
                    <StyledNavLink activeclassname="active" key={link.page} to={link.href}>
                        {link.page}
                    </StyledNavLink>
                ))}
            </NavLinkWrapper>
            {openProfile && (
                <DropDownProfile className='text-dark'>
                    <ul className='flex flex-col gap-4' onClick={() => setOpenProfile(false)}>
                        {loggedIn && <p>{localStorage.getItem('username')}</p>}
                        <li >Profile</li>
                        <li >Settings</li>
                        {loggedIn ? (
                            <Link className='link' to={'/Logout'}> 
                            <li  onClick={handleLogout}>Logout</li>
                            </Link>
                        ) : (
                            <Link className='link' to='/Login'>
                                <li >Login</li>
                            </Link>
                        )}
                    </ul>
                </DropDownProfile>
            )}
            <img id='avatar' className='rounded-circle' alt="Avatar" src="https://i.pravatar.cc/300" onClick={() => setOpenProfile((prev) => !prev)} />

        </NavbarWrapper>
    )
}

export default NavBar;