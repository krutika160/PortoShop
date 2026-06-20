import { useState } from "react";

import MyAccountSidebar from "./MyAccountSidebar";
import MyAccountOverview from "./MyAccountOverview";
import MyAccountOrders from "./MyAccountOrders";
import MyAccountDownloads from "./MyAccountDownloads";
import MyAccountAddresses from "./MyAccountAddresses";
import MyAccountAccountDetails from "./MyAccountAccountDetails";
import MyAccountWishlist from "./MyAccountWishlist";

import "./style/MyAccount.css";

const MyAccountContent = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <section className="my-account-section">
      <div className="container">
        <div className="my-account-wrapper">

          <MyAccountSidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <div className="my-account-right">

            {activeTab === "Dashboard" && (
              <MyAccountOverview />
            )}

            {activeTab === "Orders" && (
              <MyAccountOrders />
            )}

            {activeTab === "Downloads" && (
              <MyAccountDownloads />
            )}

            {activeTab === "Addresses" && (
              <MyAccountAddresses />
            )}

            {activeTab === "Account Details" && (
              <MyAccountAccountDetails />
            )}

            {activeTab === "Wishlist" && (
              <MyAccountWishlist />
            )}

            {activeTab === "Logout" && (
              <div className="my-account-logout">
                <h2>Logout</h2>
                <p>You have been logged out.</p>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};

export default MyAccountContent;