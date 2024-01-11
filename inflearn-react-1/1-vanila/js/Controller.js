import {TabType} from "./views/TabView.js";

const tag = "[Controller]";

export default class Controller {
    constructor(store, {
        searchFormView,
        searchResultView,
        tabView,
        keywordListView,
        historyListView
    }) {

        this.store = store;

        this.searchFormView = searchFormView;
        this.searchResultView = searchResultView;
        this.tabView = tabView;
        this.keywordListView = keywordListView;
        this.historyListView = historyListView;

        this.subscribeViewEvent();
        this.render();
    }

    subscribeViewEvent() {
        this.searchFormView
            .on('@submit', event => this.search(event.detail.value))
            .on("@reset", () => this.reset());

        this.tabView
            .on("@change", event => this.changeTab(event.detail.value));

        this.keywordListView
            .on("@click", event => this.search(event.detail.value));

        this.historyListView
            .on("@click", event => this.search(event.detail.value));
    }

    search(searchKeyword) {
        this.store.search(searchKeyword);
        this.render();
    }

    reset() {
        this.store.searchKeyword = "";
        this.store.searchResult = [];
        this.render();
    }

    changeTab(tab) {
        this.store.selectedTab = tab;
        this.render();
    }

    render() {
        if (this.store.searchKeyword.length > 0) {
            return this.renderSearchResult();
        }

        this.tabView.show(this.store.selectedTab);
        if (this.store.selectedTab === TabType.KEYWORD) {
            this.historyListView.hide();
            this.keywordListView.show(this.store.getKeywordList());
        } else if (this.store.selectedTab === TabType.HISTORY) {
            this.keywordListView.hide();
            this.historyListView.show(this.store.getHistoryList());
        } else {
            throw "사용 할 수 없는 탭입니다."
        }

        this.searchResultView.hide();
    }

    renderSearchResult() {
        this.searchFormView.show(this.store.searchKeyword);
        this.tabView.hide();
        this.keywordListView.hide();
        this.historyListView.hide();

        this.searchResultView.show(this.store.searchResult);
    }
}