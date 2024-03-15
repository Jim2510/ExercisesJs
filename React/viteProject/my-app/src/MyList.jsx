export function MyList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <h4>{item.name}</h4>
          <p>{item.age}</p>
        </li>
      ))}
    </ul>
  );
}
