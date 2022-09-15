import User from "../../models/User";

interface UserProp{
  currentUser: User | null;
}
export default function Home({currentUser}: UserProp) {
    return (
        <>
        <div className="mainBody">
  <div className="banner">

  </div>
  <div className="icons">
    <div className="column">
    <img src="assets\pokemon1.png" alt="Snow" width="75%"></img>
  </div>

  <div className="column">
    <img src="assets\pokemon2.png" alt="Forest" width="75%"></img>
  </div>
  <div className="column">
    <img src="assets\pokemon3.png" alt="Mountains" width="75%"></img>
  </div>
  </div>


<div className="content">
  <h1>
  Main Menu Body Area

  </h1>
</div>
currentUser ? <h2>logged in!</h2>
: <h2>not logged in</h2>
</div>


<footer>
<h1> this is the footer area </h1>
</footer>

        
        
        
        
        
        </>
    );
}