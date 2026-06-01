import "./style/FooterBottom.css";

import paymentImg from "../../assets/images/payment.png";

const FooterBottom = () => {
    return (
        <div className="footer-bottom">

            <p>
                © Porto eCommerce. 2021. All Rights Reserved
            </p>

            <div>
                
            <img
                src={paymentImg}
                alt="payment"
            />
                </div>


        </div>
    );
};

export default FooterBottom;