import axiosClient from "../api/axiosClient";

// const authService = {
//     login: async (email, password) => {
//         try {
//             const response = await axiosClient.post("/login", { email, password });
//             return response;
//         } catch (error) {
//             throw error;
//         }
//     },
//     register: async (name, email, password, phone, avata_url, bio) => {
//         try {
//             const response = await axiosClient.post("/register", {
//                 name,
//                 email,
//                 password,
//                 phone,
//                 avata_url,
//                 bio
//             });
//             return response;
//         } catch (error) {
//             throw error;
//         }
//     },
//     logout: async () => {
//         try {
//             const response = await axiosClient.post("/logout");
//             return response;
//         } catch (error) {
//             throw error;
//         }
//     },
//     userInfo: async () => {
//         try {
//             const response = await axiosClient.get(`/user`);
//             return response;
//         } catch (error) {
//             throw error;
//         }
//     },
//     forgotPassword: async (email) => {
//         try {
//             const response = await axiosClient.post("/forgot-password", { email });
//             return response;
//         } catch (error) {
//             throw error;
//         }
//     },
//     resetPassword: async (email, otp, newPassword) => {
//         try {
//             const response = await axiosClient.post("/reset-password", { email, otp, newPassword });
//             return response;
//         } catch (error) {
//             throw error;
//         }
//     }
// };

export const login = async (email_or_phone: string, password: string) => {
  try {
    const response = await axiosClient.post("/login", { email_or_phone, password });
    console.log("Login response:", response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (name: string, email: string, password: string, phone: string, avata_url: string, bio: string) => {
    try {
        const response = await axiosClient.post("/register", {
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

export default {
    login,
    register,
    logout,
    userInfo,
    forgotPassword,
    resetPassword
};
