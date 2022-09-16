import "./Profile.css";

export default function Profile() {
    return (
        <>
        
<div className ="profile">

<div className ="topholder">
<div className  = "icon">
<img alt=":(" src="lancer.png"></img>
</div>

<div className  = "intro">
<div className  = "title">
<h1>PoliceLettuce</h1>
</div>

<div className = "description">
<h3> This is a sizable description that a user could enter. This tells a lot about the user and we should probably set a maximum size at some point.</h3>
</div>


</div>


</div>



<div className="rest">
  <div className="pokemon">
  <div className="showcase">
    <div className="singleShowcase" id="2">
      <h2>Pokemon:</h2>
      <img alt=":(" src="assets/showcase1.jpg"></img>
      <h2>Level:5</h2>
    </div>
    <div className="singleShowcase" id="1">
      <h2>Pokemon:</h2>
      <img alt=":(" src="assets/showcase2.jpg"></img>
      <h2>Level:5</h2>

    </div>
  </div>
<div className="egg">
  <h2> Egg Status: </h2>
  <img alt=":(" src="assets/egg.png"></img>

</div>
</div>

<div className ="links">
<a href="https://revature.com/" id="inventory">Inventory</a>
</div>



</div>

</div>


<footer>
<h1> this is the footer area </h1>
</footer>

        
        
        
        
        
        </>
    );
}