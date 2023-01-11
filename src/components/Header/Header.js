import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Phonebook</h1>
    </div>
  );
}
