import React from 'react';
import '../styles/footer.css';

const Footer = (props) => {
    return (
        <div className="footer">
            <h4>&copy; {new Date().toLocaleDateString('es-MX', { year: 'numeric' })} 4MLabs. All rights Reserved.</h4>
        </div>
    );
}
 
export default Footer;