export function MouseClicker() {
  const handleClick = (e) => {
    console.log(e.target.name);
  };

  const handleSrc = (e) => {
    console.log(e.currentTarget.src);
  };

  return (
    <>
      <button onClick={handleClick} name="one">
        <img
          width={24}
          height={24}
          src="/google.com"
          alt=""
          onClick={handleSrc}
        />
        Show name
      </button>
    </>
  );
}
