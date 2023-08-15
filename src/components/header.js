import React, { Component } from 'react';
import { SearchIcon } from './searchIcon';
import { Logo } from './logo';
import { PageTitle } from './pageTitle';
import { SearchInput } from './searchInput';

import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  handleSearchTextChange = (event) => {
    this.setState({ searchText: event.target.value });
  };

  startSearch = () => {
    const searchText = this.state.searchText;
    this.props.startSearch(searchText); // Pasar el texto de búsqueda al componente padre
  };

  render() {
    return (
      <div className="header">
        <div className="title-container">
          <PageTitle />
        </div>
        <div className="logo">
          <Logo />
        </div>
        <div className="form">
          <SearchInput
            searchText={this.state.searchText}
            handleSearchTextChange={this.handleSearchTextChange}
            startSearch={this.startSearch}
          />
          <SearchIcon
            startSearch={this.startSearch} 
          />
        </div>
      </div>
    );
  }
}

export default Header;