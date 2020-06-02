import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import MyTodoList from './containers/mytodolist';
import Addnew from './containers/addnew';
import FooterLink from './components/filterlink';



class App extends Component {

  render(){
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Addnew />
          <MyTodoList/>
          <div className="footer">
            <FooterLink actionType="ALL">
              ALL
            </FooterLink>
            {" "}
            <FooterLink actionType="TODO">
              TODO
            </FooterLink>
            {" "}
            <FooterLink actionType="COMPLETED">
              COMPLETED
            </FooterLink>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
