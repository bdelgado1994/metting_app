import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const url = "http://192.168.1.109:8000/api/v1/"

const api = axios.create({
    baseURL: url
})

api.interceptors.request.use(async config => {
    const token = await AsyncStorage.getItem('access_token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config
})

export default api