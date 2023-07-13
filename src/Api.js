import React, {Component} from "react";
import axios from "axios";




class Api extends Component{
    constructor(props){
        super(props);
        this.state = {url: '', alt: ''}
    }
    async componentDidMount(){
        const query = "apollo 11"
        const res2 = await axios.get(`http://images-api.nasa.gov/search?q=${query}`)
        this.setState({url: res2.data.collection.items[0].links[0].href, alt: res2.data.collection.items[0].links[0].render})
    }
    render(){
        return(
            <div>
                <img src={this.state.url} alt={this.state.alt}/>
            </div>
            
        )
    }
}

export default Api;