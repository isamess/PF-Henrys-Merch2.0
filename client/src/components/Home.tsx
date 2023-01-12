import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { List } from "./List";
import Footer from "./Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getTotal } from "../redux/slices/CartSlice";
import { Pagination } from "./Pagination";
import { Link } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();

  const cart = useSelector((state: any) => state.cart);
  const { categories }: any = useSelector((state: any) => state.products);

  const [actualPage, setActualPage] = useState<number>(1);
  const [productsPage, setProductsPage] = useState<number>(8);
  const last = actualPage * productsPage;
  const first = last - productsPage;
  const result = categories.slice(first, last);

  const setPagination = (page: number) => {
    return setActualPage(page);
  };

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  return (
    <>
      <div className="container-fluid pb-5">
        <div className="d-flex my-5">
          <Carousel />
        </div>

        {result?.map((e: any) => {
          return (
            <div key={e._id}>
              <div className="link-card">
                <List category={e.category} />
              </div>
            </div>
          );
        })}
        <div>
          {
            <Pagination
              productsPage={productsPage}
              allProducts={categories.length}
              setPagination={setPagination}
              actualPage={actualPage}
            />
          }
        </div>
      </div>
      <Footer />
    </>
  );
}

export { Home };
