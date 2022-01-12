import { composeClasses } from "libs/utils/utils";
import React from "react";
import styles from "./button.module.scss";
const Button = ({ title, variant }) => {
  return (
    <button
      className={composeClasses(
        styles.button,
        variant === 1 ? styles.variantOne : styles.variantTwo
      )}
    >
      {title}
    </button>
  );
};

export default Button;
