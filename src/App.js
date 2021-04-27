import './App.css';
import React, { useState, useEffect, Component } from 'react';
import Header from './componenets/Header';
import Table from './componenets/Table';
import Searchbar from './componenets/Searchbar';
import API from './utils/API';


const App = () => {


//   useEffect(() => {
//     const employees = API.getEmployees();
//       return employees  
//   }, [],
// );

  return (
      <div className="App">
        
        <Header />
        <Searchbar />
        <Table />
      </div>

  );
}

export default App;
