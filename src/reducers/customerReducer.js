import { createSlice } from "@reduxjs/toolkit";

export const customerSlice = createSlice({
  name: "customer",
  initialState: { value: [] },
  reducers: {
    addCustomer: (state, action) => {
      state.value.push(action.payload);
    },
    deleteCustomer: (state, action) => {
      state.value = state.value.filter(
        (customer) => customer.id !== action.payload.id
      );
    },
    updateCustomerState: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { deleteCustomer, addCustomer, updateCustomerState } =
  customerSlice.actions;
export default customerSlice.reducer;
