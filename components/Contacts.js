import styles from "./Contacts.module.scss";

const Contacts = () => (
  <div className={styles.contacts}>
    <div>
      You can find me at <a href="https://github.com/TrevorS">GitHub</a>,{" "}
      <a href="https://twitter.com/TrevorStrieber">Twitter</a> or{" "}
      <a href="https://www.linkedin.com/in/trev0r">LinkedIn</a>.
    </div>

    <div className={styles.email}>
      <a href="mailto:trevor@strieber.org">trevor@strieber.org</a>
    </div>
  </div>
);

export default Contacts;
