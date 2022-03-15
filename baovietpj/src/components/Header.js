import React from 'react'
import logo_header from '../img/logo_header.png'
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
function Header() {
    return (
        <div>
            <header>
                <div className='header__honme '>
                    <img className='logo_header' src={logo_header} />
                    <div className='log-in'>
                        <Link to="/"><button className='log-in-btn'>Đăng nhập</button></Link>
                    </div>
                    
                </div>
            </header>
        </div>
    )
}

export default Header