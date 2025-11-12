import styles from "./AppBar.module.css";
export default function AppBar({text}) {
  return (
    <header className={styles.container}>
      <h1 className={styles.headertext}>{text}</h1>
    </header>
  );
}
