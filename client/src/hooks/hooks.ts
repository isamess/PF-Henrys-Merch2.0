import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../redux/store/Store'



export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook <RootState> = useSelector




// import { TypedUseSelectorHook, useDispatch, useSelector  } from "react-redux";

// // import type {RootState } from "../redux/store/Store";
// import type AppDispatch from "../redux/store/Store";

// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;