import { useAuthStore } from "../src/store/auth";
import api from './index';

export const login = async (credentials) => {
    try{
        const res = await api.post("/accounts/login/", credentials);

        const { access, refresh } = res.data;
        
        localStorage.setItem("access", access);
        localStorage.setItem("refresh", refresh);

        useAuthStore.getState().setTokens({ access, refresh });

        return res;
    } catch(error){
        if(error?.response?.data){
            return error.response;
        }
        return error;
    }
};

export const getMe = async () => {
  try {
    const res = await api.get("/accounts/me/");
    
    useAuthStore.getState().setUser(res.data);

    return res.data;
  } catch (error) {
    useAuthStore.getState().logout();
    throw error;
  }
};
