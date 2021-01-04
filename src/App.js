import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBar } from './components/search-bar/search-bar.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mosters: [],
      searchFied: '',
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ mosters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchFied: e.target.value });
  };

  render() {
    const { mosters, searchFied } = this.state;
    const searchFilter = mosters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFied.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBar
          placeholder='search monsters'
          handleChange={(e) => this.setState({ searchFied: e.target.value })}
        />
        <CardList mosters={searchFilter} />
      </div>
    );
  }
}

export default App;
