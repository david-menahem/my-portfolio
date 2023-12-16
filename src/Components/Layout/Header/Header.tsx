import "./Header.css";
import profile from "../../../assets/profile-picture.png"
function Header() : JSX.Element{
    return(
        <header>
            <h1>David Menahem</h1>
            <h2>Projects</h2>
        <div className='picture'>
            <img src={profile} alt='David Menahem'/>
        </div>  
    </header>

    )
}
export default Header;
