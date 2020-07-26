import React,{Fragment} from "react";

//assets
import "../../assets/css/components/global/Footer.css";

const Footer = (props)=>{
    return(
        <Fragment>
            <footer className="footer">
                    Vidal De los Santos &copy; {new Date().getFullYear()}
            </footer>
        </Fragment>
    );
}

export default Footer;