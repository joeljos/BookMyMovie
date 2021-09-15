import React from 'react'
import './Header.css'
import Button from '@material-ui/core/Button'
import Logo from '../../assets/logo.svg'
import {marginLeft} from '@material-ui/core/styles'



function Header() {
    return (
        <div className="Header">
            <img className="svgImage" src={Logo} alt="Logo" />
            <Button style={{ marginLeft: '95%' }} variant="contained" color="default">Login</Button>
        </div>
    )
}

export default Header
