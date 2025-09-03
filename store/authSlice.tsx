// import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import { login } from "../services/authService";

// interface AuthState {
//   user: any | null;
//   token: string | null;
//   loading: boolean;
//   error: string | null;
// }

// const initialState: AuthState = {
//   user: null,
//   token: null,
//   loading: false,
//   error: null,
// };

// export const loginUser = createAsyncThunk(
//   "api/login",
//   async (
//     { email_or_phone, password }: { email_or_phone: string; password: string },
//     { rejectWithValue }
//   ) => {
//     try {
//       const data = await login(email_or_phone, password);
//       return data;
//     } catch (error: any) {
//       return rejectWithValue(error.response?.data?.message || "Đăng nhập thất bại");
//     }
//   }
// );

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     logout(state) {
//       state.user = null;
//       state.token = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.token = action.payload.token;
//         state.user = action.payload.user || null; 
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       });
//   },
// });

// export const { logout } = authSlice.actions;

// export const store = configureStore({
//   reducer: {
//     auth: authSlice.reducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { login, register } from "../services/authService";
import { AuthResponse, User } from "../types/auth";

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

export const registerUser = createAsyncThunk<
  AuthResponse,
  { name: string; email: string; password: string; phone: string; avata_url: string; bio: string },
  { rejectValue: string }
>("api/register", async ({ name, email, password, phone, avata_url, bio }, { rejectWithValue }) => {
  try {
    const data = await register(name, email, password, phone, avata_url, bio);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || "Đăng ký thất bại");
  }
});

export const loginUser = createAsyncThunk<
  AuthResponse,
  { email_or_phone: string; password: string },
  { rejectValue: string }
>("api/login", async ({ email_or_phone, password }, { rejectWithValue }) => {
  try {
    const data = await login(email_or_phone, password);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || "Đăng nhập thất bại");
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Đăng ký thất bại";
      });

    // Login
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Đăng nhập thất bại";
      });
  },
});

export const { logout } = authSlice.actions;

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
