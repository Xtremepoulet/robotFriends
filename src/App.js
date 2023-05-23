import React, { Component } from 'react';
import CardList from './cardList.js';
import Searchbox from './searchbox.js'
import './App.css';
import Scroll from './scroll.js'



class App extends Component {
    constructor() {
        super()
        this.state = {
            Robots: [],
            searchfield: ''
        }
    }

    
    onSearchChange = (event) => {
       this.setState({ searchfield: event.target.value });
    }

    componentDidMount() { //on recupere la liste 
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(user => this.setState({ Robots : user}))
    }

    render() {

        const filteredRobots = this.state.Robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())}
            )

        // const filteredRobots = this.state.Robots.filter(robot => {
        //     return robot.id.toLowerCase().includes(this.state.searchfield)
        // })

        return(
            <div className="tc">
                <h1 class='title'>RobotFriends</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
                    
            </div>
            
        )
    }

}


   


export default App