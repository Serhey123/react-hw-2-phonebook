import styles from './Filter.module.css';

export default function Filter({ filterValue, handleInput }) {
  return (
    <div className={styles.wrapper}>
      <p>Find contacts by name</p>
      <input
        className={styles.input}
        value={filterValue}
        name="filter"
        type="text"
        placeholder="Enter contact name"
        onChange={handleInput}
      />
    </div>
  );
}
