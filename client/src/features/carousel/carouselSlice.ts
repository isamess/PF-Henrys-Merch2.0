import { createSlice } from "@reduxjs/toolkit";

export const carouselSlice = createSlice({
    name: 'carousel',
    initialState: [],
    reducers: {

    }
})


//cada createSlice lleva un name, un initialState y su reducer, luego se importa el reducer en el store

export default carouselSlice.reducer //exportando solo el reducer