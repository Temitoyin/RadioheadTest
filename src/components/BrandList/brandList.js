import Icon from "components/Icon/icon";
import React from "react";
import { brandIconsList } from "./brandListData";
import styles from "./brandList.module.scss";
const BrandList = () => {
  return (
    <div className={styles.brandList}>
      {brandIconsList &&
        brandIconsList.map((e) => (
          <Icon name={e.icon} key={e.icon} id="brandList" />
        ))}
    </div>
  );
};

export default BrandList;
