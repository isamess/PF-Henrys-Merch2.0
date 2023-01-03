import { useDispatch } from "react-redux";
import type { AppDispatch } from "../redux/store/Store";

export const useAppDispatch: () => AppDispatch = useDispatch;
