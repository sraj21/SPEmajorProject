import {createSlice} from '@reduxjs/toolkit'


export const CustomerListSlice = createSlice({
    name: 'CustomerList',
    initialState: {value:[]},
    reducers: {
        addCustomerList: (state, action)=>{
            state.value.push(action.payload);
        },
        deleteCustomerList: (state, action) => {
            state.value = state.value.filter((CustomerList) => CustomerList.id !== action.payload.id)
        },
        updateCustomerListState: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const {addCustomerList, deleteCustomerList, updateCustomerListState} = CustomerListSlice.actions;
export default CustomerListSlice.reducer;