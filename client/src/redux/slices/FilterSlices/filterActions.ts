import { AppDispatch } from "../../store/Store";
import { productsFetch, categoryFetch} from '../ProductsSlice'
import { setFilters, setFiltersAdmin } from "./index";
import { Filters } from "./index";

export const setFiltersAction = (obj: Filters) => (dispatch: AppDispatch) => {
  dispatch(setFilters(obj));
  dispatch(productsFetch(null, obj));
  dispatch(categoryFetch(null, obj));
};

export const setFiltersActionAdmin = (page:Number, obj: Filters) => (dispatch: AppDispatch) => {
  dispatch(setFiltersAdmin(obj))
}