import ExternalLink from "./ExternalLink";

import styles from "./Contacts.module.scss";

const Contacts = () => (
  <div className={styles.contacts}>
    <div>
      You can find me at&nbsp;
      <ExternalLink href="https://github.com/TrevorS" newTab={true}>
        GitHub
      </ExternalLink>
      ,&nbsp;
      <ExternalLink href="https://twitter.com/TrevorStrieber" newTab={true}>
        Twitter
      </ExternalLink>
      &nbsp;or&nbsp;
      <ExternalLink href="https://www.linkedin.com/in/trev0r" newTab={true}>
        LinkedIn
      </ExternalLink>
      .
    </div>

    <div className={styles.email}>
      <ExternalLink href="mailto:trevor@strieber.org">
        trevor
        <span className={styles.emailAt}>@</span>
        strieber.org
      </ExternalLink>
    </div>
  </div>
);

export default Contacts;
