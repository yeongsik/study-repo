import React from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import SearchResult from "./components/SearchResult";
import store from "./Store.js"

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            searchKeyword: "",
            searchResult: [],
            submitted: false,

        };
    }

    search() {
        const searchResult = store.search(this.state.searchKeyword);

        this.setState({
            searchResult,
            submitted: true,
        });
    }

    handleChangeInput(searchKeyword) {
        if (searchKeyword.length <= 0) {
            this.handleReset();
        }
        this.setState({searchKeyword});
    }

    handleReset() {
        this.setState({
            searchKeyword: "",
            submitted: false,
        })
    }


    render() {
        const {searchKeyword, submitted, searchResult} = this.state;

        return (
            <>
                <Header title="검색"/>
                <div className="container">
                    <SearchForm
                        value={searchKeyword}
                        onChange={(value) => this.handleChangeInput(value)}
                        onSubmit={() => this.search()}
                        onReset={() => this.handleReset()}
                    />
                    <div className="content">
                        {submitted && <SearchResult data={searchResult} />}
                    </div>
                </div>
            </>
        );
    }
}
