import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Breadcrumb from "../components/About/Breadcrumb";

import MyAccountContent from "../components/MyAccount/MyAccountContent";

const MyAccount = () => {
  return (
    <>
      <Header />

      <Breadcrumb title="My Account" />

      <MyAccountContent />

      <Footer />
    </>
  );
};

export default MyAccount;