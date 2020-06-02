import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Addtodo from './components/addtodo';
import MyTodoList from './containers/mytodolist';




class App extends Component {
  constructor(props){
    super(props);
    
  }
  render(){

    return (
      <div className="App">
        <Header />
        <Addtodo/>
        <MyTodoList/>
      </div>
    );
  }
}

export default App;
