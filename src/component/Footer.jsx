const Footer = ({companyInfo}) => (
  <footer className="footer">
    <div className="container">
      <p className="footer-text">© 2024 {companyInfo.name}. All rights reserved.</p>
      <p className="footer-subtext">Professional Surface Treatment & Coating Solutions</p>
    </div>
  </footer>
);


export default Footer;