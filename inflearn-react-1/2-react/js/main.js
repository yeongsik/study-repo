import store from "./js/Store.js";

// 자바스크립트 코드의 시작점
// 이후에 모듈별로 만들어서 추가할 예정


// JSX의 속성은 카멜케이스로 사용한다.
// class를 사용할 수 없는 이유는 자바스크립트에서 사용하는 예약어 이기 때문에 jsx에서는 className을 사용한다.
// 리액트 엘리먼트는 루트 노드가 있어야 한다.
// <> </> fragment는 리얼돔에 반영이 되지 않는다.

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            searchKeyword: "",
            searchResult: [],
            submitted: false,

        };
    }

    handleChangeInput(event) {
        // 리액트에서 이벤트를 처리하는 메서드는 앞에 handle을 붙인다.

        // 컴포넌트의 상태를 변경하려면 setState 써야한다.
        const searchKeyword = event.target.value;

        if (searchKeyword.length <= 0 && this.state.submitted) {
            return this.handleReset();
        }

        this.setState({searchKeyword});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.search(this.state.searchKeyword);
    }

    search(searchKeyword) {
        const searchResult = store.search(searchKeyword);
        this.setState({searchResult, submitted:true});
    }

    handleReset() {
        this.setState({
            searchKeyword: "",
            submitted: false
        });
        // setState는 항상 비동기로 동작한다. 다음 코드에서 state값이 바로 반영되지 않는다.
        // 여러번 setState를 호출하더라도 모아놨다가 나중에 늦게 호출한다.
        // 나중에 최소한의 변경만 하기 위해서 늦게 state를 반영한다.

        // setState가 완료된 시점에서 console.log를 찍어보자
        // this.setState(() => {
        //     return {searchKeyowrd: ""}
        // }, () => {
        //     console.log("TODO: handleReset", this.state.searchKeyword);
        // });

    }

    render() {
        return (
            <>
                <header>
                    <h2 className="container">검색</h2>
                </header>
                <div className="container">
                    <form
                        onSubmit={event => this.handleSubmit(event)}
                        onReset={() => this.handleReset()}
                    >
                        <input
                            type="text"
                            placeholder="검색어를 입력하세요."
                            autoFocus
                            value={this.state.searchKeyword}
                            onChange={event => {
                                this.handleChangeInput(event);
                            }}
                        />
                        {this.state.searchKeyword.length > 0 && (
                            <button type="reset" className="btn-reset"></button>
                        )}
                    </form>
                    <div className="content">
                        {this.state.submitted &&
                            (this.state.searchResult.length > 0 ? (
                                <ul className="result">
                                    {this.state.searchResult.map(item => {
                                        return (
                                            <li key={item.id}>
                                                <img src={item.imageUrl} alt={item.name}/>
                                                <p>{item.name}</p>
                                            </li>
                                        )
                                    })}
                                </ul>
                            ) : (
                                <div className="empty-box">검색 결과가 없습니다.</div>
                            ))}
                    </div>
                </div>
            </>
        );
    }
}

// 브라우저 상태 관리가 아닌 리액트만의 상태관리가 필요하다.
ReactDOM.render(<App />, document.querySelector("#app"));