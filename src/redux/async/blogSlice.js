import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const initialState = {
  loading: false,
  blogs: [],
  blogDetail: {},
  error: null,
};

export const fetchRecentBlogs = createAsyncThunk(
  "blogs/fetchRecentBlogs",
  async () => {
    const response = await axios.get(`${API_URL}/games?page=1`);
    return response.data;
  }
);

export const fetchBlogsDetail = createAsyncThunk(
  "blogs/fetchBlogsDetail",
  async (id) => {
    const response = await axios.get(`${API_URL}/detail/${id}`);
    return response.data;
  }
);

export const fetchAllBlogs = createAsyncThunk(
  "blogs/fetchAllBlogs",
  async (page) => {
    const response = await axios.get(
      `${API_URL}/games/news?page=${page}&search`
    );
    return response.data;
  }
);

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetch recent blogs
    builder.addCase(fetchRecentBlogs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRecentBlogs.fulfilled, (state, action) => {
      state.loading = false;
      state.blogs = action.payload;
    });
    builder.addCase(fetchRecentBlogs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // fetch all blogs
    builder.addCase(fetchAllBlogs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllBlogs.fulfilled, (state, action) => {
      state.loading = false;
      state.blogs = action.payload;
    });
    builder.addCase(fetchAllBlogs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // fetch blog detail
    builder.addCase(fetchBlogsDetail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchBlogsDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.blogDetail = action.payload.results;
    });
    builder.addCase(fetchBlogsDetail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default blogsSlice.reducer;
export const { currentBlog } = blogsSlice.actions;
