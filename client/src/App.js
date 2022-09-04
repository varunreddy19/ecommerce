import { Route, Routes, Navigate } from "react-router-dom";
// import ShoppingCartCheckoutIcon from "@material-ui/icons/ShoppingCartCheckout";
import { useNavigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import styles from "./components/Main/styles.module.css";
import HomeScreen from "./home";

function App() {
  const user = localStorage.getItem("token");
  const history = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const handleLogIn = () => {
    history("/login");
  };

  return (
    <div>
      <div className={styles.main_container}>
        <nav className={styles.navbar}>
          <h1>ShopKart</h1>
          {user ? (
            <button className={styles.white_btn} onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className={styles.white_btn} onClick={handleLogIn}>
              Login
            </button>
          )}
        </nav>
      </div>

      <Routes>
        {user && <Route path="/" exact element={<Main />} />}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/home" exact element={<HomeScreen />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </div>
  );
}

export default App;
