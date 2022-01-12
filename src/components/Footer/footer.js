import Icon from "components/Icon/icon";
import React from "react";
import { footerData, footerIconsData } from "data";
import styles from "./footer.module.scss";

const footerLinks = footerData.map((e, i) => (
  <div className={styles.footerList}>
    <h1 className={styles.footerList__header}>{e.header}</h1>
    <ul className={styles.footerList__options}>
      {e.links.map((e, i) => (
        <li>{e}</li>
      ))}
    </ul>
  </div>
));
const footerIcons = footerIconsData.map((e, i) => (
  <div className={styles.footerIcon}>
    <Icon name={e} />
  </div>
));
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__mainContent}>
        <div className={styles.footer__mainContent__right}>
          <Icon name="logo" />
          <p>
            Radiohead is the first global music streaming service with high
            fidelity sound, hi-def video quality, along with expertly curated
            playlists and original content making it a trusted source for music
            and culture.
          </p>
        </div>
        <div className={styles.footer__mainContent__left}>{footerLinks}</div>
      </div>
      <div className={styles.footer__bottom}>{footerIcons}</div>
    </div>
  );
};

export default Footer;
