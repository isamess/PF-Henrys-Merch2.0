import { useParams } from "react-router-dom";
import { List } from "./List";

export default function ProductsByCategory() {
  const { category }: any = useParams();

  return category ? (
    <>
      <h3 className="d-flex p-2 justify-content-center pb-3 mt-5">
        {category}
      </h3>

      <List category={category} />
    </>
  ) : (
    <h3 className="not-found">La categoría no existe</h3>
  );
}
