import { useEffect } from "react";
import "./Coupon.css"
import couponAdd from "../../../assets/coupon-add-big.png";
import couponComapnies from "../../../assets/coupon-companies-big.png";
import couponLogin from "../../../assets/coupon-login-big.png";

function Coupon(): JSX.Element{
    useEffect(() =>{
        window.scrollTo(0,0,);
    },[]);
    return(<div className="coupon">
            <div className="coupon-header">
                <h1>Coupon management system</h1>
                <p>A simluation for managing coupons between customers and companies</p>
                <p>A React single page web app with a Java api and MySql database</p>
            </div>
            <div className="links">
                <a href="https://github.com/DavidMenahem/coupons" target="_blank">Backend code</a>
                <a href="https://github.com/DavidMenahem/coupons-site" target="_blank">Frontend code</a>
            </div>      
            <div className="images">
               <figure className="figure">
                    <figcaption className="caption">Add a coupon</figcaption>
                    <img src={couponAdd} alt="Add coupon" title="Add a coupon" width="1024" height="768"></img>
                    </figure>
                    <figure className="figure">
                        <figcaption className="caption">List of companies</figcaption>
                        <img src={couponComapnies} alt="Login coupon" title="Login" width={1024} height={768}></img>
                    </figure>
                    <figure className="figure">
                        <figcaption className="caption">Login to coupon system</figcaption>
                        <img src={couponLogin} alt="List of companaies" width={1024} height={768} title="Companies list"></img>
                    </figure>
            </div>
        </div>);
}
export default Coupon;