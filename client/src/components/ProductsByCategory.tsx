import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productsFetch } from "../redux/slices/ProductsSlice";
import { List } from "./List";

export default function ProductsByCategory() {
  const dispatch = useDispatch();
  const { products }: any = useSelector((state: any) => state.products);
  const category: any = useParams();

  useEffect(() => {
    dispatch(productsFetch());
  }, [dispatch]);

  return <List products={products} category={category} />;
}
