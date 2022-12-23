import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

type InitialState = {
  cartItems: Array<any>;
  cartTotalQuantity: number;
  cartTotalAmount: number;
};

const initialState: InitialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(`${localStorage.getItem("cartItems")}`)
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<any>) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(
          `Aumentó la cantidad del producto ${action.payload.nombre}`,
          {
            position: "bottom-left",
          }
        );
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.info(`${action.payload.nombre} agregado`, {
          position: "bottom-left",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action: PayloadAction<any>) {
      const nextCartItems: Array<any> = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );

      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      // toast.info(`${action.payload.nombre} fue removido del carro`, {
      //   position: "bottom-left",
      // });
    },
    decreaseQuantity(state, action: PayloadAction<any>) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems: Array<any> = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );

        state.cartItems = nextCartItems;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

        // toast.info(`${action.payload.nombre} fue removido del carro`, {
        //   position: "bottom-left",
        // });
      }
    },
    increaseQuantity(state, action: PayloadAction<any>) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems[itemIndex].cartQuantity += 1;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart(state) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotal(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal: any, cartItem: any) => {
          const { precio, cartQuantity } = cartItem;
          const itemTotal = precio * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
  clearCart,
  getTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
