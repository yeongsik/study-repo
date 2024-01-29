import React from "react";
import List from "./List.js";
import store from "../Store.js"
import {formatRelativeDate} from "../helpers.js";

export default class HistoryList extends React.Component {

    constructor() {
        super();

        this.state = {
            historyList: [],
        }
    }


    componentDidMount() {
        this.fetch();
    }

    fetch() {
        const historyList = store.getHistoryList();
        this.setState({
            historyList,
        });
    }

    handleClickRemoveHistory(event, keyword) {
        event.stopPropagation();
        store.removeHistory(keyword);
        this.fetch();
    }

    render() {
        const {historyList} = this.state;
        const {onClick} = this.props;

        return (
            <List
                data={historyList}
                onClick={onClick}
                renderItem={(item) => (
                    <>
                        <span>{item.keyword}</span>
                        <span className="date">{formatRelativeDate(item.date)}</span>
                        <button
                            className="btn-remove"
                            onClick={(event) => this.handleClickRemoveHistory(event, item.keyword)}
                        />
                    </>
                )}
            />
        )
    }


};