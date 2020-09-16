import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import Button from "./Button"
import Dropdown from './Dropdown';
import "./Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);
const [button, setButton]=useState(true);
const [dropdown, setDropdown] = useState(false);
const [navbar, setNavbar]=useState(false);

    const handleClick=()=>{
        setClick((click)=>(!click));
    }
    const closeMobileMenu=()=>{
        setClick(false)
    }
    const showButton = () =>{
        if(window.innerWidth<=960){
            setButton(false)
        }else{
              setButton(true)
        }
    }

    useEffect(() => {
      showButton()
    }, [])

    window.addEventListener("resize", showButton)

    // dropdown
    const onMouseEnter = ()=>{
        if(window.innerWidth<960){
            setDropdown(false)
        }else{
            setDropdown(true)
        }
    }
    const onMouseLeave =()=>{
        if(window.innerWidth<960){
            setDropdown(false)
        }else{setDropdown(false)}
    }

const changeBackground = ()=>{
    if(window.scrollY>=80){
        setNavbar(true)
    }else{setNavbar(false)}
}
window.addEventListener("scroll",changeBackground )

    return (
        <>
        <nav className={navbar?"navbar active":"navbar"}>
            <div className="navbar-container">
<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
    TRVL <i className="fab fa-typo3"></i>
</Link>
<div className="menu-icon" onClick={handleClick}>
   <i className = {click ? "fas fa-times" : "fas fa-bars"}/>
</div>
<ul className={click ? "nav-menu active" : "nav-menu"}>
    <li className="nav-item">
       <Link to="/" className="nav-links" onClick={closeMobileMenu}>
           Home
       </Link>
    </li>
    <li className="nav-item"
     onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
       <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
           Services <i className='fas fa-caret-down' />
       </Link>
        {dropdown && <Dropdown />}
    </li>
    <li className="nav-item">
       <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
           Products
       </Link>
    </li>
     <li className="nav-item">
       <Link to="/Contact" className="nav-links-mobile" onClick={closeMobileMenu}>
           Contact
       </Link>
    </li>
</ul>
{button && <Button buttonStyle="btn--outline">Contact</Button>}
            </div>
        </nav>
        </>
    )
}

export default Navbar
