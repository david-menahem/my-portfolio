import { useEffect } from "react";
import "./Numbers.css"
function Numbers(): JSX.Element{
    useEffect(() =>{
        window.scrollTo(0,0,);
    },[]);
    
    return(

        <div className="numbers">
            <div className="numbers-header">
                <h1>Number detection</h1>
                <p>A CNN machine learning model</p>
                <p>Train a model to detect numbers 0-9 from images</p>
            </div>
            <div className="links">
                <a href="https://github.com/david-menahem/models/blob/main/cnn_numbers.ipynb" target="_blank">Notebook</a>
            </div>
        </div>
    );
}
export default Numbers;