import { createSlice } from "@reduxjs/toolkit";
import initState from './initialStates'

export const selectWMAlgoSlice = createSlice({
    name: 'wmAlgo',
    initialState: initState,
    reducers: {
        setWMAlgo: (state, action) => {
            state.selectedWMAlgo = action.payload;
        },
    },

});

export const { setWMAlgo } = selectWMAlgoSlice.actions;
export default selectWMAlgoSlice.reducer;