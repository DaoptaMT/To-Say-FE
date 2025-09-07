import axiosClient from "../api/axiosClient";
import { AuthResponse, RegisterResponse } from "../types/auth";

// export const register = async (name: string, email: string, password: string, phone: string, avata_url: string, bio: string) => {
//     try {
//         const response = await axiosClient.post("/register", {
//             name,
//             email,
//             password,
//             phone,
//             avata_url,
//             bio
//         });
//         return response.data;
//     } catch (error) {
//         throw error;
//     }
// };

export const logout = async () => {
    try {
        const response = await axiosClient.post("/logout");
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const userInfo = async () => {
    try {
        const response = await axiosClient.get(`/user`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const forgotPassword = async (email: string) => {
    try {
        const response = await axiosClient.post("/forgot-password", { email });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const resetPassword = async (email: string, otp: string, newPassword: string) => {
    try {
        const response = await axiosClient.post("/reset-password", { email, otp, newPassword });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const login = async (email_or_phone: string, password: string, name: string): Promise<AuthResponse> => {
    try {
        const res = await axiosClient.post<AuthResponse>("/login", { email_or_phone, password, name });
        return res.data;
    } catch (error) {
        throw error;
    }
};

export const register = async (name: string, email: string, password: string, phone: string, avata_url: string, bio: string): Promise<RegisterResponse> => {
    try {
        const response = await axiosClient.post<RegisterResponse>("/register", {
            name,
            email,
            password,
            phone,
            avata_url,
            bio
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default {
    login,
    register,
    logout,
    userInfo,
    forgotPassword,
    resetPassword,
};
