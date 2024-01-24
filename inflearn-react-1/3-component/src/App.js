import React from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            searchKeyword: "",
        }
    }

    search() {
        console.log(this.state.searchKeyword);
    }

    handleChangeInput(searchKeyword) {
        if (searchKeyword.length <= 0) {
            this.handleReset();
        }
        this.setState({searchKeyword});
    }

    handleReset() {
        console.log("handleReset");
    }


    render() {
        return (
            <>
                <Header title="검색"/>
                <div className="container">
                    <SearchForm
                        value={this.state.searchKeyword}
                        onChange={(value) => this.handleChangeInput(value)}
                        onSubmit={() => this.search()}
                        onReset={() => this.handleReset()}
                    />
                </div>
            </>
        );
    }
}
