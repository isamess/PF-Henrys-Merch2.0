import { useEffect } from "react";
import Carousel from "./Carousel";
import { List } from "./List";
import Footer from "./Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getTotal } from "../redux/slices/CartSlice";

function Home() {
  const dispatch = useDispatch();

  const cart = useSelector((state: any) => state.cart);
  const { categories }: any = useSelector((state: any) => state.products);

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  return (
    <>
      <div className="container-fluid pb-5">
        <div className="d-flex my-5">
          <Carousel />
        </div>

        {categories
          ? categories.map((category: any) => {
              return (
                <div
                  className="pt-4 border-top border-secondary m-5"
                  key={category._id}
                >
                  <a
                    className="d-flex p-2 justify-content-center pb-3 text-black"
                    href={`/category/${category.category}`}
                  >
                    <h3>{category.category}</h3>
                  </a>
                  <List category={category.category} />
                </div>
              );
            })
          : null}
      </div>
      <Footer />
    </>
  );
}

export { Home };
