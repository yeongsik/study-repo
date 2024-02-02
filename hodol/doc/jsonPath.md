# jsonPath 사용법 정리 

* $ : 전달받은 json 객체의 root element
* $.name : root element의 속성
* $.errors[2] : root element 중 errors(배열) 중 2번 index 요소
* $.errors[2].field : 2번 index 요소 중 field 속성
* $.errors.length : errors 속성의 길이

### 대표 연산자
* $ : 모든 path 표현식의 시작, 루트 노드로부터 시작하는 기호
* @ : 처리되고 있는 현재 노드를 나타냄, 필터 조건에서 사용
* '*' : 와일드카드, 모든 요소와 매칭


### 제공 함수 
* min() : 숫자 배열의 최솟값 , Double 반환
* max() : 숫자 배열의 최댓값 , Double 반환
* avg() : 숫자 배열의 평균, Double 반환
* stddev() : 숫자 배열의 표준 편차값을 제공 , Double 반환
* length() : 배열의 길이 , Integer
* sum() : 배열의 합계 , Double
* keys() : 속성의 키값들을 제공, Set
* concat() : 입력된 파라미터와 연결한 새로운 객체를 반환
* append() : jsonPath 출력 배열에 새로운 아이템 추가, 파라미터와 동일한 객체 반환


### 해당 값이 존재하는지
* exists()를 사용

### 해당 값이 존재하지 않는지
* doesNoExist()

### 값에 동일성 비교
* value(값)
```java
jsonPath([검증할 부분]).value("기대값");

// Hamcrest matchers 이용
jsonPath([검증할 부분]).value(equalTo("기대값"));
```

* Hamcrest란
```text
Java 프로그래밍 언어로 부터 시작한, (현재는 다양한 언어에 대해 지원하고 있다.) 소프트웨어 테스트 작성을 지원하는 프레임 워크이다.
사용자 정의 assertion Matcher 작성(Hamcrest는 'Matchers'의 anagram-동일한 알파벳을 재배열하여 만들어낸 문장이나 단어-)을 지원하여 검증 규칙을 선언적으로 정의할 수 있다.
이 Matcher는 JUnit 및 jMock과 같은 단위 테스트 프레임워크에서 사용된다.
JUnit4에 포함되었지만, JUnit5에서 생략되었다.
```
