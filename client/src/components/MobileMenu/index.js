import React from 'react';
import {FaTimes} from 'react-icons/fa'
import style from './style.css'


function MobileMenu ({ isOpen, toggle }) {
    
    return (
        <div id="mcontainer" isOpen={isOpen} onClick={toggle} style={{ opacity: isOpen ? '100%' : '0', top: isOpen ? '0' : '-100%' }}>
            <div className="icon" >
                <FaTimes onClick={ toggle }/>
            </div>
            <div className="wrapper">
                <div className="mmenu">
                    <a className="pages" href='/' onClick={toggle}>Home</a>
                    <a className="pages" href='/scores' onClick={toggle}>Scores</a>
                    <a className="pages" href='/profile' onClick={toggle}>Profile</a>
                    <a className="pages" href='/logout' onClick={toggle}>Logout</a>                    
                </div>
            </div>
        </div>
    )
}

export default MobileMenu