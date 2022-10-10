import "./Skills.css";
import react from "../../assets/react-logo.png";
import node from "../../assets/node-logo-png.png";
import javascript from "../../assets/javascript-logo.png";
import typescript from "../../assets/typescript-logo.png";
import html from "../../assets/html5-logo.png";
import css from "../../assets/css-logo.png";
import python from "../../assets/python-logo.png";
import java from "../../assets/java-logo.png";
import kotlin from "../../assets/kotlin-logo.png";

function Skills() {

    // const matches = document.querySelectorAll("img.skill-image");
    // console.log(matches);

    return (<>
        <div className="skills">
            <ul className="skills-list">
                <ul className="skill"><img className="skill-image react" src={react} alt="react.js" /></ul>
                <ul className="skill"><img className="skill-image" src={node} alt="node.js" /></ul>
                <ul className="skill"><img className="skill-image" src={javascript} alt="javascript" /></ul>
                <ul className="skill"><img className="skill-image" src={typescript} alt="typescript" /></ul>
                <ul className="skill"><img className="skill-image" src={html} alt="html" /></ul>
                <ul className="skill"><img className="skill-image" src={css} alt="css" /></ul>
                <ul className="skill"><img className="skill-image" src={python} alt="python" /></ul>
                <ul className="skill"><img className="skill-image" src={java} alt="java" /></ul>
                <ul className="skill"><img className="skill-image" src={kotlin} alt="kotlin" /></ul>

                <ul className="skill"><img className="skill-image react" src={react} alt="react.js" /></ul>
                <ul className="skill"><img className="skill-image" src={node} alt="node.js" /></ul>
                <ul className="skill"><img className="skill-image" src={javascript} alt="javascript" /></ul>
                <ul className="skill"><img className="skill-image" src={typescript} alt="typescript" /></ul>
                <ul className="skill"><img className="skill-image" src={html} alt="html" /></ul>
                <ul className="skill"><img className="skill-image" src={css} alt="css" /></ul>
                <ul className="skill"><img className="skill-image" src={python} alt="python" /></ul>
                <ul className="skill"><img className="skill-image" src={java} alt="java" /></ul>
                <ul className="skill"><img className="skill-image" src={kotlin} alt="kotlin" /></ul>
            </ul>
        </div>
    </>)
}

export default Skills;