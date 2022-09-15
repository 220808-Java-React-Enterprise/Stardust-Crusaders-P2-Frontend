
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <>
            <body>
            <div className="topnav">
    <a href="#" id="test" onClick={() => navigate("/home")}><img alt="Its broken!" src="assets\pokemon_home.png"width="100%" height="100%"></img></a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a className="cta" onClick={() => navigate("/signup")}>Sign In</a>
</div>

            </body>
        </>
    );
}