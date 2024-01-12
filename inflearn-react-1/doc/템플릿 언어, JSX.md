# 템플릿 언어 , JSX

### 템플릿 언어

* DOM에서는 엘리먼트를 생성할 때 createElement를 사용한다.
* 돔에서 엘리먼트는 자식을 추가할 수 있는 트리구조를 갖고 있다.
* 이런 형태를 그리려면 코드량이 많아 지기 때문에 UI를 나타내는 코드는 읽기 어려워진다.
* 이에 따른 대안으로 나온 것이 템플릿 언어
    * 핸들바, Pug가 대표적, 앵귤러와 Vue.js도 나름의 템플릿 기능을 지원한다.
* 리액트에서는 jsx라는 자바스크립트 확장 문법을 사용하도록 권장한다.


### JSX

* JavaScript XML : 자바스크립트의 확장 문법
* 바벨로 변환해야한다.
* UI 다루는 코드의 가독성을 위한 문법
* JSX는 마크업 문법과 비슷하다.
```javascript
    <h1>Hello world</h1>
    // 위의 코드를 바벨로 변환하면 아래로 변환된다.
    // React.createElement('h1',null,'Hello world')
```

* 부모 자식 관계로 만들 수 있다.
```javascript
<header>
    <h1>Hello</h1>
</header>

/*
    React.createLement("header",null,
        React.createElement("h1",null,"Hello")
    );
*/
```
* 확실히 jsx 문법이 가독성이 좋아보인다. DOM 문서 구조와 거의 흡사
* JSX가 바벨에 의해서 리액트 코드로 호출이 된다. 
* 리액트 엘리먼트로 반환되기 때문에 ReactDOM의 render함수의 인자로 전달 할 수 있다.
