const tag = "[Controller]";

export default class Controller {
    constructor(store, {searchFormView}) {
        this.store = store;
        this.searchFormView = searchFormView;
        this.subscribeViewEvent();
    }

    subscribeViewEvent() {
        this.searchFormView.on('@submit', event => this.search(event.detail.value));
    }

    search(keyword) {
        console.log(tag, keyword);
    }

}