import Controller from "./Controller.js";
import Store from "./Store.js";
import storage from "./storage.js";
import SearchFormView from "./views/SearchFormView.js";
import SearchResultView from "./views/SearchResultView.js";
import TabView from "./views/TabView.js";

document.addEventListener("DOMContentLoaded", main);

function main() {
    const store = new Store(storage);

    const views = {
        searchFormView: new SearchFormView(),
        searchResultView: new SearchResultView(),
        tabView: new TabView(),
    };

    new Controller(store, views);
}
