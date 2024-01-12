// 자바스크립트 코드의 시작점
// 이후에 모듈별로 만들어서 추가할 예정


// JSX의 속성은 카멜케이스로 사용한다.
// class를 사용할 수 없는 이유는 자바스크립트에서 사용하는 예약어 이기 때문에 jsx에서는 className을 사용한다.
const element = (
    <header>
        <h2 className="container">검색</h2>
    </header>
);
ReactDOM.render(element, document.querySelector("#app"));