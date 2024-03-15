const Color = ({ color }) => {
  return <li>{color.name}</li>;
};

export function Colors({ colors }) {
  return (
    <ul>
      {colors.map((item) => (
        <Color key={item.id} color={item} />
      ))}
    </ul>
  );
}
