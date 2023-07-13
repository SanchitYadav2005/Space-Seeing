import React, { Component } from 'react';


class Form extends Component{
    constructor(props){
        super(props);
        this.state = {formValue:""}
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.setState({formValue: e.target.value})
    }
    render(){
        return(
            <div>
                <h1>{this.state.formValue}</h1>
                <input placeholder='working' onChange={this.handleChange}/>
            </div>
        )
    }
}

export default Form;