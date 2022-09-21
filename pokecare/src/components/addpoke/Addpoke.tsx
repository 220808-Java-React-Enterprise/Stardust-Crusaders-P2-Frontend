import { useEffect, useState } from "react";
import PokeApi from "../../utils/ApiConfigs";
import axios from 'axios'
import "./Addpoke.css"
import User from "../../models/User";
import { useNavigate } from "react-router-dom";






export default function Addpoke(){

    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string>("");
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
        const [nature, setNature] = useState("");

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

        function updateAbility(event: any) {
            setAbility(event.target.value);
        }
        function updateNature(event: any) {
            setNature(event.target.value);
        }

         //const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

        //the below is for params with get in axios

        //axios.get(url, { params: {id: pokedex_id}})

        // useEffect(() => {
        //     const fetchPoke = async () => {
                
        //     axios.get(url, { params: {id: pokedex_id}})
        //     .then(res => {
        //         console.log("Getting pokemon from DB", res.data)
        //         setAbility(res.data)
        //     }) .catch(err => console.log(err))
        // };
        // fetchPoke();
        // }, [])

        async function submit(event: { preventDefault: () => void; }) {
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
            setPokedex_id(0);
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
                            <input type="number" placeholder="pokedex_id" id="pokedex_id" value={pokedex_id} onChange={updatePokedex_id}/>

                            <label htmlFor="name">Pokemon Name</label>
                            <input type="text" placeholder="nickname (optional)" id="name" value={name} onChange={updateName}/>
    
                            <label htmlFor="ability">Ability</label>
                            <input type="text" placeholder="ability" id="ability" value={ability} onChange={updateAbility} />
                            
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