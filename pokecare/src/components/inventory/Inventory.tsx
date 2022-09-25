import "./Inventory.css";
import React from "react";
import ReactDOM from "react-dom"
import User from "../../models/User";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Pokemon from "../../models/Pokemon";
import PokeApi from "../../utils/ApiConfigs";

const POKEMON = 1;


interface UserProp{
    currentUser: User | null;
  }
  
export default function Inventory({currentUser}: UserProp){

    const navigate = useNavigate();
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string>("");
    const [pokeList, setPokeList] = useState<Pokemon[]>();
   


    useEffect(() => {
        console.log("order check 1");
    
          const data = window.sessionStorage.getItem("user");
        
          if (data !== null) setUser(JSON.parse(data));
          else navigate("/login");
      }, []);
    
      useEffect(() => {
        console.log("order check 2");
          const data = window.sessionStorage.getItem("auth-token");
          console.log(data);
          if (data !== null) setToken(JSON.parse(data))
          
      }, []);
    
    
      useEffect(() => {
        PokeApi.get("/pokemon/viewall", {
          headers: {
              "user-auth": token
          }
      }).then(response => {
          setPokeList(response.data);
          console.log(response.data);
      });
      }, [token]);
    
      function pokeProfile(pokemon: any){
        window.sessionStorage.setItem("poke", JSON.stringify(pokemon)); 
        navigate("/pokemon_details");
        window.location.reload();

    }



    return(
        <>
        {pokeList ? 
        <>
            <div className="inventory">
                <div className="grid" id="grid">
                    
                    {pokeList.map(pokemon => (
                            <div className="pokemon">
                            <a href="#" className="yes" onClick={() =>pokeProfile(pokemon)} data-value={pokemon.pokemon_id}><img alt="Its broken!" src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/' + pokemon.pokedex_id + ".gif"}></img></a>   

                            <div className="text">
                                <h3>{pokemon.name}</h3>
<<<<<<< HEAD
                                 <h3> Level: {pokemon.level} </h3>
=======
                                 <h3>Level: {pokemon.level}</h3>
>>>>>>> main
                            </div>
                        </div>



                    ))}
  
  

                    </div>
                    </div>
        
        </>
         : <></>}

        </>
    )



    
}
/*
const container = document.getElementById("grid");


const pkmNumber = 20;


 const fetchPkm = async () => {
     for (let i = 1; i <= pkmNumber; i++) {
         await getPkm(i);
     }
 }

 const getPkm = async (id: number) => {
     const url = 
     `https://pokeapi.co/api/v2/pokemon/${id}`;
     const res = await fetch(url);
     const pokemon = await res.json();
     createPokemonCard(pokemon);
     window.sessionStorage.setItem("poke", JSON.stringify(pokemon));
 }



 fetchPkm();
//make the sprite grab the correct id? 
//pokemon that is generated is from the number
//DELETE JSON upon leaving pokedetails page
 function createPokemonCard(pokemon: any) {
     let pokemonEl = document.createElement("div");
     pokemonEl.classList.add("pokemon");


     const pokeInnerHtml = `
     
     <div className="pokemon">
                        <a href="https://revature.com/"> <img alt="Qries" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif"></img></a>
                        <a href="http://localhost:3000/pokemon_details"> <img alt="Qries" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg"></img></a>
                        <div className="text">
                            <h3>${pokemon.name}</h3>
                             <h3> Level: 5 </h3>
                        </div>
                    </div>
     
     </div>
     `;

     /*
     const pokeInnerHtml = `
     
     <div class="pkm-card">${pokemon.name}
     <img class="pkm-images" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg"/>
     <div class="type">Type: ${pokemon.types[0].type.name}</div>
     <div class="ability">Ability: ${pokemon.abilities[0].ability.name}</div>
     <div class="stats"><h3>Base Stats</h3>
     <br/>
     
     </div>
     `;
     
     

     
     pokemonEl.innerHTML = pokeInnerHtml;
     // @ts-ignore: Object is possibly 'null'.
     container.appendChild(pokemonEl);
 }
 */
 