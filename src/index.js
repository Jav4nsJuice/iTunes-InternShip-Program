import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import ItemsList from './ItemsList';
import { iTunesApiRequest } from './utils';
import styled, { createGlobalStyle } from 'styled-components';
import Palette from './palette';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
        margin: 0;
        background-color: ${Palette('Grey', 300)};
  }
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
`;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchResults: [] };
        this.updateSearch = this.updateSearch.bind(this);
    }

    async updateSearch(text) {
     const response = await iTunesApiRequest(text, 'music', 'album');
     this.setState({ searchResults: response.results });
    }

    render() {
        const { searchResults } = this.state;
        return (
            <>
                <GlobalStyle />
                <Content>
                    <Header startSearch={this.updateSearch} />
                    <ItemsList items={searchResults} />
                </Content>
            </>
        );
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
