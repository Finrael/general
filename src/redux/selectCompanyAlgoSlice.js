import { createSlice } from "@reduxjs/toolkit";
import initState from './initialStates'

export const selectCompanyAlgoSlice = createSlice({
    name: 'companyAlgo',
    initialState: initState,
    reducers: {
        setCompanyAlgo: (state, action) => {
            state.selectedWMAlgo = action.payload;
        },
    },

});

export const { setCompanyAlgo } = selectCompanyAlgoSlice.actions;
export default selectCompanyAlgoSlice.reducer;