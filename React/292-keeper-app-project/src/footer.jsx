import React from 'react';

function Footer() {
    return (
<footer className="main-footer">
  <div className="footer-container">
    <div className="footer-logo">
      <h2>MyWebsite</h2>
      <p>© 2025 MyWebsite. All rights reserved.</p>
    </div>

    <div className="footer-links">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>

    <div className="footer-social">
      <h3>Follow Us</h3>
      <ul>
        <li><a href="/facebook">Facebook</a></li>
        <li><a href="/twitter">Twitter</a></li>
        <li><a href="/instagram">Instagram</a></li>
      </ul>
    </div>
  </div>
</footer>
    );
}

export default Footer;