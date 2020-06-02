import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import MyTodoList from './containers/mytodolist';
import Addnew from './containers/addnew';
import TodoFooter from './containers/todofootercontainer';




class App extends Component {

  render(){
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Addnew />
          <MyTodoList/>
          <TodoFooter/>
        </div>
      </div>
    );
  }
}

export default App;
