import React,{Component, Fragment} from "react";

//assets
import "../assets/css/pages/Home.css";

//components
import UserFilter from "../components/UserFilter";
import User from "../components/container/User";



class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            results:10,
            gender:"",
            data:[]
        }

        this.fetchRandomUser = this.fetchRandomUser.bind(this);
    }

    async fetchRandomUser(){

        const {results,gender} = this.state;
        

        let url = "";
        if(results>=1 && gender.trim()!==""){
            url= `https://randomuser.me/api/?results=${results}&gender=${gender}`;
        }else if(results>=1 && gender.trim()===""){
            url= `https://randomuser.me/api/?results=${results}`;
        }
    
        const req = await fetch(url);
        const data = await req.json();
        this.setState({
            data
        })
    }

    componentDidMount(){
        this.fetchRandomUser();
    }

    

    handleChangeRequest = (e) =>{
        
        if(e.target.name==="results"){
            this.setState({
                results:Number(e.target.value)     
            },()=>{
                this.fetchRandomUser();
            });
            
           
        }else{
            this.setState({
                gender:e.target.value 
            },()=>{
                this.fetchRandomUser();
            });
            
        }

    }

    render(){
        const {results,gender,data} = this.state;
        return(
            <Fragment>
                <UserFilter request={{results,gender}} changeRequest={this.handleChangeRequest}/>
                <div id="ctr-home">
                    {
                        (data.results!==undefined)? <User data={data.results}/>:""
                        
                    }
                </div>
            </Fragment>
        );
    }
}

export default Home;