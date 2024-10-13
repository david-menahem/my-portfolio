import { useEffect } from "react";
import "./Coupon.css"
import couponAdd from "../../../assets/coupon-add-big.png";
import couponLogin from "../../../assets/coupon-login.png";
import companies from "../../../assets/companies.png";
import companiesCoupons from "../../../assets/company-coupons.png";
import companyCouponElectricity from "../../../assets/company-coupon-electricity.png";
import customerCoupons from "../../../assets/customer-coupons.png";
import customers from "../../../assets/customers.png";

function Coupon(): JSX.Element{
    useEffect(() =>{
        window.scrollTo(0,0);
    },[]);
    return(<div className="coupon">
            <div className="coupon-header">
                <h1>Coupon management system</h1>
                <p>A system for managing coupons for customers and companies</p>
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
                        <img src={companies} alt="List of companies" title="Login" width={1024} height={768}></img>
                    </figure>
                    <figure className="figure">
                        <figcaption className="caption">List of customers</figcaption>
                        <img src={customers} alt="List of customers" title="Login" width={1024} height={768}></img>
                    </figure>
                    <figure className="figure">
                        <figcaption className="caption">List of coupons by customer</figcaption>
                        <img src={customerCoupons} alt="List of coupons by customer" title="Login" width={1024} height={768}></img>
                    </figure>
                    <figure className="figure">
                        <figcaption className="caption">List of coupons by company</figcaption>
                        <img src={companiesCoupons} alt="List of coupons by company" title="Login" width={1024} height={768}></img>
                    </figure>
                    <figure className="figure">
                        <figcaption className="caption">List of coupons by company in electricity category</figcaption>
                        <img src={companyCouponElectricity} alt="List of coupons by company in electricity category" title="Login" width={1024} height={768}></img>
                    </figure>
                    <figure className="figure">
                        <figcaption className="caption">Login to coupon system</figcaption>
                        <img src={couponLogin} alt="Login to coupon system" width={1024} height={768} title="Companies list"></img>
                    </figure>
                    <figure className="figure">
                        <figcaption className="caption">Add a coupon</figcaption>
                        <img src={couponAdd} alt="Add coupon" title="Add a coupon" width="1024" height="768"></img>
                    </figure>
            </div>
        </div>);
}
export default Coupon;