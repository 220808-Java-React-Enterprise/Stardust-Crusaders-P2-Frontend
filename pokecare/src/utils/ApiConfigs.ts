import axios from "axios";

const YOLP_API = axios.create({
    baseURL: "http://localhost:8080/pokecare",
    headers: {
        "Content-type": "application/json"
    }
})

export default YOLP_API;