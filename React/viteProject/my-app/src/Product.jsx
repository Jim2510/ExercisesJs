import { useParams } from "react-router-dom";

export function Product() {
  const { id } = useParams();
  return (
    <>
      <div className="">
        <h3>Product {id}</h3>
      </div>
    </>
  );
}
