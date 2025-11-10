import styles from "./AsideApp.module.css";
import { Link } from "react-router-dom";

export default function AsideApp() {
  return (
    <aside className={styles.container}>
      <Link to="/form">
        <button>Go to Form</button>
      </Link>
    </aside>
  );
}
