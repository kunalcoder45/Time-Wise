import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes
import { useEffect } from "react";
import axios from "axios";

const Logout = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Logout logic (invalidate session)
    axios
      .get("http://localhost:8080/auth/logout", { withCredentials: true })
      .then(() => {
        // Clear local storage or any state (if necessary)
        localStorage.removeItem("user");

        // Redirect to login page after logout
        navigate("/login");
      })
      .catch((err) => {
        console.error("Error during logout:", err);
      });
  }, [navigate]);

  return (
    <div className="logout min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-md w-full space-y-8 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md transition-colors duration-300">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
          You are logged out
        </h1>
        {/* Show user details */}
        {user ? (
          <div className="user-details text-center">
            <img
              src={user.picture}
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <p className="text-xl font-semibold">{user.name}</p>
            <p className="text-gray-600">{user.email}</p>
          </div>
        ) : (
          <p className="text-gray-600">No user data available</p>
        )}
      </div>
    </div>
  );
};

// PropTypes validation
Logout.propTypes = {
  user: PropTypes.shape({
    picture: PropTypes.string, // Picture is optional
    name: PropTypes.string, // Name is optional
    email: PropTypes.string, // Email is optional
  }), // user is now optional
};

export default Logout;
