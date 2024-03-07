import { useState } from 'react';
import { data } from './data';
import styles from './NestedDD.module.css';

const NestedDropDown = () => {
  const renderSubmenu = (items) =>
    items.map((each) => (
      <>
        {each.collection_type === 'folder' ? menuItem(each) : null}
        {each.collection_type === 'list' ? <p className={styles.listItem}>{each.name}</p> : null}
      </>
    ));

  const menuItem = (each) => {
    const [open, isOpen] = useState(false);
    return (
      <>
        <h1 onClick={() => isOpen(!open)}>{each.name}</h1>
        <div className={`${styles.dd__collapse} ${open ? styles.open : ''}`}>
          <div>
            <div className={styles.menuItem}>
              <div>{renderSubmenu(each.children)}</div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return <div className={styles.ddWrapper}>{data.map((each) => menuItem(each))}</div>;
};

export default NestedDropDown;
