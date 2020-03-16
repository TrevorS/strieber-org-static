import styles from "./Main.module.scss";

import Contacts from "./Contacts";
import Dog from "./Dog";

const Main = () => (
  <div className={styles.main}>
    <main>
      <h1 className={styles.title}>Trevor Strieber</h1>

      <div className={styles.me_container}>
        <img
          className={styles.me}
          alt="Trevor"
          title="Trevor"
          src="/trevor.png"
        />
      </div>

      <p className={styles.love}>
        I love eating things, creating things, my wife, and my <Dog />.
      </p>

      <Contacts />
    </main>
  </div>
);

export default Main;
