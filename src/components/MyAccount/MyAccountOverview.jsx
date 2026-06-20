import "./style/MyAccount.css";
import { myAccountData } from "../../data/myAccountData";

const MyAccountOverview = () => {
  return (
    <div className="my-account-overview">
      <p>
        Hello <strong>Editor</strong> (not <strong>Editor?</strong>
        <a href="#"> Log out</a>)
      </p>

      <p>
        From your account dashboard you can view your
        <a href="#"> recent orders</a>, manage your
        <a href="#"> shipping and billing addresses</a>, and edit
        <a href="#"> your password and account details</a>.
      </p>

      <div className="my-account-cards">
        {myAccountData.map((item) => {
          const Icon = item.icon;

          return (
            <div className="my-account-card" key={item.id}>
              <Icon className="card-icon" />
              <h4>{item.title}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyAccountOverview;