import React from 'react';

const Footer = (props) => {
    return (
        <footer className="footer">
            <h4>&copy; {new Date().toLocaleDateString('es-MX', { year: 'numeric' })} 4MLabs. All rights Reserved.</h4>
        </footer>
    );
}
 
export default Footer;