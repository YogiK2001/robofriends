import React from "react";
//  import { Component } from "react";
import CardList from "../components/CardList"
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import { useState, useEffect } from "react";
import './App.css';

// Upgrading to React 18 and using Hooks instead of Component

function App() {
    // constructor() {
    //     super();
    //     this.state =
    //     {
    //         robots: [],
    //         searchField: ''
    //     }
    // }

    // Added Hooks
    const [robots, setRobot] = useState([]);
    const [searchField, setSearchField] = useState('');

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(Response => Response.json())
    //         .then(users => this.setState({ robots: users }));
    // } Instead of this we will use useEffect Hook

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(Response => Response.json())
          .then(users => setRobot(users));
        }, []); // Empty array means it will run only once



    
    const onSearchChange = (event) => {
        /*Cannot read properties of undefined (reading 'setState') will come if your write 
        like onSearchChange(event) becasue this is will look for "setState" in the event
        instead of the class */
        // this.setState({ searchField: event.target.value });
        setSearchField(event.target.value);
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    
        // const { robots, searchField } = this.state;
        
        return !robots.length ? <h1>Loading</h1> 
        :
        (
            <div className="tc" >
                <h1 className="f1" >RoboFriends</h1>
                <h4 className="f3" >Find Your Robot Friends Here!</h4>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                    <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
export default App;