const tag = "[Controller]";

export default class Controller {
    constructor(store, {searchFormView, searchResultView, tabView}) {
        this.store = store;

        this.searchFormView = searchFormView;
        this.searchResultView = searchResultView;
        this.tabView = tabView;

        this.subscribeViewEvent();
        this.render();
    }

    subscribeViewEvent() {
        this.searchFormView
            .on('@submit', event => this.search(event.detail.value))
            .on("@reset", () => this.reset());
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

    render() {
        if (this.store.searchKeyword.length > 0) {
            return this.renderSearchResult();
        }

        this.tabView.show(this.store.selectedTab);
        this.searchResultView.hide();
    }

    renderSearchResult() {
        this.tabView.hide();
        this.searchResultView.show(this.store.searchResult);
    }
}