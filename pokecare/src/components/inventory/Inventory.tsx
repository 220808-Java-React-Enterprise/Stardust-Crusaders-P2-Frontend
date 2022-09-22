import { useNavigate } from "react-router-dom";
import "./Inventory.css";
import React from "react";
import ReactDOM from "react-dom"

const POKEMON = 1;

export default function Inventory(){

    return(
        <>
            <div className="inventory">
                <div className="grid" id="grid">
                    
  
  

                    </div>
                    </div>

        </>
    )



    
}

const container = document.getElementById("grid");

const pkmNumber = 12;

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
 }

 fetchPkm();

 function createPokemonCard(pokemon: any) {
     let pokemonEl = document.createElement("div");
     pokemonEl.classList.add("pokemon");


     const pokeInnerHtml = `



     
     <div className="pokemon">
                        <a href="https://revature.com/"> <img alt="Qries" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg"></img></a>
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
     
     */

     
     pokemonEl.innerHTML = pokeInnerHtml;
     // @ts-ignore: Object is possibly 'null'.
     container.appendChild(pokemonEl);
 }


