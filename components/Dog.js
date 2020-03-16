import styles from "./Dog.module.scss";

const Dog = () => (
  <>
    <span className={styles.span}>
      <a className={styles.dog} href="/ada.jpg" target="_blank">
        🐶
      </a>
    </span>
  </>
);

export default Dog;
