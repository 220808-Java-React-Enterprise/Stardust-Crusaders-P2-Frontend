 import Pokemon from "../../models/Pokemon";
import axios from 'axios';
import { useEffect, useState } from "react";
import PokeApi from "../../utils/ApiConfigs";
import User from "../../models/User";
import { useNavigate } from "react-router-dom";
import "./Pokemon_details.css";


interface PokeProp{
    currentPoke: Pokemon | null; 
  }

export default function Pokemon_details({currentPoke}: PokeProp){
    
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string>("");
    const [pokeDetail, setPokeDetail] = useState<Pokemon | null >(null);
    const navigate = useNavigate();
    const config = { headers:{"user-auth": token }};

    useEffect(() => {
        const data = window.sessionStorage.getItem("user");
        if (data !== null) setUser(JSON.parse(data));
        else navigate("/login");
    }, []);

    useEffect(() => {
        const data = window.sessionStorage.getItem("auth-token");
        if (data !== null) setToken(JSON.parse(data));
    }, []);

    useEffect(() => {
        const data = window.sessionStorage.getItem("poke");
        if (data !== null) setPokeDetail(JSON.parse(data));
    }, []);

        

       //const url = `https://pokeapi.co/api/v2/pokemon/${pokeDetail?.pokedex_id}`;
        
        async function getPokedetails(){
            
            await PokeApi.get("/pokemon/viewbyid", config).then(response => {
                console.log(response.data)
                setPokeDetail(response.data)
            })
        }

        return (
            <>
            {pokeDetail ?
                <>
                    <div className="inventory">

<div className="indivPokemon">
<img src="lancer.png"></img>
</div>
<div className="nameArea">
<h1>Name: {pokeDetail.name}</h1>
<h2>Pokemon: Lancerchu</h2>
<h2>Level: 8 | 540/240 XP to level</h2>
<h2>Pokedex ID: 444</h2>
</div>

<div className="natureArea">
<h1> Metal/Electric Type </h1>
<h1> Nature: Smug</h1>
<h1> Ability: Soul Stare</h1>
<h1> Ability: Chad Energy</h1>
</div>


<div className="stats">
<h1> HP: 44 </h1>
<h1> Attack: 44 </h1>
<h1> Defense: 44 </h1>
<h1> Sp. Attack: 44 </h1>
<h1> Sp.Defense: 44 </h1>
<h1> Speed: 44 </h1>
</div>

<button id="care">Add Pokemon To Daycare</button>

</div>
                </>
                : <button onClick={getPokedetails}>View your mon</button>}
        </>
        );









        //axios.get(url, { params: {}})
        /*
        return (
            <>
            {pokeDetail ?
                <>
                    <h1 style={{ textAlign: "center" }}>mon</h1>
                    <ul className="profile-list">
                            <li>
                                <span><strong>ID:</strong> {pokeDetail.id}</span>
                                <span><strong>Name</strong> {pokeDetail.name}</span>
                                <span><strong>Ability:</strong> {pokeDetail.ability}</span>
                                <span><strong>Nature:</strong> {pokeDetail.nature}</span>
                                <span><strong>Level:</strong> {pokeDetail.level}</span>
                                <span><strong>XP Needed:</strong> {pokeDetail.xp_needed}</span>

                            </li>
                    </ul>
                </>
                : <button onClick={getPokedetails}>View your mon</button>}
        </>
        );
        */

}

