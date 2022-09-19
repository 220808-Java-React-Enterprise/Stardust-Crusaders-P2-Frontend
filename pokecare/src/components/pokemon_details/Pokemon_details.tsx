 import Pokemon from "../../models/Pokemon";


// const POKEMON = 1;
// interface PokeProp{
//   currentPoke: Pokemon | null;
//   updateCurrentPoke: Function; 
// }
// export default function Pokemon_details({currentPoke, updateCurrent}){

//     return(
//         <>
//             <title>Pokedex</title>
//             <body>
//             <h1>Pokedex</h1>
//             <div className="conteiner" id="container"></div>
//             <script src="pokedex.js"></script>
//             </body>

//         </>
//     )
// }

// const container = document.getElementById("container");
// const pkmNumber = 5;
 
//  const fetchPkm = async () => {
//      for (let i = 1; i <= pkmNumber; i++) {
//          await getPkm(i);
//      }
//  }

//  const getPkm = async (id: number) => {
//      const url = 
//      `https://pokeapi.co/api/v2/pokemon/${id}`;
//      const res = await fetch(url);
//      const pokemon = await res.json();
//      createPokemonCard(pokemon);
//  }

//  fetchPkm();

//  function createPokemonCard(pokemon: any) {
//      let pokemonEl = document.createElement("div");
//      pokemonEl.classList.add("pokemon");
//      const pokeInnerHtml = `
//      <div class="pkm-card">${pokemon.name}
//      <img class="pkm-images" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png"/>
//      <div class="type">Type: ${pokemon.types[0].type.name}</div>
//      </div>
//      `;
//      pokemonEl.innerHTML = pokeInnerHtml;
//      // @ts-ignore: Object is possibly 'null'.
//      container.appendChild(pokemonEl);
     
//  }