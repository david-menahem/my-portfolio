import { useEffect } from 'react';
import './Main.css'
import { NavLink } from 'react-router-dom';
import stock from "../../assets/stock-charts.png";
import coupon from "../../assets/coupon-add.png"
function Main():JSX.Element{
  useEffect(()=>{
    window.scrollTo(0,0)
  },[]);
  return(<div className="parent-container">
            <div className="container">
                    <NavLink to="/coupon">
                        <figure className="figure">
                        <figcaption className="caption">Coupon system</figcaption>
                                <img className="scale" src={coupon} alt="Coupon management" width="400" height="400"/>
                        </figure>
                    </NavLink>
                </div>
                <div className="container">
                    <NavLink to="/stock">
                        <figure className='figure'>
                        <figcaption className="caption">Stock charts</figcaption>
                            <img className="scale" src={stock} alt="Stock charts" width="400" height="400"/>
                        </figure>
                    </NavLink>
                </div>
            </div>
    ); 
}
export default Main;