import styles from "./AsideApp.module.css";
import { Link } from "react-router-dom";

export default function AsideApp({ form }) {
  let content;
  if (!form) {
    content = (<aside className={styles.container}>
      <Link to="/form">
        <button>Go to Form</button>
      </Link>
    </aside>);
  } else if (form) {
    content = (
      <aside className={styles.container}>
        <Link to="/">
          <button>Go Back</button>
        </Link>
        
      </aside>
    );
  }

  return (
    content
  );
}
