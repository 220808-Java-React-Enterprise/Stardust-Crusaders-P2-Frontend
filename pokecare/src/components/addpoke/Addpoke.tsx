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
        const [ability2, setAbility2] = useState("");
        const [ability3, setAbility3] = useState("");
        const [pokeAbilities, setPokeAbilities] = useState([""]);
        const [natureList, setNatureList] = useState([""]);
        const [nature, setNature] = useState("");

    const natures = [
        "Hardy", "Lonely", "Brave", 
        "Adamant", "Naughty", "Bold", 
        "Docile", "Relaxed", "Impish", 
        "Lax", "Timid", "Hasty", 
        "Serious", "Jolly", "Naive", 
        "Modest", "Mild", "Quiet", 
        "Bashful", "Rash",  "Calm",
        "Gentle", "Sassy","Careful", "Quirky"
    ]
    
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
            setAbility(pokeAbilities.toString())
            setAbility2(pokeAbilities.toString())
            let ability2 = ability
            let ability3 = ability
            setAbility3(pokeAbilities?.toString())
            console.log("changing ability!")
            console.log(pokeAbilities.toString())
            console.log(ability.toString())
        }

        function updateAbility(event: any) {
            setAbility(event.target.value);
            console.log(ability)
        }
        function updateAbility2(event: any) {
            setAbility2(event.target.value);
            let ability2 = ability
            console.log(ability)
        }
        function updateAbility3(event: any) {
            setAbility3(event.target.value);
            let ability3 = ability
            console.log(ability)
        }


        function updateNatureList(event: any) {
          setNatureList(event.target.value)
          setNature(natureList.toString())
          console.log("changing nature!")
          console.log(setNatureList.toString())
          console.log(nature)
        }
       
        async function fetchPoke(name: string) {
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res =>  { 
            console.log("Getting pokemon from DB", res.data)
            setPoke(res.data);
            setPokedex_id(res.data.id)
            setAbility(res.data.abilities[0].ability.name)
            setAbility2(res.data.abilities[1].ability.name)
            if (res.data.abilities[2].ability.name != null) setAbility3(res.data.abilities[2].ability.name)
            const poke = setPoke(res.data);
            }) .catch(err => console.log(err + " Make sure you spell your pokemon's name correctly!"))
        };
        
            useEffect(() => {
                fetchPoke(name).then(updateName).then(updatePokedex_id).then(updatePokeAbilities).then(updateNatureList)
                console.log("useEffect ran ...");
            }, [name])
        

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
            
        }
    
        return (
            <>
                <body>
                    <div>
                        <div className="AddpokeBackground">
                            <div className="shape"></div>
                            <div className="shape"></div>
                        </div>
                        <form className="addpokeForm" onSubmit={submit}>
                            <h3>Create your team!</h3>

                            <label htmlFor="pokedex_id">Pokedex ID</label>
                            <p>{pokedex_id}</p>

                            <label htmlFor="name">Pokemon Name</label>
                            <input type="text" placeholder="Pokemon Name" id="name" value={name} onChange={updateName}/>
    
                            
                            <div className="dropdown">
                             <button>Ability</button>
                                <div className="dropdown-content">
                            
                                <option value="ability">Choose one</option>
                                <option value={ability} onClick={updateAbility}>{ability}</option>
                                <option value={ability2} onClick={updateAbility2}>{ability2}</option>
                                <option value={ability3} onClick={updateAbility3}>{ability3}</option>

                                </div>
                            </div>
                             

                            <label htmlFor="nature">Nature</label>
                            <button type="button">{natureList}</button>
                            
                            <select value ="nature" id="nature" onChange={updateNatureList}>
                                <option value="nature">Choose one</option>

                                <option value= {natures[0]} onClick={updateNatureList}>{natures[0]}</option>
                                <option value= {natures[1]} onClick={updateNatureList}>{natures[1]}</option>
                                <option value= {natures[2]} onClick={updateNatureList}>{natures[2]}</option>
                                <option value= {natures[3]} onClick={updateNatureList}>{natures[3]}</option>
                                <option value= {natures[4]} onClick={updateNatureList}>{natures[4]}</option>
                                <option value= {natures[5]} onClick={updateNatureList}>{natures[5]}</option>
                                <option value= {natures[6]} onClick={updateNatureList}>{natures[6]}</option>
                                <option value= {natures[7]} onClick={updateNatureList}>{natures[7]}</option>
                                <option value= {natures[8]} onClick={updateNatureList}>{natures[8]}</option>
                                <option value= {natures[9]} onClick={updateNatureList}>{natures[9]}</option>
                                <option value= {natures[10]} onClick={updateNatureList}>{natures[10]}</option>
                                <option value= {natures[11]} onClick={updateNatureList}>{natures[11]}</option>
                                <option value= {natures[12]} onClick={updateNatureList}>{natures[12]}</option>
                                <option value= {natures[13]} onClick={updateNatureList}>{natures[13]}</option>
                                <option value= {natures[14]} onClick={updateNatureList}>{natures[14]}</option>
                                <option value= {natures[15]} onClick={updateNatureList}>{natures[15]}</option>
                                <option value= {natures[16]} onClick={updateNatureList}>{natures[16]}</option>
                                <option value= {natures[17]} onClick={updateNatureList}>{natures[17]}</option>
                                <option value= {natures[18]} onClick={updateNatureList}>{natures[18]}</option>
                                <option value= {natures[19]} onClick={updateNatureList}>{natures[19]}</option>
                                <option value= {natures[20]} onClick={updateNatureList}>{natures[20]}</option>
                                <option value= {natures[21]} onClick={updateNatureList}>{natures[21]}</option>
                                <option value= {natures[22]} onClick={updateNatureList}>{natures[22]}</option>
                                <option value= {natures[23]} onClick={updateNatureList}>{natures[23]}</option>
                                <option value= {natures[24]} onClick={updateNatureList}>{natures[24]}</option>
                            
                            </select>
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