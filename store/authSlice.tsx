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
  { name: string; email: string; password: string; phone: string; avatar_url: string; bio: string },
  { rejectValue: string }
>("auth/register", async ({ name, email, password, phone, avatar_url, bio }, { rejectWithValue }) => {
  try {
    const data = await register(name, email, password, phone, avatar_url, bio);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || "Đăng ký thất bại");
  }
});

export const loginUser = createAsyncThunk<
  AuthResponse,
  { email_or_phone: string; password: string; name: string | null },
  { rejectValue: string }
>("auth/login", async ({ email_or_phone, password, name = null }, { rejectWithValue }) => {
  try {
    const data = await login(email_or_phone, password, name ?? "");
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
      // Register
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
      })

      // Login
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
