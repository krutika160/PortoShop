const MyAccountAccountDetails = () => {
  return (
    <div className="my-account-details">
      <h2>Account Details</h2>

      <form>
        <div className="form-group">
          <label>First Name *</label>
          <input type="text" />
        </div>

        <div className="form-group">
          <label>Last Name *</label>
          <input type="text" />
        </div>

        <div className="form-group">
          <label>Email Address *</label>
          <input type="email" />
        </div>

        <button type="submit">
          SAVE CHANGES
        </button>
      </form>
    </div>
  );
};

export default MyAccountAccountDetails;