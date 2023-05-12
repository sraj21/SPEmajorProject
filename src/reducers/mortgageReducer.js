import { createSlice } from "@reduxjs/toolkit";

export const MortgageSlice = createSlice({
  name: "mortgage",
  initialState: { value: [] },
  reducers: {
    addMortgage: (state, action) => {
      state.value.push(action.payload);
    },
    deleteMortgage: (state, action) => {
      state.value = state.value.filter(
        (Mortgage) => Mortgage.id !== action.payload.id
      );
    },
    updateMortgageState: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { deleteMortgage, addMortgage, updateMortgageState } =
  MortgageSlice.actions;
export default MortgageSlice.reducer;
