import React from "react";
import styles from "./navigation.module.scss";
import Icon from "components/Icon/icon";
import Button from "components/Button/button";
const Navigation = () => {
  return (
    <div className={styles.navigationWrapper}>
      <div className={styles.navigation}>
        <div className={styles.navigation__logo}>
          <Icon name="logo" />
        </div>
        <div className={styles.navigation__list}>
          <ul>
            <li>Contact</li>
            <li>Plans</li>
            <li>Blog</li>
          </ul>
          <div className={styles.navigation__list__signInBtn}>
            <Button title="Sign In" variant={1} />
          </div>
          <div className={styles.navigation__list__signUpBtn}>
            <Button title="Sign Up" variant={2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
