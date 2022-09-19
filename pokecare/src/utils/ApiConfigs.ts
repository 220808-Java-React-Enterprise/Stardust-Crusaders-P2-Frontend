import axios from "axios";

const PokeApi = axios.create({
    baseURL: "Pokecare-env.eba-vvzgvtim.us-east-1.elasticbeanstalk.com",
    headers: {
        "Content-type": "application/json"
    }
})

export default PokeApi;