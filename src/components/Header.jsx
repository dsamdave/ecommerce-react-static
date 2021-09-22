import { DropdownButton } from "react-bootstrap";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faAd } from "@fortawesome/free-solid-svg-icons";
import Modal from 'react-modal';
import { useState, useEffect, useRef } from "react";
import Image1 from './google.png';
import Image2 from './facebook.png';


console.log(Image1, Image2)
const element = <FontAwesomeIcon icon={faUser} />
const sell = <FontAwesomeIcon icon={faAd} />
const cart = <FontAwesomeIcon icon={faShoppingCart} />
const search = <FontAwesomeIcon icon={faSearch} />
const arrowdown = <FontAwesomeIcon icon={faCaretDown} />


export const Header = () => {
    const [modalIsOpen, setmodalIsOpen] = useState(false);
    const signInWithGoogleRef = useRef();
    const signInWithFacebookRef = useRef();
    const submitRef = useRef();
    useEffect(() => {
        // signInWithFacebookRef.current.focus();
        function firstKeyDown(){
            
        }
        function lastKeyDown(){

        }
        function submitKeyDown(){
        }
    }, [])
    
    // document.addEventListener("click", e => {
    //     const isDropdownButton = e.target.matches("[data-dropdown-button]")
    //     if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    //     let currentDropdown;
    //     if (isDropdownButton) {
    //         currentDropdown = e.target.closest('[data-dropdown]');
    //         currentDropdown.classList.toogle('active')
    //     }
      
    //     document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    //         if (dropdown === currentDropdown) return
    //         dropdown.classList.remove('active')
    //     })
    // })

    return (
        <header className="Header">
           <div className="Header-left">
            <div className="en dropdown" data-dropdown>
                    <pre className="link" data-dropdown-button>EN   {arrowdown}</pre>
                    <div className="dropdown-items">
                        EN (USA)
                        EN (UK) 
                    </div>
                </div>
                <div className="en dropdown" data-dropdown>
                    <pre className="link" data-dropdown-button>USD   {arrowdown}</pre>
                    <div className="dropdown-items">
                        NAIRA
                        EURO 
                    </div>
                </div>
           </div>
            <div className="Header-right">
                <div className="login" >
                <Link to="/profile"><pre>{element} Profile </pre></Link>
                </div>
                <div className="cart" >
                <Link to="/sell"><pre>{sell} Sell </pre></Link>
                </div>
            
                <div className="cart">
                    <Link to="/items"><pre>{cart} Items</pre></Link>
                </div>
                <div className="searchPrice">
                    <pre>$00.00  {search}</pre>
                </div>
            </div>
        </header>
    )
}

export default Header