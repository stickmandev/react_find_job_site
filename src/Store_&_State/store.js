import { configureStore } from '@reduxjs/toolkit';
import navSliceReducer from "../features/defualt_Layouts/slices/navSlice"

export const store = configureStore({
  reducer: {
    navBar:navSliceReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
