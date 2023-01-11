export default function ContactList({ filteredData, btnHandler }) {
  return (
    <ul>
      {filteredData.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button data-name={name} onClick={btnHandler}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
