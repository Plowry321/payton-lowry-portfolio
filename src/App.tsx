import "./App.css";
import { motion, useScroll } from "framer-motion";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/project/Project";
import Skills from "./components/skills/Skills";
import { Contact } from "./components/contact/Contact";
import portfolioimg from "./assets/paytonlowry.com.png";
import songsyncimg from "./assets/songsync.org.png";
import paytonlowry from "./assets/payton-lowry.png";
import linkedin from "./assets/linkedin-logo.png";
import github from "./assets/github-logo.png";
import resumeimg from "./assets/resume-logo.png";
import resume from "./assets/Payton-Lowry-Resume.pdf";

const projects = [
  {
    id: 0,
    title: "SongSync.org",
    description: "A web application for syncing song lyrics across multiple devices. Senior capstone project at Ball State University.",
    link: "https://www.songsync.org/",
    techStack: "HTML, CSS, JavaScript, Node.js",
    github: "https://github.com/SongSync-Lyrics/SongSyncCore",
    image: portfolioimg
  },
  {
    id: 1,
    title: "PaytonLowry.com",
    description: "The very portfolio site you are viewing right now! Built using React.js and TypeScript. Always up to date with my newest projects!",
    link: "https://www.paytonlowry.com/",
    techStack: "React.js, TypeScript",
    github: "https://github.com/Plowry321/payton-lowry-portfolio",
    image: songsyncimg
  }
]

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Navbar />
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <main>
        <section id="home">
          <div className="name">
            <h1 className="payton">Payton</h1>
            <h1 className="lowry">Lowry</h1>
          </div>
          <div className="web-developer">
            <h1 className="developer">Web</h1>
            <h1 className="developer">Developer</h1>
          </div>
          <ul className="dev-links">
            <li><a href="https://www.linkedin.com/in/payton-lowry/" target="_blank" className="dev-link"><img src={linkedin} alt="linkedin logo" className="dev-link-logo" /></a></li>
            <li><a href="https://github.com/Plowry321" target="_blank" className="dev-link"><img src={github} alt="linkedin logo" className="dev-link-logo" /></a></li>
            <li><a href={resume} target="_blank" className="dev-link"><img src={resumeimg} alt="linkedin logo" className="dev-link-logo" /></a></li>
          </ul>
        </section>
        <section id="about">
          <h1 className="section-header">A Little About Myself</h1>
          <div className="about-info">
            <div className="about-text">
              <p>Hey there, my name is <b>Payton Lowry</b> and I trick rocks into thinking, I mean uh write code.</p>
              <p>I discovered my love of programming at <b>Ball State University</b>, where I studied Computer Science.</p>
              <p>I love working with <b>React</b> and <b>Node.js</b>, but I also know a variety of laguages/tools to get the job done.</p>
            </div>
            <img className="about-image" src={paytonlowry} alt="Payton Lowry" />
          </div>
          <h2 className="my-skills">My Skills</h2>
          <Skills />
        </section>
        <section id="projects">
          <h1 className="section-header">A Few Things I've Worked On</h1>
          {projects.map((p) => {
            return (<Project id={p.id} title={p.title} description={p.description} link={p.link} techStack={p.techStack} github={p.github} image={p.image} />)
          })}
        </section>
        <section id="contact">
          <h1 className="section-header">Send Me A Message</h1>
          <Contact />
        </section>
      </main>
    </>
  )
}

export default App
