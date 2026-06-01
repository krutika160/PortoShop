import FooterTop from "./FooterTop";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <FooterTop />
                <FooterLinks />
                <FooterBottom />
            </div>
        </footer>
    );
};

export default Footer;