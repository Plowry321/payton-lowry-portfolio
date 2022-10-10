import "./Navbar.css"

function Navbar() {
    return (<>
        <nav>
            {/* <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a> */}
            {/* <h1>Payton Lowry</h1> */}
            <ul className="sections">
                <li className="section" ><a className="link" href="#home"><img src="src/assets/icons8-home.svg" className="icon" /><span className="link-text">Home</span></a></li>
                <li className="section" ><a className="link" href="#about"><img src="src/assets/person-sharp-svgrepo-com.svg" className="icon" /><span className="link-text">About</span></a></li>
                <li className="section" ><a className="link" href="#projects"><img src="src/assets/trello-svgrepo-com.svg" className="icon" /><span className="link-text">Projects</span></a></li>
                <li className="section" ><a className="link" href="#contact"><img src="src/assets/email-svgrepo-com.svg" className="icon" /><span className="link-text">Contact</span></a></li>
            </ul>
            {/* <a className="link" href="#home"><span className="link-text">Home</span><img src="src/assets/icons8-home.svg" className="icon" /></a>
            <a className="link" href="#about"><span className="link-text">About</span><img src="src/assets/person-sharp-svgrepo-com.svg" className="icon" /></a>
            <a className="link" href="#projects"><span className="link-text">Projects</span><img src="src/assets/trello-svgrepo-com.svg" className="icon" /></a>
            <a className="link" href="#contact"><span className="link-text">Contact</span><img src="src/assets/email-svgrepo-com.svg" className="icon" /></a> */}
        </nav>
    </>)
}

export default Navbar;