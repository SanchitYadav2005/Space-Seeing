import React, {Component} from "react";
import axios from "axios";

class Api extends Component{
    
    async componentDidMount(){
        const res = await axios.get("https://api.nasa.gov/planetary/apod?api_key=nGa6s8KYrPXDY86cgGAKlP4GeRoWOsm0GdbyMWgD")
        console.log(res.data)
        
    }
    render(){
        return(
            <img src={url}/>
        )
    }
}

export default Api;