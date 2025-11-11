import style from "./AsideApp.module.css";
import { Link } from "react-router-dom";

export default function AsideApp({ form }) {
  let content;
  if (!form) {
    content = (
    <aside className={style.container}>
      <Link to="/form">
        <button className={`${style.mybutton} my-button`}>Εκδήλωση Ενδιαφέροντος</button>
      </Link>
    </aside>);
  } else if (form) {
    content = (
      <aside className={style.container}>
        <Link to="/">
          <button className={`${style.mybutton} my-button`}>Πίσω</button>
        </Link>
      </aside>
    );
  }

  return (
    content);
}
