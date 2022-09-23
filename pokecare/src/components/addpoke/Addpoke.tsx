import { useEffect, useState } from "react";
import PokeApi from "../../utils/ApiConfigs";
import axios from 'axios'
import "./Addpoke.css"
import User from "../../models/User";
import { useNavigate } from "react-router-dom";
import Pokemon from "../../models/Pokemon";


export default function Addpoke(){

    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string>("");
    const [poke, setPoke] = useState<Pokemon | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const data = window.sessionStorage.getItem("user");
        if (data !== null) setUser(JSON.parse(data));
        else navigate("/login");
    }, []);

    useEffect(() => {
        const data = window.sessionStorage.getItem("auth-token");
        if (data !== null) setToken(JSON.parse(data));
    }, []);

       
        const [name, setName] = useState("");
        const [pokedex_id, setPokedex_id] = useState(Number);
        const [ability, setAbility] = useState("");
        const [pokeAbilties, setPokeAbilities] = useState([]);
        const [nature, setNature] = useState("");

    //     const natures = ["Hardy", "Lonely", "Brave", "Adamant", "Naughty", "Bold", "Docile", "Relaxed", "Impish", "Lax",
    // "Timid", "Hasty", "Serious", "Jolly", "Naive", "Modest", "Mild", "Quiet", "Bashful", "Rash", "Calm", "Gentle", "Sassy","Careful", "Quirky"]


        const config = {
            headers:{
                "user-auth": token
            }
        };
    
        function updateName(event: any) {
            setName(event.target.value);
        }
    
        function updatePokedex_id(event: any) {
            setPokedex_id(event.target.value);
        }

        function updatePoke(event: any) {
            setPoke(event.target.value);
        }

        function updatePokeAbilities(event: any) {
            setPokeAbilities(event.target.value);
        }

        function updateAbility(event: any) {
            setAbility(event.target.value);
        }
        function updateNature(event: any) {
            setNature(event.target.value);
        }

        async function fetchPoke(name: string) {
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res =>  { 
            console.log("Getting pokemon from DB", res.data)
            setPoke(res.data);
            setPokedex_id(res.data.id)
            setPokeAbilities(res.data.abilities);
            const poke = setPoke(res.data);
            }) .catch(err => console.log(err + " Make sure you spell your pokemon's name correctly!"))
        };
        
            useEffect(() => {
                fetchPoke(name).then(updateName)
                console.log("useEffect ran ...");
            }, [name])
        
        
        // function popAbility(){
        //     var ele = document.getElementById('sel');
        // }





        async function submit(this: any, event: { preventDefault: () => void; }) {
            event.preventDefault();

            await PokeApi.post("/pokemon/save", {
                
                name: name,
                pokedex_id: pokedex_id,
                ability: ability,
                nature: nature,
            
            }, config)
                .then(() => {
                    alert("Pokemon added to your inventory!");
                    
                })
                .catch(error => {
                    alert(error.response.data.message);
                });

            setName("");
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
                            <input type="number" placeholder="pokedex_id" id="pokedex_id" value={pokedex_id} onChange={updatePokedex_id}/>

                            <label htmlFor="name">Pokemon Name</label>
                            <input type="text" placeholder="nickname (optional)" id="name" value={name} onChange={updateName}/>
    
                            <label htmlFor="ability">Ability</label>
                           

                            {/* <select value="abilities">
                            <option value= {poke?.abilities[0]} onClick={updateAbility}>{poke?.abilities[0]}</option>
                            <option value= {ability[1]} onClick={updateAbility}> Ability 2  </option>
                            <option value= {ability[2]} onClick={updateAbility}>  Hidden Ability </option>

                            </select> */}
                            
                            <label htmlFor="nature">Nature</label>
                            <input type="text" placeholder="nature" id="nature" value={nature} onChange={updateNature} />
                            
    
                            <button type="submit">Add Pokemon!</button>
                        </form>
                    </div>
                </body>
            </>
        );
        }
    
     



//<input type="text" placeholder="ability" id="ability" value={ability} onChange={updateAbility} />
//<input type="text" placeholder="nature" id="nature" value={nature} onChange={updateNature} />

        // const Headers = (id: any) => {
        //     const [pokedex_id, setPokedex_id] = useState();
        //     const [ability, setAbility] = useState();
        //     const [nature, setNature] = useState();

        //     const fetchPoke = async () => {
        //         try {
        //             const {data} = await axios(url, {
        //                 headers: {
        //                     Accept: 'application/json',
        //                 },
        //             });
        //             setPokedex_id(data.pokedex_id)
        //         }   catch (error) {
        //             console.log(error.response);
        //         }
        //     };
        //the above is for use with headers in get

        // <label htmlFor="ability">Ability</label>

        // <select value="abilities">
        // <option value= {ability[0]} onClick={updateAbility}>   </option>
        // <option value= {ability[1]} onClick={updateAbility}>   </option>
        // <option value= {ability[2]} onClick={updateAbility}>   </option>

        // </select>


        //the below is for params with get in axios

        //axios.get(url, { params: {id: pokedex_id}})

        // useEffect(() => {
        //     const url = `https://pokeapi.co/api/v2/pokemon/${pokedex_id}`;

        //     const fetchPoke = async () => {
                    
        //        await axios.get(url)
        //         .then(res => {
        //             console.log("Getting pokemon from DB", res.data)
        //             setPoke(res.data);
        //         }) .catch(err => console.log(err))
        //     };
        //     fetchPoke();
        //     }, [updatePokedex_id])