import styles from "../Login/styles.module.css";
import home from '../../assets/home.jpg'
// import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const Main = () => {
	

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
		  <div className={styles.left}>
			<form className={styles.form_container}>
			  <img src={home} height="500px" width="600px" />
			</form>
		  </div>
		  <div className={styles.right}>
			<h1>Welcome you have successfully logged in</h1>
		  </div>
		</div>
	  </div>
	);
};

export default Main;
