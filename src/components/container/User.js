import React,{Component,Fragment} from "react";

//components
import UserView from "../presentational/UserView";

class User extends Component{

    constructor(props){
        super(props);

        this.state = {
            data:[]
        }
    }

    componentWillMount(){
        this.setState({
            data:this.props.data
        })
    }


    componentWillReceiveProps(nextProps){
        this.setState({
            data:nextProps.data
        })
    }

    render(){
        const {data} = this.state;
        return(
            <Fragment>
                <div id="ctr-user">
                    {data.map((user,index)=>{

                        return(
                            
                            <UserView key={`user_${index}`}
                                picture={user.picture.large}
                                name={`${user.name.first} ${user.name.last}`}
                                age={user.dob.age}
                                birthday={user.dob.date.substring(0,user.dob.date.indexOf("T"))}
                                phone={user.phone}
                                address={`${user.location.street.number} ${user.location.street.name}, 
                                ${user.location.city} /${user.location.country}`}
                                />
                        );
                    })}
                </div>
            </Fragment>
        );
    }
}
export default User;