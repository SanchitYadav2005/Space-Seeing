import React, {Component} from "react";
import axios from "axios";

class Api extends Component{
    constructor(props){
        super(props);
        this.state = {url: ''}
    }
    async componentDidMount(){
        const res2 = await axios.get("http://images-api.nasa.gov/search?q=apollo+11")
        const res = await axios.get("https://api.nasa.gov/planetary/apod?api_key=nGa6s8KYrPXDY86cgGAKlP4GeRoWOsm0GdbyMWgD")
        console.log(res.data)
        console.log(res2.data.collection.items[0].links[0].href)
        this.setState({url: res2.data.collection.items[0].links[0].href})
    }
    render(){
        return(
            <img src={this.state.url}/>
        )
    }
}

export default Api;