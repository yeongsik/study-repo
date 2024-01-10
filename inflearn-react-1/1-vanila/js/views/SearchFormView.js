import View from "./View.js";
import {on, qs} from "../helpers.js";

export default class SearchFormView extends View {

    constructor() {
        super(qs("#search-form-view"));

        this.inputElement = qs("[type=text]", this.element);
        this.resetElement = qs("[type=reset]", this.element);


        this.showResetButton(false);
        this.bindEvent();
    }

    showResetButton(visible = true) {
        this.resetElement.style.display = visible ? "block" : "none";
    }

    bindEvent() {
        on(this.inputElement, "keyup", () => this.handleKeyup());
        this.on("submit", (event) => this.handleSubmit(event));
        on(this.resetElement, "click", () => this.handleReset());
    }

    handleKeyup() {
        const {value} = this.inputElement;
        this.showResetButton(value.length > 0);

        if (value.length <= 0) {
            this.handleReset();
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const {value} = this.inputElement;
        this.emit("@submit", {value});
    }

    handleReset() {
        this.emit("@reset")
    }
}