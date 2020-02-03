import React,{Fragment} from "react";

//assets
import "../assets/css/components/UserFilter.css";

const UserFilter = (props) =>{

    const {request,changeRequest} = props;
    return(
        <Fragment>
            <div id="ctr-user_filter">
                <label htmlFor="gender">Gender :</label>
               <select className="fields" name="gender" id="gender"
               value={request.gender}
               onChange={changeRequest}>
                   <option value="">Mixed</option>
                   <option value="female">Female</option>
                   <option value="male">Male</option>
               </select>
               
               <label htmlFor="results">Results :</label>
               <input className="fields" name="results" id="results" type="number" max="5000" min="1"
               value={request.results}
                onChange={changeRequest}
               />
            </div>

        </Fragment>
    );
};

export default UserFilter;