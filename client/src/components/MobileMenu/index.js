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
                    <a className="pages" to='home' onClick={toggle}>Home</a>
                    <a className="pages" to='projects' onClick={toggle}>Projects</a>
                    <a className="pages"to='skills' onClick={toggle}>Skills</a>
                    <a className="pages"to='contact' onClick={toggle}>Contact</a>                    
                </div>
            </div>
        </div>
    )
}

export default MobileMenu