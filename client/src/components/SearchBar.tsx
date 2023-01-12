import React, { FormEvent, useState } from 'react'

import { useAppDispatch, useAppSelector } from './../hooks/hooks';
import { setFiltersAction } from '../redux/slices/FilterSlices/filterActions';
import { productsFetch} from '../redux/slices/ProductsSlice'
import { useNavigate } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";


const Searchbar = () => {
  const [search, setSearch] = useState("");

  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filterState.filters);

  const navigate = useNavigate();

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await dispatch(setFiltersAction({ ...filters, name: search }));
    setSearch("");
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-row rounded-md shadow-lg  bg-white border-0 border-b-2 border-black border-solid justify-content-center"
    >
      <input
        type="text"
        onChange={changeHandler}
        name= 'search'
        value={search}
        placeholder="Buscar producto..."
        className="text-base text-gray-900 m-2 ml-2 mr-0 w-36"
      />
      <button
        type="submit"
        className="text-base text-gray-900 pl-3 pr-8 hover:bg-gray-200 rounded-br-md rounded-tr-md"
      >
        <BiSearchAlt className="h-6 w-6 text-gray-600" />
      </button>
    </form>
  );
};

export default Searchbar;