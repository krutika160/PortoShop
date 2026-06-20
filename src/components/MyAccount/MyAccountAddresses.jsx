const MyAccountAddresses = () => {
  return (
    <div className="my-account-addresses">
      <h2>Addresses</h2>

      <p>
        The following addresses will be used on the
        checkout page by default.
      </p>

      <div className="address-box">
        <h4>Billing Address</h4>

        <p>You have not set up this type of address yet.</p>
      </div>
    </div>
  );
};

export default MyAccountAddresses;