import Icon from "components/Icon/icon";
import React from "react";
import styles from "./infoLink.module.scss";
const InfoLink = ({ header, subText, link }) => {
  return (
    <div className={styles.infoLink}>
      <h1 className={styles.infoLink__header}>{header}</h1>
      <p className={styles.infoLink__subText}>{subText}</p>
      <div className={styles.infoLink__link}>
        <Icon name="arrowRight" />
        <p>{link}</p>
      </div>
    </div>
  );
};

export default InfoLink;
