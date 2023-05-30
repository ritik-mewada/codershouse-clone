import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Navigation from "./components/shared/Navigation/Navigation";
import Authenticate from "./pages/Authenticate/Authenticate";
import Activate from "./pages/Activate/Activate";
import Rooms from "./pages/Rooms/Rooms";
import { useSelector } from "react-redux";
import { useLoadingWithRefresh } from "./hooks/useLoadingWithRefresh";
import Loader from "./components/shared/Loader/Loader";
import Room from "./pages/Rooms/Room/Room";

function App() {
  const { loading } = useLoadingWithRefresh();

  return loading ? (
    <Loader message="Loading, Please Wait" />
  ) : (
    <BrowserRouter>
      <Navigation />
      <Routes>
        {/* home route */}
        <Route
          path="/"
          element={
            <GuestRoute>
              <Home />
            </GuestRoute>
          }
        />
        {/* guest route */}
        <Route
          path="/authenticate"
          element={
            <GuestRoute>
              <Authenticate />
            </GuestRoute>
          }
        />
        {/* semi protected route */}
        <Route
          path="/activate"
          element={
            <SemiProtectedRoute>
              <Activate />
            </SemiProtectedRoute>
          }
        />
        {/* protected routes */}
        <Route
          path="/rooms"
          element={
            <ProtectedRoute>
              <Rooms />
            </ProtectedRoute>
          }
        />
        <Route
          path="/room/:id"
          element={
            <ProtectedRoute>
              <Room />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

const GuestRoute = ({ children }) => {
  const location = useLocation(); // for current state path
  const { isAuth } = useSelector((state) => state.auth);

  return isAuth ? (
    <Navigate
      to={{
        pathname: "/rooms",
        state: { from: location.pathname },
      }}
    />
  ) : (
    children
  );
};

const SemiProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { isAuth, user } = useSelector((state) => state.auth);

  return !isAuth ? (
    <Navigate
      to={{
        pathname: "/",
        state: { from: location },
      }}
    />
  ) : isAuth && !user.activated ? (
    children
  ) : (
    <Navigate
      to={{
        pathname: "/rooms",
        state: { from: location },
      }}
    />
  );
};

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { isAuth, user } = useSelector((state) => state.auth);

  return !isAuth ? (
    <Navigate
      to={{
        pathname: "/",
        state: { from: location },
      }}
    />
  ) : isAuth && !user?.activated ? (
    <Navigate
      to={{
        pathname: "/activate",
        state: { from: location },
      }}
    />
  ) : (
    children
  );
};

export default App;
