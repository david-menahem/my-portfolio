import {useNavigate } from "react-router-dom";
import "./Menu.css"
import { NavLink } from "react-router-dom";
import links from "../../../links";

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
                                <a href={links.GITHUB} target='blank'>Github</a>
                            </li>
                            <li>
                                <a href={links.LINKEKDIN} target='blank'>Linkedin</a>
                            </li>
                            <li>
                                <a href={links.RESUME}>Resume</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )

}

export default Menu;