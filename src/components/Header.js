import React from 'react';
import '../styles/nes.css'

const Header = (props) => {
    return (
        <header>
            <h1><i className="snes-jp-logo brand"></i>  Luis Esteban Rodríguez González</h1>
            <br />
            <p className="role-title">Software Backend Developer</p>
            {/* <img className="profile-photo" src="/luis.jpg" alt='profile_photo' /> */}
        </header>
    );
}
 
export default Header;