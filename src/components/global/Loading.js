import React,{Fragment} from "react";

//assets
import "../../assets/css/components/global/Loading.css";

//components
import ImageLoading from "../../assets/images/loading.gif";

const Loading =(props)=>{
    return(
        <Fragment>
            <div className="ctr-loading">
                    <img src={ImageLoading} alt="image_loading"/>
            </div>
        </Fragment>
    );
}

export default Loading;