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
      if (action.payload.stock === 0) {
        toast.error(`No hay stock suficiente de ${action.payload.name}`, {
          position: "top-right",
        });
      } else {
        const itemIndex = state.cartItems.findIndex(
          (item) => item._id === action.payload._id
        );
        if (action.payload.stock > 0) {
          if (itemIndex < 0) {
            const tempProduct = { ...action.payload, cartQuantity: 1 };
            state.cartItems.push(tempProduct);
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            toast.info(`${action.payload.name} agregado`, {
              position: "top-right",
            });
          } else if (
            state.cartItems[itemIndex].stock >
            state.cartItems[itemIndex].cartQuantity
          ) {
            state.cartItems[itemIndex].cartQuantity += 1;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            toast.info(
              `Aumentó la cantidad del producto ${action.payload.name}`,
              {
                position: "top-right",
              }
            );
          } else {
            toast.error(
              `El stock es insuficiente para agregar más ${action.payload.name}`,
              {
                position: "top-right",
              }
            );
          }
        }
      }
    },
    removeFromCart(state, action: PayloadAction<any>) {
      const nextCartItems: Array<any> = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );

      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
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
      }
    },
    increaseQuantity(state, action: PayloadAction<any>) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(action.payload.cartQuantity);
      if (state.cartItems[itemIndex].stock > action.payload.cartQuantity) {
        state.cartItems[itemIndex].cartQuantity += 1;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      } else {
        toast.error(
          `El stock es insuficiente para agregar más ${action.payload.name}`,
          {
            position: "top-right",
          }
        );
      }
    },
    clearCart(state) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotal(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal: any, cartItem: any) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

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
