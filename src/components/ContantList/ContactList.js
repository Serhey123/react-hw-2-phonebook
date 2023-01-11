import styles from './ContactList.module.css';

export default function ContactList({ filteredData, btnHandler }) {
  return (
    <ul className={styles.list}>
      {filteredData.map(({ id, name, number }) => (
        <li className={styles.contact} key={id}>
          <p className={styles.name}>{`${name}: ${number}`}</p>
          <button className={styles.btn} data-name={name} onClick={btnHandler}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
