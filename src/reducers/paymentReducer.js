import { createSlice } from "@reduxjs/toolkit";

export const PaymentSlice = createSlice({
  name: "payment",
  initialState: { value: [] },
  reducers: {
    addPayment: (state, action) => {
      state.value.push(action.payload);
    },
    deletePayment: (state, action) => {
      state.value = state.value.filter(
        (payment) => payment.id !== action.payload.id
      );
    },
    updatePaymentState: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { deletePayment, addPayment, updatePaymentState } =
  PaymentSlice.actions;
export default PaymentSlice.reducer;
