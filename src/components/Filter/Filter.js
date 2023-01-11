export default function Filter({ filterValue, handleInput }) {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        value={filterValue}
        name="filter"
        type="text"
        onChange={handleInput}
      />
    </>
  );
}
