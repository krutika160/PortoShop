import "./style/FooterBottom.css";

import paymentStripe from "../../assets/images/payment-stripe.png";
import payPal from "../../assets/images/paypal.png";
import Visa from "../../assets/images/visa.png";
import veriSign from "../../assets/images/verisign.png";

const FooterBottom = () => {
    return (
        <div className="footer-bottom">

            <p>
                © Porto eCommerce. 2021. All Rights Reserved
            </p>

            <div className="footer-images">
                <span className="img-box">
                    <img
                        src={Visa}
                        alt="payment"
                    />
                </span>
                <span className="img-box">
                    <img
                        src={payPal}
                        alt="payment"
                    />
                </span>
                 <span className="img-box">
                    <img
                        src={paymentStripe}
                        alt="payment"
                    />
                </span>
                 <span className="img-box">
                    <img
                        src={veriSign}
                        alt="payment"
                    />
                </span>
                
            </div>


        </div>
    );
};

export default FooterBottom;