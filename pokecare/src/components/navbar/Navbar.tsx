
import { useNavigate } from "react-router-dom";
import User from "../../models/User";
import "./Navbar.css";

interface UserProp{
    currentUser: User | null;
  }

export default function Navbar({currentUser}: UserProp) {
    const navigate = useNavigate();

    function logout(){
        window.sessionStorage.removeItem("user");
        navigate("/home");
        window.location.reload();
    }

    function profile(){

        navigate("/profile");
        window.location.reload();

    }

    return (
        <>
            <body>
            <div className="topnav">
            {currentUser ? <a className="cta" onClick={logout}>Sign Out</a>
  : <a className="cta" onClick={() => navigate("/auth")}>Sign In</a>}

{currentUser ? <a className="cta" onClick={profile}>Profile</a>
  : <></>}

    <a href="#" id="test" onClick={() => navigate("/home")}><img alt="Its broken!" src="assets\pokemon_home.png"width="100%" height="100%"></img></a>   
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>

 
</div>

            </body>
        </>
    );
}