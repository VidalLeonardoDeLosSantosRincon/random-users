import React,{Fragment} from "react";

//assets
import "../../assets/css/components/presentational/UserView.css";

const UserView = (props) =>{
    const {
        picture,
        name,
        age,
        birthday,
        phone,
        address
    } = props;

    return(
        <Fragment>
            <div id="ctr-user_view">
                <img id="photo" src={picture} alt={name}/>
                <h4 id="name">{name}</h4>
                <h5 id="age">{age} years old</h5>
                <h5 id="date">Birthday : {birthday}</h5>
                <h5 id="phone">Phone : {phone}</h5>
                <h6 id="address">Address : {address}</h6>
            </div>

        </Fragment>
    );
}

export default UserView;