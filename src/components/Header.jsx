import { DropdownButton } from "react-bootstrap";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Modal from 'react-modal';
import { useState, useEffect, useRef } from "react";
import Image1 from './google.png';
import Image2 from './facebook.png';


console.log(Image1, Image2)
const element = <FontAwesomeIcon icon={faUser} />
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
            <div className="login" onClick={() => setmodalIsOpen(true)}>
                <pre>{element} Login </pre>
            </div>
            <Modal isOpen={modalIsOpen}
                style={
                    {
                        overlay:{
                            backgroundColor: '#e5e5e5',
                            opacity:'1',
                            zIndex: '5',
                        },
                        content: {
                            width: '35%',
                            height: '60%',
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            backgroundColor: '#fff',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            // justifyContent: 'center',
                            opacity: '1',
                            transform: 'translate(-50%, -50%)',
                            zIndex: '1000',
                        }

                    }
                }
                className="modal">
                <h1 className="welcome">Welcome to E-Comm</h1>
                <div className="input">
                    <input type="text" onKeyDown="firstKeyDown" ref={signInWithGoogleRef} name="" id="first" placeholder="Log in with Google" />
                    <img src={Image1} className="google" />
                </div>
                <div className="input">
                    <input type="text" onKeyDown="lastKeyDown" ref={signInWithFacebookRef} name="" id="second" placeholder="Log in with Facebook" />
                    <img src={Image2} className="fb" />
                </div>
                <p className="paragraph"> <span>Forgot Password</span></p>
                <p>Do not have an account? <span>Register</span></p>
                <div>
                    <button onKeyDown="submitKeyDown" ref={submitRef} onClick={() => setmodalIsOpen(false)}>close</button>
                </div>
            </Modal>
            <div className="cart">
                <Link to="/items"><pre>{cart} Items</pre></Link>
            </div>
            <div className="searchPrice">
                <pre>$00.00  {search}</pre>
            </div>
        </header>
    )
}

export default Header