import { myAccountMenuData } from "../../data/myAccountMenuData";

const MyAccountSidebar = ({
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="my-account-sidebar">
        <h4 className="account-title">MY ACCOUNT</h4>
      <ul>
        {myAccountMenuData.map((item) => (
          <li
            key={item}
            className={
              activeTab === item ? "active" : ""
            }
            onClick={() => setActiveTab(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyAccountSidebar;