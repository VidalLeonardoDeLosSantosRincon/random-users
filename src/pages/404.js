import React,{Fragment} from "react";

//assets
import "../assets/css/pages/404.css";

//components
import Image404 from "../assets/images/404(2).png"

const PageNotFound = (props) =>{
    return(
        <Fragment>
            <div className="ctr-404">
                 <a href="/">Go back to Home</a>
                <img src={Image404} alt="image_404"/>    
            </div>
        </Fragment>
    );
};

export default PageNotFound;