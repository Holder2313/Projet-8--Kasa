import React from 'react'
import footerLogo from '../assets/logo/footer-logo.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img className='footer__logo__img' src={footerLogo} alt="" />
      </div>
      <div className="footer__legal">
        <p>© 2024 Kasa.All right reserved</p>
      </div>
    </footer>
  );
}
