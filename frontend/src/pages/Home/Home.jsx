import Button from "../../components/shared/Button/Button";
import Card from "../../components/shared/Card/Card";
import styles from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const signInLinkStyle = {
    color: "#0077ff",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "10px",
  };

  function startRegister() {
    navigate("/register");
  }

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Codershouse!" icon="logo">
        <p className={styles.text}>
          We're working hard to get codershouse ready for everyone! While we
          wrap up the finishing youches, we're adding people gradually to make
          sure nothing breaks.
        </p>
        <div>
          <Button text="Get your Username" onClick={startRegister} />
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite text?</span>
          <Link style={signInLinkStyle} to="/login">
            SignIn
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
