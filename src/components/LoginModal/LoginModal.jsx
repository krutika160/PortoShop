import { FaTimes } from "react-icons/fa";
import "./style/LoginModal.css";

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="login-overlay"
      onClick={onClose}
    >
      <div
        className="login-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close-btn"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        <h2>Login</h2>

        <form>
          <div className="login-form-group">
            <label>
              Username or email address <span>*</span>
            </label>

            <input type="text" />
          </div>

          <div className="login-form-group">
            <label>
              Password <span>*</span>
            </label>

            <input type="password" />
          </div>

          <div className="login-options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="login-btn"
          >
            LOGIN
          </button>

          <h4 className="register-now">
            REGISTER NOW!
          </h4>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;