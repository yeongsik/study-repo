import React from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import SearchResult from "./components/SearchResult";
import store from "./Store.js"
import Tabs, {TabType} from "./components/Tabs";

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            searchKeyword: "",
            searchResult: [],
            submitted: false,
            selectedTab: TabType.KEYWORD,
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
        const {searchKeyword, submitted, searchResult, selectedTab} = this.state;

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
                        {submitted ? (
                            <SearchResult data={searchResult} />
                        ) : (
                            <>
                                <Tabs selectedTab={selectedTab} onChange={(selectedTab) => this.setState({selectedTab})} />
                                {selectedTab === TabType.KEYWORD && <>TODO:추천검색어 목록 </>}
                                {selectedTab === TabType.HISTORY && <>TODO:최근검색어 목록 </>}
                            </>

                        )}
                    </div>
                </div>
            </>
        );
    }
}
