import './App.css';
import React from 'react';
import Header from './componenets/Header';
import Table from './componenets/Table';
import Searchbar from './componenets/Searchbar';


const App = () => {

  return (
      <div className="App">
        
        <Header />
        <Searchbar />
        <Table />
      </div>

  );
}

export default App;
