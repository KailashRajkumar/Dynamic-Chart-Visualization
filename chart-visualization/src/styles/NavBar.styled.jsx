import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LogoImg = styled.img`
 width: 150px;
 align-self: start;
 margin-top: 0.5rem;
`;

const DropDownProfile = styled.div`
    ul{
        padding: 0;
        margin: 0;
        text-align: center;
    }

    p{
        color: #ff9b38;
        font-size: small;
        font-weight: 600;
    }

    li{
        cursor: pointer;
        list-style: none;
        &:not(:last-child) {
        border-bottom: 1px solid #ccc;
    }
    &:hover{
        border-radius: 2px;
        background-color:#ff9b38;
        color: white;
        
    }
    }
    z-index: 2;
    position: absolute;
    top:5.5rem;
    right: 2rem;
    width: 150px;
    padding: 20px;
    border-radius: 15px;
    background-color: #fff;
    border: 1px solid grey;
    &::before {
    content: '';
    position: absolute;
    top: -0.7rem;
    right: 1.8rem;
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
    background-color: #fff;
    border-left: 1px solid grey;
    border-top: 1px solid grey;
  }

  .link{
    text-decoration: none;
    color: black;
  }

`;



const NavbarWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background: #212529; */
    padding: 1rem 3rem;
    position: relative;

    img:last-child{
        width: 50px;
        cursor: pointer;
    }


    @media(max-width:704px){
        flex-direction: column;
        padding: 1rem;
        img:last-child{
        display: none;
    }
    }
`;



const NavLinkWrapper = styled.div`

    @media(max-width:704px){
        display: ${(props) => (props.active ? 'block' : 'none')};
        text-align: center;
        padding: 2rem 0;
    }
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    transition: .2s;
    color: #fff;
    margin-left: 2rem;
    &:nth-last-child(-n+2){
        background: #007dfc;
        padding: 0.5rem 1rem;
        border-radius: 30px;
        &:hover{
            color: #fff;
        }
        &.${(props) => props.activeclassname}{
            color: #fff;
        }

        
    }

    &.${(props) => props.activeclassname}{
        color: #007dfc;
    }

    &:hover{
        color: #007dfc;
    }

    @media(max-width:704px){
        display: block;
        margin: 2rem auto;
    }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    display: none;
    position: absolute;
    right: 20px;
    top: 21px;
    color: #fff;
    font-size: 1.8rem;
    cursor: pointer;

    @media(max-width:704px){
        display: block;
    }
`;


export { LogoImg, NavbarWrapper, NavLinkWrapper, StyledNavLink, StyledFontAwesomeIcon, DropDownProfile };