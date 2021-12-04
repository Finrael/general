import { createSlice } from "@reduxjs/toolkit";
import initState from './initialStates'

export const selectSectionSlice = createSlice({
    name: 'section',
    initialState: initState,
    reducers: {
        selectSection: (state, action) => {
            state.selectedSection = action.payload;
        },
    },

});

export const { selectSection } = selectSectionSlice.actions;
export default selectSectionSlice.reducer;