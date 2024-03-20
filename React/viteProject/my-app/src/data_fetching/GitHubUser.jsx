export function GitHubUser({ username, img }) {
  return (
    <>
      <li className="flex flex-col justify-center items-center p-3 border border-black m-1">
        <img width={200} src={img} alt="" />
        <p className="text-center">{username}</p>
      </li>
    </>
  );
}
