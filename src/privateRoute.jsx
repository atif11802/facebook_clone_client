import { Navigate } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";

function PrivateRoute({ children }) {
	const [token, setToken] = useLocalStorage("token", "");

	return token?.token?.length > 0 ? children : <Navigate to='/login' />;
}

export default PrivateRoute;
