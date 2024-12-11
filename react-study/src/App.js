import logo from './logo.svg';
import './App.css';
import UserCard from "./components/UserCard";

/*
    메인 앱의 컴포넌트 파일
    이 곳에 컴포넌트를 추가하거나 수정할 수 있습니다.
 */


/*
    JSX 문법과 HTML 문법 차이
    1. class -> className
    2. for -> htmlFor
    3. style -> 객체 형태로 작성
 */

function App() {
  return (
    <div className="App">
      <h1>유저정보</h1>
      <UserCard />
    </div>
  );
}

export default App;
