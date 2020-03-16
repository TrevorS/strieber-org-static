import ExternalLink from "./ExternalLink";

import styles from "./Dog.module.scss";

const Dog = () => (
  <span className={styles.span}>
    <ExternalLink className={styles.dog} href="/ada.jpg" newTab={true}>
      🐶
    </ExternalLink>
  </span>
);

export default Dog;
