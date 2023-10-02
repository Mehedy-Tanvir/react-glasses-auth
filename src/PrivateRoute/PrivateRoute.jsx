import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return <h1>Loading</h1>;
  } else if (!user) {
    return <Navigate to="/login"></Navigate>;
  } else {
    return children;
  }
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
