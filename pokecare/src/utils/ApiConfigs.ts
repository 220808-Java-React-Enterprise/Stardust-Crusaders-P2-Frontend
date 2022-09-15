import axios from "axios";

const PokeApi = axios.create({
    //http://whatverIpUrl:8080/pokecare
    baseURL: "http://localhost:8080/pokecare",
    headers: {
        "Content-type": "application/json"
    }
})

export default PokeApi;