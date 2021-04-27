import React, { Component } from 'react';

class Searchbar extends Component {
    state = {
      searchParam: ""
    };

    handleInputChange = e => {
      const { name, value } = e.target;

      this.setState({
        [name]: value
      });
    };

    handleFormSubmit = e => {
      e.preventDefault();

      // function to submit search query
      console.log(`Searching ${this.state.searchParam}`);
      this.setState({
        searchParam: ""
      });
    };

    render() {
      return (
        <div>
          <form className="searchInput">
            <input 
              value={this.state.searchParam}
              name="searchParam"
              onChange={this.handleInputChange}
              type="text"
              
              />
              <button onClick={this.handleFormSubmit}>Search</button>
          </form>
        </div>
      );
    }
    
  }

export default Searchbar
