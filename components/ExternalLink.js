import styles from "./ExternalLink.module.scss";

const ExternalLink = ({ href, newTab, className, children }) => {
  const target = newTab ? "_blank" : "_self";

  const rel = newTab ? "noreferrer noopener" : null;

  const classNames = [styles.dotted, className].join(" ");

  return (
    <a className={classNames} href={href} target={target} rel={rel}>
      {children}
    </a>
  );
};

export default ExternalLink;
