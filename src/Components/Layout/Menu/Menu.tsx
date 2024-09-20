import {useNavigate } from "react-router-dom";
import "./Menu.css"
import { NavLink } from "react-router-dom";

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
                        <NavLink to='/'>Projects</NavLink>
                        <ul className="projects">
                            <li>
                                <NavLink to="/coupon">Coupon system</NavLink>
                            </li>
                            <li>
                                <NavLink to="/numbers">Number detection model (notebook)</NavLink>
                            </li>
                            <li>
                                <NavLink to="/stock">Stock chart</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="other-links-li">
                        <NavLink to="/">Links</NavLink>
                        <ul className='other-links'>
                            <li>
                                <a href="https://github.com/david-menahem" target='blank'>Github</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/david-menahem-49924883/" target='blank'>Linkedin</a>
                            </li>
                            <li>
                                <a href="https://docs.google.com/document/d/1TQU-PxdaW81TE0NJpGIS_rjf_TVvx_JBNzsuEnamDec/edit?usp=sharing">Resume</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )

}

export default Menu;