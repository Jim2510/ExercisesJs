export function Mouseclicker() {
  const handleButtonClick = (event) => {
    console.log(event.target.name);
  };

  const showImg = (event) => {
    console.log(event.currentTarget.src);
  };

  return (
    <div>
      <button className="" name="one" onClick={handleButtonClick}>
        <img width={30} height={30} src="./" alt="img" onClick={showImg} />
        Click Me!
      </button>
    </div>
  );
}
