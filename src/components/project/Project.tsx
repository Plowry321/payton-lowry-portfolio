import "./Project.css";
import githubimg from "../../assets/github-logo.png";

type ProjectProps = {
    id: number
    title: string
    description: string
    link: string
    techStack: string
    github: string
    image: string
}

function Project({ id, title, description, link, techStack, github, image }: ProjectProps) {
    return (<>
        <article className="project">
            <div className="project-header"><a href={link} target="_blank" className="title">{title} </a>
                <a href={github} target="_blank" className="github-link"><img src={githubimg} alt="github logo" className="github-logo" /></a></div>
            <h2 style={{ color: "#21A06D" }}>Built With: <span style={{ color: "white" }}>{techStack}</span></h2>
            <p className="description">{description}</p>
            <img src={image} alt={title} className="image" />
        </article>
    </>)
}

export default Project;