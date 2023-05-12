import {createSlice} from '@reduxjs/toolkit'


export const PaymentListSlice = createSlice({
    name: 'paymentList',
    initialState: {value:[]},
    reducers: {
        addPaymentList: (state, action)=>{
            state.value.push(action.payload);
        },
        deletePaymentList: (state, action) => {
            state.value = state.value.filter((paymentList) => paymentList.id !== action.payload.id)
        },
        updatePaymentListState: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const {addPaymentList, deletePaymentList, updatePaymentListState} = PaymentListSlice.actions;
export default PaymentListSlice.reducer;