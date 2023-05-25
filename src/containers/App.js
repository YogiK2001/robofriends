import React from "react";
import { Component } from "react";
import CardList from "../components/CardList"
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';


class App extends Component {
    constructor() {
        super();
        this.state =
        {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(Response => Response.json())
            .then(users => this.setState({ robots: users }));
    }
    
    onSearchChange = (event) => {
        /*Cannot read properties of undefined (reading 'setState') will come if your write 
        like onSearchChange(event) becasue this is will look for "setState" in the event
        instead of the class */
        this.setState({ searchField: event.target.value });
    }

    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return !robots.length ? <h1>Loading</h1> 
        :
        (
            <div className="tc" >
                <h1 className="f1" >RoboFriends</h1>
                <h4 className="f3" >Find Your Robot Friends Here!</h4>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                    <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}
export default App;