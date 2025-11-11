import style from "./FormApp.module.css";

export default function FormApp() {
  return (
    // Κύριος περιέκτης που κρατά τις 2 μεγάλες στήλες
    <form className={style.formContainer}>
      {/* ------------------- */}
      {/* ΣΤΗΛΗ 1: Η ΦΟΡΜΑ  */}
      {/* ------------------- */}
      <div className={style.formFields}>
        <p className={style.formInstruction}>
          (παρακαλώ συμπληρώστε με αγγλικούς χαρακτήρες)
        </p>

        {/* Κάθε 'formRow' είναι μια σειρά (ετικέτα + πεδίο) */}
        <div className={style.formRow}>
          <label htmlFor="name">Ονωματεπώνυμο:</label>
          <input type="text" id="name" name="name" />
        </div>

        <div className={style.formRow}>
          <label htmlFor="region">Περιοχή:</label>
          <select name="region" id="region" size="5">
            {/* Σημείωση: Το "multiple" το έβγαλα για να μοιάζει με απλό select. 
              Αν το θες, απλά πρόσθεσέ το πάλι. Το size="5" ταιριάζει με την εικόνα σου.
            */}
            <option value="thessaloniki">Μακεδονία</option>
            <option value="veroia">Πελοπόννησος</option>
            <option value="edessa">Θράκη</option>
          </select>
        </div>

        {/* Χρησιμοποιούμε <fieldset> για να ομαδοποιήσουμε τα checkboxes.
          Το <legend> είναι η ετικέτα για την ομάδα.
        */}
        <fieldset className={style.checkboxGroup}>
          <legend >Τομέας Ενδιαφέροντος (διαλέξτε όσους θέλετε):</legend>

          <div className={style.checkboxOptions}>
            <label>
              <input type="checkbox" name="interest" value="sites" />
              Αρχαιολογικοί χώροι
            </label>
            <label>
              <input type="checkbox" name="interest" value="beaches" />
              Ακτές κολύμβησης
            </label>
            <label>
              <input type="checkbox" name="interest" value="food" />
              Φαγητό
            </label>
          </div>
        </fieldset>

        <div className={style.formRow}>
          <label htmlFor="email">E-mail διεύθυνση:</label>
          <input type="email" id="email" name="email" />
        </div>

        {/* Κοντέινερ για τα κουμπιά, ώστε να μπουν στη 2η στήλη */}
        <div className={style.buttonContainer}>
          <button type="submit" className={style.submitButton}>
            Υποβολή
          </button>
          <button type="reset" className={style.resetButton}>
            Καθάρισμα
          </button>
        </div>
      </div>

      {/* --------------------- */}
      {/* ΣΤΗΛΗ 2: ΤΑ ΣΦΑΛΜΑΤΑ */}
      {/* --------------------- */}
      <div className={style.errorSection}>
        <b>Σφάλματα:</b>
        <textarea
          readOnly
          rows="6"
          placeholder="...εδώ θα εμφανιστούν τα σφάλματα..."
        ></textarea>
      </div>
    </form>
  );
}
