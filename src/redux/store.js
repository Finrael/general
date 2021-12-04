import { configureStore } from "@reduxjs/toolkit";
import sectionReducer from './selectSectionSlice';

export default configureStore({
    reducer: {
        section: sectionReducer,
    },
});
