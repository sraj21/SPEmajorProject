import {createSlice} from '@reduxjs/toolkit'


export const MortgageListSlice = createSlice({
    name: 'mortgageList',
    initialState: {value:[]},
    reducers: {
        addMortgageList: (state, action)=>{
            state.value.push(action.payload);
        },
        deleteMortgageList: (state, action) => {
            state.value = state.value.filter((MortgageList) => MortgageList.id !== action.payload.id)
        },
        updateMortgageListState: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const {addMortgageList, deleteMortgageList, updateMortgageListState} = MortgageListSlice.actions;
export default MortgageListSlice.reducer;