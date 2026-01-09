import { useSetsStore } from "../src/store/sets";
import api from "./index";

export const getSets = async () => {
    try{
        const res = await api.get("/study/sets/");
        const sets = res.data;
        useSetsStore.getState().setSets(sets);
        return sets;
    }
    catch(error){
        if(error?.response?.data){
            return error.response;
        }
        return error;
    }
};

export const getSetById = async (id) => {
    try{
        const res = await api.get(`/study/sets/${id}/`);
        return res.data;
    }
    catch(error){
        if(error?.response?.data){
            return error.response;
        }
        return error;
    }
};

export const createSet = async (setData) => {
    try{
        const res = await api.post("/study/sets/", setData);
        const createdSet = res.data;
        useSetsStore.getState().createSet(createdSet);

        return res;
    }
    catch(error){
        if(error?.response?.data){
            return error.response;
        }
        return error;
    }
}; 