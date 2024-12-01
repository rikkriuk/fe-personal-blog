import themeSlice from "./slices/themeSlice";
import blogsSlice from "./async/blogSlice";
import subscribeSlice from "./async/subscribeSlice";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedThemeReducer = persistReducer(persistConfig, themeSlice);
const persistedBlogsReducer = persistReducer(persistConfig, blogsSlice);
const persistedSubscribeReducer = persistReducer(persistConfig, subscribeSlice);

const store = configureStore({
  reducer: {
    theme: persistedThemeReducer,
    blogs: persistedBlogsReducer,
    subscribe: persistedSubscribeReducer,
  },
});

export const persistor = persistStore(store);
export default store;
