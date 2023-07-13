import React, {Component} from "react";
import axios from "axios";

class Api extends Component{
    constructor(props){
        super(props);
        this.state = {url: ''}
    }
    async componentDidMount(){
        const res = await axios.get("https://api.nasa.gov/planetary/apod?api_key=nGa6s8KYrPXDY86cgGAKlP4GeRoWOsm0GdbyMWgD")
        console.log(res.data)
        this.setState({url: res.data.url})
    }
    render(){
        return(
            <img src={this.state.url}/>
        )
    }
}

export default Api;