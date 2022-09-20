import { useEffect, useState } from "react";
import User from "../../models/User";
import PokeApi from "../../utils/ApiConfigs";
import axios from 'axios'
import "./Addpoke.css"



interface UserProp{
    currentUser: User | null;
  }

export default function Addpoke({currentUser}: UserProp){
    
        /* 
         * What is a Hook? A Hook is a special function that lets you “hook into” React features. 
         * For example, useState is a Hook that lets you add React state to function components.
         */
        const [name, setName] = useState("");
        const [pokedex_id, setPokedex_id] = useState(Number);
        const [ability, setAbility] = useState("");
        const [nature, setNature] = useState("");

        
    
        function updateName(event: any) {
            setName(event.target.value);
        }
    
        function updatePokedex_id(event: any) {
            setPokedex_id(event.target.value);
        }
    
        function updateAbility(event: any) {
            setAbility(event.target.value);
        }
        function updateNature(event: any) {
            setNature(event.target.value);
        }
        

        // const getPkm = async (id: string) => {
        //     const url = 
        //     `https://pokeapi.co/api/v2/pokemon/${id}`;
        //     const res = await fetch(url);
        //     const pokemon = await res.json();
        //    return pokemon;
        // }

        //    useEffect(() =>{
        //     getPkm(pokedex_id)

        //    })
        



        function submit(event: { preventDefault: () => void; }) {
            event.preventDefault();
            
            //add drop down menu from api for ability
            //add drop down menu with options from nature


            PokeApi.post("/pokemon/save", {
                name: name,
                pokedex_id: pokedex_id,
                ability: ability,
                nature: nature,
            })
                .then(() => {
                    alert("Pokemon added to your inventory!");
                    //navigate("/home");
                    
                })
                .catch(error => {
                    alert(error.response.data.message);
                });
    
            setName("");
            setPokedex_id(Number);
            setAbility("");
            setNature("");
            
        }
    
        return (
            <>
                <body>
                    <div>
                        <div className="SignupBackground">
                            <div className="shape"></div>
                            <div className="shape"></div>
                        </div>
                        <form className="signupForm" onSubmit={submit}>
                            <h3>Create your team!</h3>

                            <label htmlFor="pokedex_id">Pokedex ID</label>
                            <input type="text" placeholder="pokemon name" id="pokedex_id" value={pokedex_id} onChange={updatePokedex_id}/>

                            <label htmlFor="name">Pokemon Name</label>
                            <input type="text" placeholder="nickname (optional)" id="name" value={name} onChange={updateName}/>
    
                            <label htmlFor="ability">Ability</label>
                            <input type="text" placeholder="ability" id="ability" value={ability} onChange={updateAbility}/>
                            
    
                            <label htmlFor="nature">Nature</label>
                            <input type="text" placeholder="nature" id="nature" value={nature} onChange={updateNature}/>
    
                            <button type="submit">Add Pokemon!</button>
                        </form>
                    </div>
                </body>
            </>
        );
        }
     
//<input type="text" placeholder="ability" id="ability" value={ability} onChange={updateAbility} />
//<input type="text" placeholder="nature" id="nature" value={nature} onChange={updateNature} />
