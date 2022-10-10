import "./Navbar.css"
import home from "../../assets/icons8-home.svg";
import about from "../../assets/person-sharp-svgrepo-com.svg";
import projects from "../../assets/trello-svgrepo-com.svg";
import contact from "../../assets/icons8-mail-48.png";

function Navbar() {
    return (<>
        <nav>
            <ul className="sections">
                <li className="section" ><a className="link" href="#home"><img src={home} className="icon" /><span className="link-text">Home</span></a></li>
                <li className="section" ><a className="link" href="#about"><img src={about} className="icon" /><span className="link-text">About</span></a></li>
                <li className="section" ><a className="link" href="#projects"><img src={projects} className="icon" /><span className="link-text">Projects</span></a></li>
                <li className="section" ><a className="link" href="#contact"><img src={contact} className="icon" /><span className="link-text">Contact</span></a></li>
            </ul>
        </nav>
    </>)
}

export default Navbar;