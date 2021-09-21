import {React,useState} from 'react'
import './Header.css'
import Button from '@material-ui/core/Button'
import Logo from '../../assets/logo.svg'
import BookShow from '../../screens/bookshow/BookShow'




function Header() {
    let [loggedinflag, setLoggedinflag] = useState(false);
    let [bookshowflag, setbookshowflag] = useState(false);
    return (
        <div className="Header">
            <img className="svgImage" src={Logo} alt="Logo" />
            <div className="bookshowDiv">
                {
                    (bookshowflag) ?
                        <Button variant="contained" color="primary" onClick={()=>{<BookShow baseUrl="/"></BookShow>}}>Book Show</Button> : null
                }
            </div>
            <div className="loginlogoutDiv">
                {
                    (loggedinflag) ?
                        <Button variant="contained" color="default">Logout</Button>
                        :
                        <Button variant="contained" color="default">Login</Button>

                }
            </div>

        </div>
    )
}

export default Header
