# 12장 다형성

* 상속의 목적은 코드 재사용이 아닌 타입 게층의 구조화
  * 객체지향 프로그래맹의 중요한 특성 중 하나인 다형성이 기반을 제공
* 상속을 사용할 때 질문하자
  * 단순 코드 재사용인가?
  * 클라이언트 관점에서 동일한 행동 인스턴스의 그룹화인가?
* 상속은 다형성을 구현할 일반적인 방법이다.
  * 최근 언어에는 상속 이외 다형성을 구현하는 방법들이 존재

### 다형성이란
* 많은 형태를 가질 수 있는 능력
* 하나의 추상 인터페이스에 대해 코드를 작성하고 이 추상 인터페이스에 대해 서로 다른 구현을 연결할 수 있는 능력
* 여러 타입을 대상으로 동작할 수 있는 코드 작성 방법

### 다형성 분류
* 유니버셜 다형성
  * 매개변수 다형성 : 제네릭
  * 포함다형성 : 우리가 알고 있는 일반적인 다형성, 상속을 이용(서브타입 계층 구축)
* 임시 다형성
  * 오버로딩 다형성 : 자바 오버로딩
  * 강제 다형성 : 동일한 연산자를 다양한 타입에 사용

    
```text
객체지향의 기본 : 데이터와 행동을 객체라고 불리는 하나의 실행 단위 안으로 통합하는 것, 데이터와 행동을 같이 고려 해야 한다.
```

* 데이터 관점의 상속 : 부모 데이터를 자식 데이터가 자동으로 포함
* 행동 관점 상속 : 부모의 퍼블릭 메서드를 자식이 자동으로 갖고 있음
* 단순하게 보면 부모가 갖고 있는 데이터와 행동을 자식에게 공유하는 재사용 메커니즘으로 보이지만 코드 재사용 목적으로 상속을 사용한다면 유지보수하기 힘든 코드로 이어진다.

### 다형성을 위한 상속 메커니즘

* 메커니즘을 구현한 주요 개념들 
  1. 업 캐스팅 : 부모타입 선언된 변수에 자식 인스턴스 할당
  2. 동적 메서드 탐색 
  3. 동적 바인딩 : 동일한 수신자에게 동일한 메시지, 동일한 코드지만 서로 다른 메서드를 실행할 수 있음
  4. self 참조
  5. super 참조

* 핵심: 수신한 객체를 기준으로 메시지를 처리할 메서드를 탐색을 한다.

#### 동적 메서드 탐색 메커니즘
* 메시지 수신 객체 > 자신을 생성한 클래스에 적합한 메서드가 존재하는지 탐색 -> 있으면 실행 -> 없으면 부모 탐색 
    * 적합한 메서드를 찾을 때 까지 반복

#### self 참조(전송)
* 메시지를 수신한 객체 자신을 뜻함
* 수신한 객체의 상속 계층들도 해당 객체 자신 안에 있다고 생각하자
* 동적 메서드 탐색 시 시작점은 self

```java
public class Parent {
    public void show() {
        System.out.println("show");
        detail();
    }
    
    public void detail() {
        System.out.println("Parent detail");
    }
}

public class Child extends Parent {
    
    @Override
    public void detail() {
        System.out.println("Child Detail");
    }
}

public class Main {
    public static void main(String[] args) {
        Parent test = new Child();
        test.show(); // show \n Child Detail
    }
}
```
* 수신하는 메시지를 실행할 메서드안에 내부 메서드가 존재할 경우 다시 self 부터 메서드 탐색이 시작
* 그렇기에 위의 코드처럶 show안에 detail 메서드가 있을 시에 다시 self 부터 메서드를 탐색해서 Child의 detail 함수가 호출된다.

#### super 참조(전송)
* 이때까지 super는 해당 객체의 바로 위 부모 객체의 메서드를 호출하는 것으로 이해
* 하지만 super.method는 해당 객체의 부모부터 메서드 탐색을 의미

