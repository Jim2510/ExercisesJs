export function AlertClock() {
  const styleBtn = {
    padding: "5px",
    backgroundColor: "black",
    color: "white",
  };

  const showDate = () => {
    const date = new Date().toLocaleTimeString();
    alert(date);
  };

  return (
    <button style={styleBtn} onClick={showDate}>
      Show Date
    </button>
  );
}
