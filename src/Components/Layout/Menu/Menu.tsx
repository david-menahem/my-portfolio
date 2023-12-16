import {useNavigate } from "react-router-dom";
import "./Menu.css"

function Menu(): JSX.Element{
const navigate = useNavigate();
const home = ()=>{
    navigate("/")
} 
    return(
        <div className="menu">
            <button className="menu-button">
                <div className="menu-icon" onClick={home}></div>
            </button>
            <nav>
                <ul>
                    <li className="projects-li">
                        <a href='/'>Projects</a>
                        <ul className="projects">
                            <li>
                                <a href="/coupon">Coupon system</a>
                            </li>
                            <li>
                                <a href="/stock">Stock chart</a>
                            </li>
                        </ul>
                    </li>
                    <li className="other-links-li">
                        <a href=''>Links</a>
                        <ul className='other-links'>
                            <li>
                                <a href="https://github.com/DavidMenahem" target='blank'>Github</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/david-menahem-49924883/" target='blank'>Linkedin</a>
                            </li>
                            <li>
                                <a href="https://docs.google.com/document/d/1Fi5mdDKQeY_ENY45rE3HbwFwDYlKGLNJ/edit?usp=sharing&ouid=107743159920579083508&rtpof=true&sd=true" target="_blank">Resume</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )

}

export default Menu;