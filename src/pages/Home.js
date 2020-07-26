import React,{Component, PureComponent, Fragment} from "react";

//assets
import "../assets/css/pages/Home.css";

//components
import UserFilter from "../components/UserFilter";
import User from "../components/container/User";
import Loading from "../components/global/Loading";



class Home extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            results:10,
            gender:"",
            data:[],
            loading:true
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

        if(req.ok){
            this.setState({
                data,
                loading:false
            })

        }  
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
        const {results,gender,data, loading} = this.state;
        if(loading){
            return(
                <Fragment>
                    <Loading/>
                </Fragment>
            );
        }else{
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
}

export default Home;