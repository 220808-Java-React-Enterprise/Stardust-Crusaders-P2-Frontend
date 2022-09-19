import axios from "axios";

const PokeApi = axios.create({
    //http://whatverIpUrl:8080/pokecare
    baseURL: "http://pokecare-env.eba-vvzgvtim.us-east-1.elasticbeanstalk.com/pokecare/",
    headers: {
        "Content-type": "application/json"
    }
})

export default PokeApi;