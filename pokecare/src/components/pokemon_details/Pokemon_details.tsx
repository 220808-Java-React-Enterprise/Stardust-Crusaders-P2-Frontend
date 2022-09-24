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
    const [pokeDetail2, setPokeDetail2] = useState<any>();
    const [pokeList, setPokeList] = useState<Pokemon[]>();
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

    useEffect(() => {

        fetchPoke(pokeDetail?.pokedex_id);
        console.log("useEffect ran ...");

     }, [pokeDetail]);

     useEffect(() => {
        console.log("weeeeeeee");
        PokeApi.get("/pokemon/viewindaycare", {
          headers: {
              "user-auth": token
          }
      }).then(response => {
          setPokeList(response.data);
          console.log(response.data);
      });
      }, [token]);
        



     async function fetchPoke(pokedex_id: any) {
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokedex_id}`)
        .then(res =>  { 
        console.log("Getting pokemon from DB", res.data);
        

        setPokeDetail2(res.data);
        
        
        //setPokeAbilities(res.data.abilities);
        }) .catch(err => console.log(err))
    };

    function addDaycare(event: any) {
        PokeApi.put("/pokemon/enrollpoke", {
            pokemon_id: pokeDetail?.pokemon_id,
        })
            .then((obj) => {
                alert("Pokemon has been added to daycare!");
                navigate("/inventory");
                window.location.reload();
            })
            .catch(error => {
                alert(error.response.data.message);
            });
    }

    function removeDaycare(event: any) {
        PokeApi.put("/pokemon/removefromdaycare", {
            pokemon_id: pokeDetail?.pokemon_id,
        })
            .then((obj) => {
                alert("Pokemon has been removed from daycare");
                navigate("/inventory");
                window.location.reload();
            })
            .catch(error => {
                alert(error.response.data.message);
            });
    }


       //const url = `https://pokeapi.co/api/v2/pokemon/${pokeDetail?.pokedex_id}`;
       console.log("pokemon details: " + (pokeDetail2?.types[0].type.name));
       console.log("pokemon details: " + (pokeDetail2?.types[1]?.type.name));

       


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
<img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/' + pokeDetail.pokedex_id + ".gif"}></img>
</div>
<div className="nameArea">
<h1>Name: {pokeDetail.name}</h1>
<h2>Pokemon: Lancerchu</h2>
<h2>Level: {pokeDetail.level} | EXP: {pokeDetail.xp_needed}/{pokeDetail.level * 100} XP to level</h2>
<h2>Pokedex ID: {pokeDetail.pokedex_id}</h2>
</div>

<div className="natureArea">
<h1>{}</h1>
{pokeDetail2?.types[1] ? <h1> Types: {pokeDetail2?.types[0].type.name} / {pokeDetail2?.types[1]?.type.name}  </h1> : <h1> Type: {pokeDetail2?.types[0].type.name}  </h1>

}
<h1> Nature: {pokeDetail.nature}</h1>
<h1> Ability: {pokeDetail.ability}</h1>
</div>


<div className="stats">
<h1> HP: {(2 * pokeDetail2?.stats[0].base_stat * pokeDetail?.level)/100 + pokeDetail?.level + 10} </h1>
<h1> Attack: {(2 * pokeDetail2?.stats[1].base_stat * pokeDetail?.level)/100 + 5} </h1>
<h1> Defense: {(2 * pokeDetail2?.stats[2].base_stat * pokeDetail?.level)/100 + 5}  </h1>
<h1> Sp. Attack: {(2 * pokeDetail2?.stats[3].base_stat * pokeDetail?.level)/100 + 5}  </h1>
<h1> Sp.Defense: {(2 * pokeDetail2?.stats[4].base_stat * pokeDetail?.level)/100 + 5}  </h1>
<h1> Speed: {(2 * pokeDetail2?.stats[5].base_stat * pokeDetail?.level)/100 + 5}  </h1>
</div>

{(pokeDetail?.enroll_date != "null") ?  <button className="care" onClick={(removeDaycare)}>Remove Pokemon From Daycare</button> : (pokeList?.length != 2 ) ? <button className="care" onClick={(addDaycare)}>Add Pokemon to Daycare</button> : <></>


}
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

