import { useParams } from "react-router-dom";
import { List } from "./List";
import { Pagination } from "./Pagination";
import { useState } from "react";
import { Link} from "react-router-dom"

export default function ProductsByCategory() {
  const { category }: any = useParams();

  const [actualPage, setActualPage] = useState<number>(1);
  const [productsPage, setProductsPage] = useState<number>(10);
  const last = actualPage * productsPage;
  const first = last - productsPage;
  const result = category.slice(first, last);

  const setPagination = (page:number) => {
    return setActualPage(page);
  };

  return category ? (
    <>
      <h3 className="d-flex p-2 justify-content-center pb-3 mt-5">
        {category}
      </h3>
      { result?.map((e:any) => {
          return (
            <div key={e.id}>
              <Link to={"/home/" + e.id} className='link-card'>
              <List category={category} />
              </Link>
            </div>
          );
        })}
      

      <div>
        {
          <Pagination
            productsPage={productsPage}
            allProducts={category.length}
            setPagination={setPagination}
            actualPage={actualPage}
          
          />
        }
      </div>
    </>
  ) : (
    <h3 className="not-found">La categoría no existe</h3>
  );
}
