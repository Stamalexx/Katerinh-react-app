import style from "./FormApp.module.css";

export default function FormApp() {
  return (
    <form className={style.formContainer}>
    <div>
      <h2>Contact Us</h2>
      <p>Please fill out this form.</p>

      \
        <label>
          Your Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Your Message:
          <textarea name="message"></textarea>
        </label>
        <br />
        <button type="submit">Send</button>
      
    </div>
    </form>
  );
}
