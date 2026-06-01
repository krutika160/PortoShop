import "./style/FooterLinks.css";

import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn
} from "react-icons/fa";

const FooterLinks = () => {
    return (

        <div className="footer-main">

            {/* Left Side */}

            <div className="footer-contact">

                <h3>CONTACT INFO</h3>

                <div className="info-inner">

                    <div className="info-block">
                        <span>ADDRESS:</span>
                        <p>123 Street Name, City, England</p>
                    </div>

                    <div className="info-block">
                        <span>PHONE:</span>
                        <p>(123) 456-7890</p>
                    </div>

                    <div className="info-block">
                        <span>EMAIL:</span>
                        <p>mail@example.com</p>
                    </div>

                    <div className="info-block">
                        <span>WORKING DAYS/HOURS:</span>
                        <p>Mon - Sun / 9:00 AM - 8:00 PM</p>
                    </div>

                    <div className="social-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaLinkedinIn /></a>
                    </div>
                </div>


            </div>

            {/* Right Side */}

            <div className="footer-right">

                <div className="footer-newsletter">

                    <div>
                        <h3>SUBSCRIBE NEWSLETTER</h3>

                        <p>
                            Get all the latest information on Events,
                            Sales and Offers. Sign up for newsletter today.
                        </p>
                    </div>

                    <form className="newsletter-form">

                        <input
                            type="email"
                            placeholder="Email Address"
                        />

                        <button type="submit">
                            SUBSCRIBE
                        </button>

                    </form>

                </div>

                <div className="footer-menus">

                    <div className="footer-column">

                        <h3>CUSTOMER SERVICE</h3>

                        <div className="menu-grid">

                            <a href="#">About us</a>
                            <a href="#">Order history</a>

                            <a href="#">Contact us</a>
                            <a href="#">Advanced search</a>

                            <a href="#">My account</a>
                            <a href="#">Login</a>

                        </div>

                    </div>

                    <div className="footer-column">

                        <h3>ABOUT US</h3>

                        <div className="menu-grid">

                            <a href="#">Super Fast Html Template</a>
                            <a href="#">Powerful Admin Panel</a>

                            <a href="#">1st Fully working Ajax Theme</a>
                            <a href="#">Mobile & Retina Optimized</a>

                            <a href="#">36 Unique Shop Layouts</a>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
};

export default FooterLinks;