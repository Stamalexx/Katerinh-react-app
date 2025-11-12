import style from "./FooterApp.module.css"
export default function FooterApp() {
  return (
    <footer className={style.container}>
      <p>Αλέξιος Σταμέλος © Copyright Ελλάδα {new Date().getFullYear()}</p>
    </footer>
  );
};
