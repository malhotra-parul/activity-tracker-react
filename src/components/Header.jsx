import React from 'react'
import styled from "styled-components"
import logo from "../assets/logo.svg"

const AppBar = styled.nav`
    background: #fbfbfe;
    color: #1a0e45;
    width: 80%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    box-shadow: 0 7px 15px -8px rgba(25,4,69,0.1);
`

const Title = styled.span`
   font-size: 1.6em;
   font-weight: bold;
   padding-left: 20px;
   font-family: 'Cedarville Cursive', cursive;
`

const Logo = styled.img`
    width: 5em;
    height: 5em;

`




const Header = () => {
    const title = "Activity Tracker"
    
    return (
       <AppBar>
            <Logo src={logo} alt="logo" />
            <Title>{title}</Title>
       </AppBar>
    )
}

export default Header
