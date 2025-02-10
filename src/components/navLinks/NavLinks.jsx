import React from 'react'
import Logo from '../../assets/logo192.png'
import { useNavigate, useNavigation } from 'react-router-dom'
import '../../styles/nav.css'

export default function NavLinks() {

    const navigate = useNavigate();

    return (
        <div className='navbar-container'>
            <img src={Logo} alt="logo" />
            <div className='links'>
                <ul>
                    <li onClick={() => navigate('/PracticeReact/')}>Home</li>
                    <li onClick={() => navigate('/PracticeReact/about')}>About</li>
                    <li onClick={() => navigate('/PracticeReact/contact')}>Contact</li>
                </ul>
            </div>

        </div>
    )
}