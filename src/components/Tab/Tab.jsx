import React, { useState } from "react";
import styles from "./Tab.module.css";
import { IfcIconLink } from "../IconLink/IconLink";

export const IfcTab = (props) => {
  let keyCounter = 0;

  const [items, setItems] = useState(
    props.items.map((item) => {
      return {
        name: item.name,
        selected: keyCounter === 0,
        content: item.content,
        key: keyCounter++,
        icon: item.icon,
        link: item.link,
      };
    })
  );

  const [isHovered, setIsHovered] = useState(false);

  function selectItem(key) {
    const newItems = [...items];
    newItems.forEach((item) => (item.selected = false));
    newItems.find((item) => item.key === key).selected = true;
    setItems(newItems);
  }

  function selected(item) {
    return item.selected ? " tabs__item--active " : "";
  }

  function getLink() {
    const item = current();
    if (!item.link) return null;
    return (
      <div className={styles.linkContainer}>
        <IfcIconLink link={item.link} active={item.link && isHovered} />
      </div>
    );
  }

  function current() {
    return items.find((item) => item.selected);
  }

  function getTitle(item) {
    if (!item.icon) {
      return item.name;
    }
    return (
      <div className={styles.iconSpacing}>
        <IfcIconLink icon={item.icon} active="true" />
      </div>
    );
  }

  return (
    <div>
      <ul className="tabs ifc-tab">
        {items.map((item) => (
          <li
            onClick={() => selectItem(item.key)}
            className={"tabs__item " + styles.ifcTabItem + selected(item)}
            key={item.key}
          >
            {getTitle(item)}
          </li>
        ))}
      </ul>
      <div
        className={styles.ifcTabContent}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {current().content}
        {getLink()}
      </div>
    </div>
  );
};
