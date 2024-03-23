import { useEffect } from "react";
import "./Stock.css"
import stockCharts from "../../../assets/stock-charts.png";
function Stock(): JSX.Element{
    useEffect(() =>{
        window.scrollTo(0,0,);
    },[]);
    
    return(

        <div className="stock">
            <div className="stock-header">
                <h1>Stock charts</h1>
                <p>A python project with tkinter</p>
                <p>Select a stock and a timeframe to view a chart</p>
            </div>
            <div className="links">
                <a href="https://github.com/david-menahem/stock" target="_blank">Code</a>
            </div>
            <div className="images">
            <figure className="figure">
                    <figcaption className="caption">Stock chart and information</figcaption>
                    <img src={stockCharts} alt="Folder view" width={1024} height={768} title="Companies list"></img>
                </figure> 
            </div> 
        </div>
    );
}
export default Stock;