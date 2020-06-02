import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import MyTodoList from './containers/mytodolist';
import Addnew from './containers/addnew';


class App extends Component {
  constructor(props){
    super(props);
    
  }
  render(){

    return (
      <div className="App">
        <Header />
        <div className="container">
          <Addnew />
          <MyTodoList/>
        </div>
      </div>
    );
  }
}

export default App;
