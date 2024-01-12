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
            searchKeyword: "Hello",
        };
    }

    handleChangeInput(event) {
        // 리액트에서 이벤트를 처리하는 메서드는 앞에 handle을 붙인다.

        // 컴포넌트의 상태를 변경하려면 setState 써야한다.
        this.setState({
            searchKeyword: event.target.value
        });
    }

    render() {
        return (
            <>
                <header>
                    <h2 className="container">검색</h2>
                </header>
                <div className="container">
                    <form id="search-form-view">
                        <input
                            type="text"
                            placeholder="검색어를 입력하세요."
                            autoFocus
                            value={this.state.searchKeyword}
                            onChange={event => {
                                this.handleChangeInput(event);
                            }}
                        />
                        <button type="reset" className="btn-reset"></button>
                    </form>
                </div>
            </>
        );
    }
}

// 브라우저 상태 관리가 아닌 리액트만의 상태관리가 필요하다.
ReactDOM.render(<App />, document.querySelector("#app"));