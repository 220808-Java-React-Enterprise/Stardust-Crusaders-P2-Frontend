import axios from "axios";
import { useState } from "react";

const PokeApi = axios.create({
    baseURL: "http://pokecare-env.eba-vvzgvtim.us-east-1.elasticbeanstalk.com/pokecare",
})

PokeApi.interceptors.request.use((request: any) => {
    request.headers.common["Accept"] = "application/json";
    return request;
}, (error) => {
    return Promise.reject(error);
});

PokeApi.interceptors.response.use((response: any) => {
    return response;
}, (error) => {
    alert(error.data.message);
});

export default PokeApi;