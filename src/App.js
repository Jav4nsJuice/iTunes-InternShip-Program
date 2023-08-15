import React, {Component} from 'react';
import Header from './components/header';
import { ItemsList } from './components/ItemsList';
import { iTunesApiRequest } from './utils';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { searchResults: [] };
        this.updateSearch = this.updateSearch.bind(this);
    }

    async updateSearch(text) {
     const response = await iTunesApiRequest(text, 'music', 'album');
     this.setState({ searchResults: response.results });
     console.log('Hola:', this.state.searchText);
    }

    render() {
        const { searchResults } = this.state;
        return (
            <div className="App">
                <Header startSearch={this.updateSearch}/>
                <ItemsList items={searchResults} />
            </div>
        );
    }
}

export default App;