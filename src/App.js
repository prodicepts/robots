import React from "react";
import './css/App.css';
import SearchBar from "./SearchBar";
import CardLists from "./CardLists";
import Loading from "./Loading";
import "tachyons";
// import {robot}  from "./data/robots";
import { Component } from 'react';
import Scroll from "./Scroll";

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots : [],
            searchText : ''
        }
        //console.log('Constructor')
    }
    componentDidMount(){
        
        fetch(`https://jsonplaceholder.typicode.com/users`).then(resp =>{
            return resp.json();
        }).then(data => {
            this.setState({
                robots : data
            })
        })
        //console.log('componMount');
    }
    onTextInput = (event) => {
        this.setState({
            searchText: event.target.value
        });
    }

    render(){
        const filteredRobot = this.state.robots.filter((robots) => {
            return robots.username.toLowerCase().includes(this.state.searchText.toLowerCase())
        });
        if(this.state.robots.length <= 0){
            return (<Loading />);
        }
        return (
            <div className="w-80 tc ba bw1 b--orange br4 container">
                    <SearchBar searchTriger = {this.onTextInput} />
                    <Scroll>
                        <CardLists rbt = {filteredRobot}/>
                    </Scroll>
            </div>
        );
        };
        
        
}


export default App;