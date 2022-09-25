import "./Profile.css";
import User from "../../models/User";
import Pokemon from "../../models/Pokemon";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PokeApi from "../../utils/ApiConfigs";
import React from "react";

interface UserProp{
  currentUser: User | null;
}


export default function Profile({currentUser}: UserProp) {

  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string>("");
  const [pokeList, setPokeList] = useState<Pokemon[]>();
  const [egg, setEgg] = useState<Pokemon| null>(null);
  const [eggList, setEggList] = useState<Pokemon[]>();
  var numDaycare = 0;
  var usernameTest = "";
  var test = false;

  /*
  window.onload = () => {
    console.log("ONLOAD");
    console.log("wack");
};
*/

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
    console.log("Viewing Pokemon in Daycare!");
    PokeApi.get("/pokemon/viewindaycare", {
      headers: {
          "user-auth": token
      }
  }).then(response => {
      setPokeList(response.data);
      console.log(response.data);
  });
  test = true;
  }, [token]);

     /*
      const [name, setName] = useState("");
      const [pokedex_id, setPokedex_id] = useState(Number);
      const [ability, setAbility] = useState("");
      const [nature, setNature] = useState("");

    */
      
      console.log(pokeList);
      console.log("number in daycare " + numDaycare);  
      pokeList?.length ? numDaycare = pokeList.length : numDaycare = 22;

  /*
  window.onload = () => {
    console.log("ONLOAD");
    console.log("wack");
};
*/

  
const config = {
  headers:{
      "user-auth": token
  }
};

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
    console.log("weeeeeeee");
    PokeApi.get("/pokemon/viewall", {
      headers: {
          "user-auth": token
      }
  }).then(response => {
      setPokeList(response.data);
      console.log(response.data);
      
  });
  test = true;
  }, [token]);

     /*
      const [name, setName] = useState("");
      const [pokedex_id, setPokedex_id] = useState(Number);
      const [ability, setAbility] = useState("");
      const [nature, setNature] = useState("");
    */
      
      console.log(pokeList);

  function inventory(){
    navigate("/inventory");
    window.location.reload();
  }
//============================================

useEffect(() => {
  console.log("fetching the eggs!");
  PokeApi.get("/pokemon/vieweggs", {
    headers: {
        "user-auth": token
    }
}).then(response => {
    setEggList(response.data);
    console.log("egg data")
    console.log(response.data);
    
});
test = true;
}, [token]);

  let imageURL = "";

  if(eggList){
    imageURL = "assets/egg.png"
  } else imageURL = "No Egg :c"

  
console.log("length this "+ eggList);
  function hatchEgg(event: any) {
    PokeApi.put("/pokemon/hatchegg", {
        pokemon_id: eggList?.[0]?.pokemon_id,
    })
        .then((obj) => {
            alert("Pokemon has been added to inventory");
            navigate("/inventory");
            window.location.reload();
        })
        .catch(error => {
            alert(error.response.data.message);
        });
}
//============================================

    return (
        <>
        
<div className ="profile">

<div className ="topholder">
<div className  = "icon">
<img alt=":(" src="lancer.png"></img>
</div>

<div className  = "intro">
<div className  = "title" id="tester">


<p id="demo"></p>

{user ? <h1 id="name">{user.username}</h1>
  : <></>}



</div>

<div className = "description">
<h3 id = "desc"> This is a sizable description that a user could enter. This tells a lot about the user and we should probably set a maximum size at some point.</h3>
</div>


</div>


</div>



<div className="rest">
  <div className="pokemon">
  <div className="showcase">
    <div className="singleShowcase" id="2">
      
      {(pokeList?.length == 1 || pokeList?.length == 2) ?<h2>Pokemon: {pokeList[0]?.name}</h2> : <h2>Daycare Slot Empty!</h2> }
      {(pokeList?.length == 1 || pokeList?.length == 2) ? <img alt=":(" src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/' + pokeList[0].pokedex_id + ".gif"}></img> : <img alt=":(" src="assets/basepokemon.png"></img>}
      {(pokeList?.length == 1 || pokeList?.length == 2) ? <h2>Level: {pokeList[0].level}</h2> : <></>}
    </div>
    <div className="singleShowcase" id="1">
      
    {pokeList?.length == 2 ? <h2>Pokemon: {pokeList[1]?.name}</h2> : <h2>Daycare Slot Empty!</h2> }
      {pokeList?.length == 2 ? <img alt=":(" src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/' + pokeList[1].pokedex_id + ".gif"}></img> : <img alt=":(" src="assets/basepokemon.png"></img>}
      {pokeList?.length == 2 ? <h2>Level: {pokeList[1].level}</h2> : <h2>Add a pokemon to your daycare!</h2>}


    </div>
  </div>
<div className="egg">
  <h2> Egg Status: </h2>
  {(eggList?.length==1) ? <img alt="No egg to be found!" src={imageURL}></img> : <></>
}
    {(eggList?.length==1) ?  <button className="care" onClick={(hatchEgg)}>Hatch Egg!</button> : <></>


}
</div>
</div>

<div className ="links">
<a id="inventory" onClick={inventory}>Inventory</a>

</div>



</div>

</div>


<footer>
<h1> this is the footer area </h1>
</footer>

    
        </>
    );


    
}






