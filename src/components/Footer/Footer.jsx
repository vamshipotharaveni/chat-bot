import React from 'react'
import './Footer.css'
const Footer =() => {
    return (
        <footer className="footer">
    <div className="footer-line"></div>
    <div className="social-icons">
        <a href="https://instagram.com/_vamshi_yadav__001" target="_blank" className="social-link">
            <i className="fab fa-instagram"></i>
        </a>
        <a href="https://wa.me/7075990590" target="_blank" className="social-link">
            <i className="fab fa-whatsapp"></i>
        </a>
        <a href="mailto:potharavenivamshi2003@gmail.com" target="_blank" className="social-link">
            <i className="fas fa-envelope"></i>
        </a>
        <a href="https://github.com/vamshipotharaveni" target="_blank" className="social-link">
            <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/vamshi-potharaveni-120175271" target="_blank" className="social-link">
            <i className="fab fa-linkedin"></i>
        </a>
    </div>
</footer>

    )
}
export default Footer